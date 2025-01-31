import {
	$view,
	$viewport,
	ConfigOptions,
	ManagedObject,
	StringConvertible,
	ui,
	UIColor,
	UIComponent,
	UIIconResource,
	UILabel,
	ViewBuilder,
	ViewComposite,
} from "talla-ui";

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
	padding: UIComponent.Offsets = 16;
	/** Padding for the content area in narrow viewports, defaults to 16 */
	paddingNarrow: UIComponent.Offsets = 16;

	/** Minimum width of the pane */
	minWidth: string | number = 0;
	/** Minimum height of the pane */
	minHeight: string | number = 0;

	/** Style for the title label */
	titleStyle: UILabel.StyleValue = ui.style.LABEL.extend({
		bold: true,
		fontSize: 16,
	});

	/** Height of the header, defaults to 48 */
	headerHeight = 48;
	/** Background color of the header backdrop, defaults to slightly brightened background color */
	headerBackdropBackground = ui.color.BACKGROUND.brighten(0.15);
	/** Text color of the header backdrop, if any */
	headerBackdropTextColor?: UIColor;
	/** Visual effect for the header backdrop, defaults to shadow */
	headerBackdropEffect = ui.effect.SHADOW;

	/** Icon for the back button */
	backButtonIcon = ui.icon.CHEVRON_BACK;
	/** Accessible label for the back button */
	backButtonAccessibleLabel?: StringConvertible;
	/** Icon for the menu button */
	menuButtonIcon = ui.icon.MENU;
	/** Accessible label for the menu button */
	menuButtonAccessibleLabel?: StringConvertible;
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
 * Icon buttons can be added to the header row. Standard icon buttons include a back button (which emits the `NavigateBack` event, handled by `Activity`), and a menu button (which emits a `ShowMenu` event). Other icons can be added manually with a {@link HeaderPaneToolbar}, and will appear on the far side of the header row.
 *
 * @see {@link HeaderPaneStyles}+
 * @see {@link HeaderPaneToolbar}
 */
export class HeaderPane extends ViewComposite.define({
	/** The title of the header pane */
	title: StringConvertible.EMPTY,
	/** The icon displayed next to the title */
	titleIcon: undefined as UIIconResource | undefined,
	/** True if the header should include a solid backdrop and effect */
	backdrop: true,
	/** True if the header should be shown at all */
	showHeader: true,
	/** True if a back navigation button should be shown */
	navigateBack: false,
	/** True if a menu button should be shown (instead of back button) */
	showMenu: false,
	/** A set of styles that are applied to this composite, an instance of {@link HeaderPaneStyles} */
	styles: HeaderPaneStyles.default,
	/** UI component identifier */
	name: "HeaderPane",
}) {
	protected defineView(...content: ViewBuilder[]) {
		let toolbarBuilder: ViewBuilder | undefined;
		if (content[0]?.View === HeaderPaneToolbar) {
			toolbarBuilder = content.shift();
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
					style: { css: { zIndex: "1" } },
					layout: { clip: false },
					textColor: $view.boolean("backdrop").select(textColor),
				},

				// backdrop with shadow, if shown
				ui.animate(
					{
						ignoreFirstShow: $view.not("paneRendered"),
						showAnimation: ui.animation.FADE_IN_DOWN,
						hideAnimation: ui.animation.FADE_OUT_UP,
					},
					ui.cell({
						hidden: $view.not("backdrop"),
						background: this.styles.headerBackdropBackground,
						position: { gravity: "cover" },
						effect: this.styles.headerBackdropEffect,
					})
				),

				// transparent row with toolbar, if any
				ui.row(
					{
						height: this.styles.headerHeight,
						padding: boundPadding,
						position: { gravity: "cover" },
					},
					ui.conditional(
						{ state: $view.boolean("leadingButtonIcon") },
						ui.animate(
							{ showAnimation: ui.animation.FADE_IN_RIGHT },
							ui.button({
								icon: $view("leadingButtonIcon"),
								accessibleLabel: $view("leadingButtonAccessibleLabel"),
								style: ui.style.BUTTON_ICON,
								position: { start: -8 },
								onClick: "HeaderLeadingButtonClick",
							})
						)
					),
					ui.animate(
						{
							ignoreFirstShow: $view.not("paneRendered"),
							showAnimation: ui.animation.FADE_IN_UP,
						},
						ui.label({
							hidden: $view.boolean("title").or("titleIcon").not(),
							text: $view.string("title"),
							icon: $view("titleIcon"),
							iconMargin: 16,
							grow: true,
							style: this.styles.titleStyle,
						})
					),
					...(toolbarBuilder ? [ui.spacer(), toolbarBuilder] : [ui.spacer()])
				)
			),

			// -- inner content below the header area
			...content
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
		ManagedObject.observe(this, ["navigateBack", "showMenu"], () => {
			this._updateLeadingButton();
		});
		this._updateLeadingButton();
	}

	protected onHeaderLeadingButtonClick() {
		if (this.navigateBack) this.emit("NavigateBack");
		if (this.showMenu) this.emit("ShowMenu");
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
export const HeaderPaneToolbar = ViewComposite.define(
	{
		/** Row spacing, defaults to 4 */
		spacing: 4,
	},
	(values, ...content) =>
		ui.row({ align: "end", spacing: values.spacing }, ...content)
);
