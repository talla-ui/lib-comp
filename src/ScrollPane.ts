import {
	$either,
	$neither,
	$view,
	$viewport,
	app,
	Binding,
	StringConvertible,
	ui,
	UIColor,
	UIComponent,
	UIIconResource,
	UILabel,
	UIScrollContainer,
	ViewBuilder,
	ViewEvent,
} from "talla-ui";
import {
	HeaderPane,
	HeaderPaneStyles,
	HeaderPaneToolbar,
} from "./HeaderPane.js";
import { NavRow } from "./NavContainer.js";

// Place to remember scroll positions:
const scrollPositions = new Map<string, number>();

const $scrollPaneView = Binding.createFactory("scrolled");

/** Defines the behavior of the header in a {@link ScrollPane} component */
export type ScrollPaneHeaderMode = "fixed" | "dynamic" | "none";

/**
 * Style configuration for a {@link ScrollPane} component
 *
 * Objects of this type are passed to {@link ScrollPane} as the `styles` preset property.
 */
export class ScrollPaneStyles extends HeaderPaneStyles {
	/** Default styles that are used when no other styles are specified */
	static default = new ScrollPaneStyles();

	/** Style for the page title */
	pageTitleStyle: UILabel.StyleValue = ui.style.LABEL.extend({
		fontSize: 20,
		bold: true,
	});

	/** Title icon margin for the page title, defaults to 16 */
	pageTitleIconMargin: number = 16;
	/** Title icon size for the page title, defaults to 24 */
	pageTitleIconSize: number = 24;
	/** Title icon color for the page title, defaults to text color */
	pageTitleIconColor?: UIColor;

	/** Height of the page title row, defaults to 48; when increased drastically, remember to increase the scroll threshold as well */
	pageTitleRowHeight: number = 48;

	/** Maximum width of the inner content */
	maxInnerWidth = 1024;
	/** Threshold at which the dynamic header mode changes appearance, defaults to 24 */
	scrollThreshold = 24;
}

/**
 * Component for a scroll pane
 *
 * A scroll pane component provides a complete 'page' layout solution, which includes a heading with title, icon buttons, and a _scrollable_ content area.
 *
 * Within a scroll pane, the inline title disappears and a distinct top row appears instead when the user scrolls up. The inline title appears again when the user scrolls back to the top of the content area.
 *
 * Icon buttons can be added to the header row, in the same way as for {@link HeaderPane} — which does the same, but without scrollable content.
 *
 * The layout of the element is based on the {@link HeaderPane} component. The scroll pane component adds logic for scrolling, and alternating between fixed and inline headers.
 *
 * @see {@link ScrollPaneStyles}+
 * @see {@link ScrollPaneHeaderMode}
 */
export class ScrollPane extends UIComponent.define({
	/** The title of the scroll pane */
	title: StringConvertible.EMPTY,
	/** The icon displayed next to the title */
	titleIcon: undefined as UIIconResource | undefined,
	/** True if a back navigation button should be shown, or an event to emit when clicked (other than `NavigateBack`) */
	navigateBack: false as boolean | string,
	/** True if a menu button should be shown (instead of back button), or an event to emit when clicked (other than `ShowMenu`) */
	showMenu: false as boolean | string,
	/** True if the title (and icon) should be clickable, or an event to emit when clicked (other than `TitleClick`) */
	titleClick: false as boolean | string,
	/** True if the toolbar should be hidden */
	hideToolbar: false,
	/** True if the navbar should be hidden */
	hideNavbar: false,
	/** True to save and restore the scroll position when re-rendered (in memory only; requires name to be set) */
	restoreScroll: false,
	/** The type of header behavior: none (no header), fixed, or dynamic with scroll; defaults to dynamic */
	headerMode: "fixed" as ScrollPaneHeaderMode,
	/** A set of styles that are applied to this component, an instance of {@link ScrollPaneStyles} */
	styles: ScrollPaneStyles.default,
	/** UI component identifier */
	name: "ScrollPane",
}) {
	protected defineView(...content: ViewBuilder[]) {
		let boundPadding = $viewport
			.not("col2")
			.select(this.styles.paddingNarrow, this.styles.padding);
		let boundFixedState = $either(
			$view("headerMode").matches("fixed"),
			$view("headerMode").matches("dynamic").and("scrolled")
		);

		let toolbarBuilder: ViewBuilder | undefined;
		let navbarBuilder: ViewBuilder | undefined;
		let inner: ViewBuilder[] = [];
		for (let item of content) {
			if (item?.View === HeaderPaneToolbar) {
				toolbarBuilder = item;
			} else if (item?.View === NavRow) {
				navbarBuilder = item;
			} else {
				inner.push(item);
			}
		}

		return ui.use(
			HeaderPane,
			{
				showHeader: $view("headerMode").matchesNone("none"),
				backdrop: boundFixedState,
				styles: this.styles,
				title: boundFixedState.and("title").else(undefined),
				titleIcon: boundFixedState.and("titleIcon").else(undefined),
				navigateBack: $view("navigateBack"),
				showMenu: $view("showMenu"),
				titleClick: $view("titleClick"),
				hideToolbar: $view("hideToolbar"),
				hideNavbar: $view("hideNavbar"),
			},
			...([navbarBuilder, toolbarBuilder].filter(Boolean) as ViewBuilder[]),
			ui.scroll(
				{
					topThreshold: this.styles.scrollThreshold,
					onBeforeRender: "PaneScrollRender",
					onRendered: "PaneScrollRendered",
				},
				ui.cell({
					position: { gravity: "overlay", bottom: "100%", start: 0, end: 0 },
					height: "100%",
					background: $view("headerMode")
						.matches("fixed")
						.select(this.styles.headerBackdropBackground),
				}),
				ui.cell(
					{
						style: {
							width: "100%",
							maxWidth: this.styles.maxInnerWidth,
							grow: 0,
						},
						layout: { clip: false },
						position: { gravity: "center" },
						padding: boundPadding,
					},
					ui.row(
						{
							height: $scrollPaneView("title")
								.or("titleIcon")
								.select(this.styles.pageTitleRowHeight, 0),
							hidden: $scrollPaneView("headerMode").matchesNone("dynamic"),
						},
						ui.show(
							{
								when: $neither(
									$scrollPaneView("headerMode").matchesNone("dynamic"),
									$scrollPaneView("scrolled")
								),
								ignoreFirstShowAnimation:
									$scrollPaneView("headerMode").matches("dynamic"),
								showAnimation: ui.animation.FADE_IN_DOWN,
								hideAnimation: ui.animation.FADE_OUT_UP,
							},
							ui.label({
								text: $scrollPaneView("title"),
								icon: $scrollPaneView("titleIcon"),
								iconMargin: this.styles.pageTitleIconMargin,
								iconSize: this.styles.pageTitleIconSize,
								iconColor: this.styles.pageTitleIconColor,
								style: this.styles.pageTitleStyle,
							})
						)
					),
					...inner
				)
			)
		);
	}

	/** True if the content has been scrolled up past the threshold */
	protected scrolled = false;

	protected onPaneScrollRender(e: ViewEvent<UIScrollContainer>) {
		this._mainScroll = e.source;
		return true;
	}

	protected onPaneScrollRendered(e: ViewEvent<UIScrollContainer>) {
		if (this.restoreScroll && this.name) {
			app.renderer?.schedule(() => {
				e.source.scrollTo(scrollPositions.get(this.name) ?? 0);
			}, true);
		}
		return true;
	}

	protected onScroll(e: UIScrollContainer.ScrollEvent) {
		if (e.source === this._mainScroll) this.scrolled = !e.data.atTop;
		if (this.restoreScroll && this.name) {
			scrollPositions.set(this.name, e.data.yOffset);
		}
		return true;
	}

	protected onScrollEnd(e: UIScrollContainer.ScrollEvent) {
		if (e.source === this._mainScroll) this.scrolled = !e.data.atTop;
		if (this.restoreScroll && this.name) {
			scrollPositions.set(this.name, e.data.yOffset);
		}
		return true;
	}

	private _mainScroll?: UIScrollContainer;
}
