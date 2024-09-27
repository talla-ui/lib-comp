import {
	$view,
	$viewport,
	bind,
	StringConvertible,
	ui,
	UIIconResource,
	UIScrollContainer,
	ViewClass,
	ViewComposite,
	ViewEvent,
} from "talla-ui";
import {
	HeaderPane,
	HeaderPaneStyles,
	HeaderPaneToolbar,
} from "./HeaderPane.js";

const $scrollPaneView = bind.$on("scrolled");

/** Defines the behavior of the header in a {@link ScrollPane} composite view */
export type ScrollPaneHeaderMode = "fixed" | "dynamic" | "none";

/**
 * Style configuration for a {@link ScrollPane} composite
 *
 * Objects of this type are passed to {@link ScrollPane} as the `styles` preset property.
 */
export class ScrollPaneStyles extends HeaderPaneStyles {
	/** Default styles that are used when no other styles are specified */
	static default = new ScrollPaneStyles();

	/** Style for the page title */
	pageTitleStyle = ui.style.LABEL_TITLE;
	/** Maximum width of the inner content */
	maxInnerWidth = 1024;
	/** Threshold at which the dynamic header mode changes appearance, defaults to 24 */
	scrollThreshold = 24;
}

/**
 * View composite for a scroll pane
 *
 * A scroll pane composite provides a complete 'page' layout solution, which includes a heading with title, icon buttons, and a _scrollable_ content area.
 *
 * Within a scroll pane, the inline title disappears and a distinct top row appears instead when the user scrolls up. The inline title appears again when the user scrolls back to the top of the content area.
 *
 * Icon buttons can be added to the header row, in the same way as for {@link HeaderPane} — which does the same, but without scrollable content.
 *
 * The layout of the element is based on the {@link HeaderPane} composite. The scroll pane composite adds logic for scrolling, and alternating between fixed and inline headers.
 *
 * @see {@link ScrollPaneStyles}+
 * @see {@link ScrollPaneHeaderMode}
 */
export class ScrollPane extends ViewComposite.define({
	/** The title of the scroll pane */
	title: StringConvertible.EMPTY,
	/** The icon displayed next to the title */
	titleIcon: undefined as UIIconResource | undefined,
	/** True if a back navigation button should be included in the header */
	navigateBack: false,
	/** True if a menu button should be included in the header (instead of back button) */
	showMenu: false,
	/** The type of header behavior: none (no header), fixed, or dynamic with scroll; defaults to dynamic */
	headerMode: "fixed" as ScrollPaneHeaderMode,
	/** A set of styles that are applied to this composite, an instance of {@link ScrollPaneStyles} */
	styles: ScrollPaneStyles.default,
	/** UI component identifier */
	name: "ScrollPane",
}) {
	protected defineView(...content: ViewClass[]) {
		let boundPadding = $viewport
			.not("col2")
			.select(this.styles.paddingNarrow, this.styles.padding);
		let boundFixedState = $view
			.bind("headerMode")
			.matches("fixed")
			.or($view.bind("headerMode").matches("dynamic").and("scrolled"));

		let toolbar: ViewClass | undefined;
		if (content[0]?.prototype instanceof HeaderPaneToolbar) {
			toolbar = content.shift();
		}
		let inner = toolbar ? [toolbar] : [];
		inner.push(
			ui.scroll(
				{
					topThreshold: this.styles.scrollThreshold,
					onBeforeRender: "PaneScrollRender",
				},
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
							height: $scrollPaneView
								.bind("title")
								.or("titleIcon")
								.select(48, 0),
							hidden: $scrollPaneView
								.bind("headerMode")
								.matches("dynamic")
								.not(),
						},
						ui.animate(
							{
								ignoreFirstShow: $scrollPaneView
									.bind("headerMode")
									.matches("dynamic"),
								showAnimation: ui.animation.FADE_IN_DOWN,
								hideAnimation: $scrollPaneView
									.boolean("scrolled")
									.select(ui.animation.FADE_OUT_UP),
							},
							ui.label({
								text: $scrollPaneView.string("title"),
								icon: $scrollPaneView.bind("titleIcon"),
								iconMargin: 16,
								hidden: $scrollPaneView
									.bind("headerMode")
									.matches("dynamic")
									.and("scrolled"),
								style: this.styles.pageTitleStyle,
							})
						)
					),
					...content
				)
			)
		);

		return ui.use(
			HeaderPane,
			{
				showHeader: $view.bind("headerMode").matches("none").not(),
				backdrop: boundFixedState,
				styles: this.styles,
				title: boundFixedState.and("title").else(undefined),
				titleIcon: boundFixedState.and("titleIcon").else(undefined),
				navigateBack: $view.boolean("navigateBack"),
				showMenu: $view.boolean("showMenu"),
			},
			...inner
		);
	}

	/** True if the content has been scrolled up past the threshold */
	protected scrolled = false;

	protected onPaneScrollRender(e: ViewEvent<UIScrollContainer>) {
		this._mainScroll = e.source;
		return true;
	}

	protected onScroll(e: UIScrollContainer.ScrollEvent) {
		if (e.source === this._mainScroll) this.scrolled = !e.data.atTop;
		return true;
	}

	protected onScrollEnd(e: UIScrollContainer.ScrollEvent) {
		if (e.source === this._mainScroll) this.scrolled = !e.data.atTop;
		return true;
	}

	private _mainScroll?: UIScrollContainer;
}
