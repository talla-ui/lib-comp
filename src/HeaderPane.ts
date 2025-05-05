import {
	$view,
	$viewport,
	ConfigOptions,
	ObservedObject,
	StringConvertible,
	ui,
	UIColor,
	UIRenderable,
	UIIconResource,
	UILabel,
	ViewBuilder,
	UIComponent,
	UICell,
	ViewEvent,
} from "talla-ui";
import { NavRow } from "./NavContainer";

/**
 * Style configuration for a {@link HeaderPane} composite
 *
 * Objects of this type are passed to {@link HeaderPane} as the `styles` preset property.
 */
export class HeaderPaneStyles extends ConfigOptions {
	/** Default styles that are used when no other styles are specified */
	static default = new HeaderPaneStyles();

	/** Background color of the pane, defaults to transparent */
	background = ui.color.CLEAR;
	/** True to clip cell content (default) */
	clip = true;

	/** Padding for the content area, defaults to 16 */
	padding: UIRenderable.Offsets = 16;
	/** Padding for the content area in narrow viewports, defaults to 16 */
	paddingNarrow: UIRenderable.Offsets = 16;

	/** Minimum width of the pane */
	minWidth: string | number = 0;
	/** Minimum height of the pane */
	minHeight: string | number = 0;

	/** Style for the title label */
	titleStyle: UILabel.StyleValue = ui.style.LABEL.extend({
		bold: true,
		fontSize: 16,
	});

	/** Title icon margin, defaults to 16 */
	titleIconMargin: number = 16;
	/** Title icon size, defaults to 24 */
	titleIconSize: number = 24;
	/** Title icon color, defaults to text color */
	titleIconColor?: UIColor;

	/** Height of the header, defaults to 48 */
	headerHeight = 48;
	/** Maximum width of the header, defaults to 100% if not set */
	maxHeaderWidth?: string | number = undefined;

	/** Background color of the header backdrop, defaults to slightly brightened background color */
	headerBackdropBackground = ui.color.BACKGROUND.brighten(0.15);
	/** Text color of the header backdrop, if any */
	headerBackdropTextColor?: UIColor;
	/** Visual effect for the header backdrop, defaults to shadow */
	headerBackdropEffect = ui.effect.SHADOW;
	/** Cell style for the header as a whole */
	headerStyle?: UICell.StyleValue;

	/** Icon for the back button */
	backButtonIcon = ui.icon.CHEVRON_BACK;
	/** Accessible label for the back button */
	backButtonAccessibleLabel?: StringConvertible;
	/** Icon for the menu button */
	menuButtonIcon = ui.icon.MENU;
	/** Accessible label for the menu button */
	menuButtonAccessibleLabel?: StringConvertible;

	/** True if the navbar should be centered, defaults to false */
	centerNavbar = false;
}

/**
 * View composite for a header pane
 *
 * A header pane composite provides a complete 'screen' layout solution, including a header row and content area.
 *
 * The header row can be hidden, shown with a distinct background color and effect, or shown without any background at all.
 *
 * The content area is not scrollable by default. For scrollable 'page' content, consider using a {@link ScrollPane} composite instead.
 *
 * Icon buttons can be added to the header row. Standard icon buttons include a back button (which emits the `NavigateBack` event or a custom event configured using the `navigateBack` property), and a menu button (which emits a `ShowMenu` event or a custom event configured using the `showMenu` property). Other icons can be added manually with a {@link HeaderPaneToolbar}, and will appear on the far side of the header row.
 *
 * @see {@link HeaderPaneStyles}+
 * @see {@link HeaderPaneToolbar}
 */
export class HeaderPane extends UIComponent.define({
	/** The title of the header pane */
	title: StringConvertible.EMPTY,
	/** The icon displayed next to the title */
	titleIcon: undefined as UIIconResource | undefined,
	/** True if the header should include a solid backdrop and effect */
	backdrop: true,
	/** True if the toolbar should be hidden */
	hideToolbar: false,
	/** True if the navbar should be hidden */
	hideNavbar: false,
	/** True if the header should be shown at all */
	showHeader: true,
	/** True if a back navigation button should be shown, or an event to emit when clicked (other than `NavigateBack`) */
	navigateBack: false as boolean | string,
	/** True if a menu button should be shown (instead of back button), or an event to emit when clicked (other than `ShowMenu`) */
	showMenu: false as boolean | string,
	/** True if the title (and icon) should be clickable, or an event to emit when clicked (other than `TitleClick`) */
	titleClick: false as boolean | string,
	/** A set of styles that are applied to this composite, an instance of {@link HeaderPaneStyles} */
	styles: HeaderPaneStyles.default,
	/** UI component identifier */
	name: "HeaderPane",
}) {
	protected defineView(...content: ViewBuilder[]) {
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

		function makeSection(
			distribution: "start" | "center" | "end",
			content: ViewBuilder[],
			properties?: ui.PresetType<typeof UICell>
		) {
			return ui.cell(
				{
					style: {
						width: "100%",
						shrink: 1,
					},
					layout: {
						axis: "horizontal",
						gravity: "center",
						distribution,
						clip: false,
					},
					...properties,
				},
				...content
			);
		}

		let boundPadding = $viewport
			.not("col2")
			.select(this.styles.paddingNarrow, this.styles.padding);
		let textColor =
			this.styles.headerBackdropTextColor ||
			this.styles.headerBackdropBackground?.text();

		return ui.cell(
			{
				style: {
					shrink: 1,
					maxHeight: "100%",
					maxWidth: "100%",
					minWidth: this.styles.minWidth,
					minHeight: this.styles.minHeight,
					background: this.styles.background,
				},
				layout: { clip: this.styles.clip },
				name: this.name,
			},

			// -- header row
			ui.cell(
				{
					hidden: $view.not("showHeader"),
					height: this.styles.headerHeight,
					grow: false,
					style: ui.style(this.styles.headerStyle, { css: { zIndex: "1" } }),
					layout: { clip: false },
					textColor: $view("backdrop").select(textColor),
				},

				// backdrop with shadow, if shown
				ui.show(
					{
						when: $view("backdrop"),
						ignoreFirstShowAnimation: $view.not("paneRendered"),
						showAnimation: ui.animation.FADE_IN_DOWN,
						hideAnimation: ui.animation.FADE_OUT_UP,
					},
					ui.cell({
						background: this.styles.headerBackdropBackground,
						position: { gravity: "cover" },
						effect: this.styles.headerBackdropEffect,
					})
				),

				// transparent row with toolbar, if any
				ui.cell(
					{
						padding: boundPadding,
						margin: "auto", // center horz when limited width
						style: {
							height: this.styles.headerHeight,
							width: "100%",
							maxWidth: this.styles.maxHeaderWidth,
						},
						position: { gravity: "cover" },
						layout: { axis: "horizontal", separator: { space: 16 } },
					},
					makeSection(
						"start",
						[
							ui.show(
								{
									when: $view("leadingButtonIcon"),
									showAnimation: ui.animation.FADE_IN_RIGHT,
								},
								ui.button({
									icon: $view("leadingButtonIcon"),
									accessibleLabel: $view("leadingButtonAccessibleLabel"),
									style: ui.style.BUTTON_ICON,
									position: { start: -8 },
									onClick: "HeaderLeadingButtonClick",
								})
							),
							ui.show(
								{
									when: $view("title").or("titleIcon"),
									ignoreFirstShowAnimation: $view.not("paneRendered"),
									showAnimation: ui.animation.FADE_IN_UP,
								},
								ui.label({
									text: $view("title"),
									icon: $view("titleIcon"),
									iconMargin: this.styles.titleIconMargin,
									iconSize: this.styles.titleIconSize,
									iconColor: this.styles.titleIconColor,
									style: ui.style(
										this.styles.titleStyle,
										this.titleClick ? { cursor: "pointer" } : undefined
									),
									onClick: "TitleClick",
								})
							),
						],
						{
							width: this.styles.centerNavbar ? "100%" : "auto",
						}
					),
					makeSection(
						this.styles.centerNavbar ? "center" : "start",
						navbarBuilder ? [navbarBuilder] : [],
						{
							hidden: $view("hideNavbar"),
						}
					),
					makeSection("end", toolbarBuilder ? [toolbarBuilder] : [], {
						hidden: $view("hideToolbar"),
					})
				)
			),

			// -- inner content below the header area
			...inner
		);
	}

	/** The icon for the leading button in the header */
	protected leadingButtonIcon?: UIIconResource = undefined;
	/** The accessible label for the leading button in the header */
	protected leadingButtonAccessibleLabel?: StringConvertible = undefined;
	/** True if the pane has been rendered at all */
	protected paneRendered = false;

	protected beforeRender() {
		setTimeout(() => {
			this.paneRendered = true;
		}, 100);
		ObservedObject.observe(this, ["navigateBack", "showMenu"], () => {
			this._updateLeadingButton();
		});
		this._updateLeadingButton();
	}

	protected onTitleClick(e: ViewEvent) {
		if (typeof this.titleClick === "string") this.emit(this.titleClick);
		else return !this.titleClick;
	}

	protected onHeaderLeadingButtonClick() {
		if (this.navigateBack) {
			this.emit(
				typeof this.navigateBack === "string"
					? this.navigateBack
					: "NavigateBack"
			);
		} else if (this.showMenu) {
			this.emit(typeof this.showMenu === "string" ? this.showMenu : "ShowMenu");
		}
		return true;
	}

	private _updateLeadingButton() {
		if (this.navigateBack) {
			this.leadingButtonIcon = this.styles.backButtonIcon;
			this.leadingButtonAccessibleLabel = this.styles.backButtonAccessibleLabel;
		} else if (this.showMenu) {
			this.leadingButtonIcon = this.styles.menuButtonIcon;
			this.leadingButtonAccessibleLabel = this.styles.menuButtonAccessibleLabel;
		} else {
			this.leadingButtonIcon = undefined;
		}
	}
}

/**
 * View composite for a header pane toolbar
 *
 * This composite is used to add additional buttons or controls to the opposite side of the header in a {@link HeaderPane}.
 *
 * @class
 */
export const HeaderPaneToolbar = UIComponent.define(
	{
		/** Row spacing, defaults to 4 */
		spacing: 4,
	},
	(values, ...content) =>
		ui.row({ align: "end", spacing: values.spacing }, ...content)
);
