import {
	$navigation,
	$view,
	ConfigOptions,
	StringConvertible,
	UIButton,
	UICell,
	UIRenderable,
	UIContainer,
	UIIconResource,
	UIStyle,
	ViewBuilder,
	UIComponent,
	ui,
	$either,
} from "talla-ui";

/**
 * Style configuration for {@link NavColumn} and {@link NavRow} components
 *
 * Objects of this type are passed to {@link NavColumn} and {@link NavRow} components as the `styles` preset property.
 */
export class NavContainerStyles extends ConfigOptions {
	/** Default styles that are used when no other styles are specified */
	static defaults = new NavContainerStyles();

	/** The space between navigation buttons, defaults to 8 */
	spacing = 8;

	/** Separator options used within the column or row container */
	separator?: UIContainer.SeparatorOptions;

	/** Cell style for the outer container */
	containerStyle: UICell.StyleValue = ui.style.CELL.extend({ grow: 0 });

	/** Button style for contained navigation buttons */
	navButtonStyle: UIButton.StyleValue = ui.style.BUTTON_PLAIN.extend({
		textAlign: "start",
	});

	/** The margin between button icons and labels, defaults to 12 */
	iconMargin = 12;
	/** The button icon size, defaults to 20 */
	iconSize = 20;

	// predefined styles

	static PLAIN = NavContainerStyles.init({
		navButtonStyle: ui.style.BUTTON_TEXT.extend(
			{
				padding: { x: 8, y: 6 },
				opacity: 0.5,
			},
			{
				[UIStyle.STATE_HOVERED]: true,
				opacity: 0.8,
			},
			{
				[UIStyle.STATE_PRESSED]: true,
				opacity: 1,
			}
		),
	});

	static UNDERLINE = NavContainerStyles.init({
		navButtonStyle: ui.style.BUTTON_TEXT.extend(
			{
				padding: { x: 8, y: 6 },
				opacity: 0.5,
			},
			{
				[UIStyle.STATE_HOVERED]: true,
				opacity: 0.8,
			},
			{
				[UIStyle.STATE_PRESSED]: true,
				borderThickness: { y: 4 },
				borderColor: { bottom: ui.color.PRIMARY },
				opacity: 1,
			}
		),
	});

	static TAB_BAR = NavContainerStyles.init({
		spacing: 4,
		containerStyle: ui.style.CELL.extend({
			background: ui.color.TEXT.alpha(0.1),
			borderRadius: 32,
			padding: 3,
		}),
		navButtonStyle: ui.style.BUTTON.extend(
			{
				padding: { x: 24, y: 4 },
				background: ui.color.CLEAR,
				minWidth: 88,
				borderRadius: 32,
				lineHeight: 1.75,
				textColor: ui.color.TEXT.alpha(0.5),
			},
			{
				[UIStyle.STATE_PRESSED]: true,
				background: ui.color.fg(ui.color.BACKGROUND, ui.color.PRIMARY),
				borderColor: ui.color.TEXT.alpha(0.2),
				textColor: ui.color.fg(ui.color.TEXT, ui.color.PRIMARY.text()),
			}
		),
	});

	static LIST_COLUMN = NavContainerStyles.init({
		separator: { lineThickness: 1, lineColor: ui.color.SEPARATOR },
		navButtonStyle: ui.style.BUTTON_PLAIN.extend(
			{
				textAlign: "start",
				borderRadius: 0,
			},
			{
				[UIStyle.STATE_FOCUSED]: true,
				[UIStyle.STATE_PRESSED]: false,
				background: ui.color.BACKGROUND.contrast(-0.1),
			},
			{
				[UIStyle.STATE_PRESSED]: true,
				background: ui.color.PRIMARY_BG,
				textColor: ui.color.PRIMARY_BG.text(),
			}
		),
	});

	static LIST_SIDEBAR = NavContainerStyles.init({
		spacing: 4,
		iconSize: 24,
		iconMargin: 20,
		navButtonStyle: ui.style.BUTTON_PLAIN.extend(
			{
				lineBreakMode: "clip",
				textAlign: "start",
				borderRadius: 8,
				padding: { x: 12, y: 8 },
				textColor: ui.color.TEXT.alpha(0.5),
			},
			{
				[UIStyle.STATE_HOVERED]: true,
				background: ui.color.CLEAR,
				textColor: ui.color.TEXT.alpha(0.8),
			},
			{
				[UIStyle.STATE_PRESSED]: true,
				background: ui.color.TEXT.alpha(0.1),
				textColor: ui.color.TEXT,
			}
		),
	});

	static LIST_SIDEBAR_REVERSE = NavContainerStyles.init({
		...NavContainerStyles.LIST_SIDEBAR,
		navButtonStyle: (
			NavContainerStyles.LIST_SIDEBAR
				.navButtonStyle as UIStyle<UIButton.StyleDefinition>
		)
			.extend(
				{
					[UIStyle.STATE_HOVERED]: true,
					background: ui.color.BACKGROUND.alpha(0.1),
				},
				{
					[UIStyle.STATE_PRESSED]: true,
					background: ui.color.BACKGROUND.alpha(0.2),
				}
			)
			.override({
				textColor: ui.color.BACKGROUND,
			}),
	});

	static LIST_SIDEBAR_DARK = NavContainerStyles.init({
		...NavContainerStyles.LIST_SIDEBAR,
		navButtonStyle: (
			NavContainerStyles.LIST_SIDEBAR
				.navButtonStyle as UIStyle<UIButton.StyleDefinition>
		)
			.extend(
				{
					[UIStyle.STATE_HOVERED]: true,
					background: ui.color.BLACK.alpha(0.1),
				},
				{
					[UIStyle.STATE_PRESSED]: true,
					background: ui.color.BLACK.alpha(0.2),
				}
			)
			.override({
				textColor: ui.color.WHITE,
			}),
	});
}

// ----------------------------------------------------------------------------
// Navigation column
// ----------------------------------------------------------------------------

/**
 * Component for a navigation button column
 *
 * A navigation column component displays several navigation buttons in a vertical layout, allowing the user to navigate between different pages or (detail) items by pressing one of the buttons.
 *
 * Navigation buttons are added as presets of {@link PageNavButton} or {@link DetailNavButton} within the content of this component. The button that corresponds to the current page or detail path is automatically shown as 'pressed'.
 *
 * @see {@link NavContainerStyles}+
 * @see {@link NavRow}
 * @see {@link PageNavButton}+
 * @see {@link DetailNavButton}+
 */
export class NavColumn extends UIComponent.define({
	/** The width of the outer container, defaults to undefined (auto) */
	width: undefined as string | number | undefined,
	/** The margin around the outer container, defaults to 0 */
	margin: 0 as UIRenderable.Offsets,
	/** True if the container should grow to fill the available space, defaults to false */
	grow: false,
	/** A set of styles that are applied to this component, an instance of {@link NavContainerStyles} */
	styles: NavContainerStyles.defaults,
}) {
	protected defineView(...content: ViewBuilder[]) {
		return ui.cell(
			{
				layout: { clip: false },
				margin: this.margin,
				width: this.width,
				style: this.styles.containerStyle,
				name: "NavColumn",
				grow: this.grow,
			},
			ui.column(
				{
					grow: true,
					spacing: this.styles.spacing,
					layout: { separator: this.styles.separator },
				},
				...content
			)
		);
	}
}

// ----------------------------------------------------------------------------
// Navigation row
// ----------------------------------------------------------------------------

/**
 * Component for a navigation button row
 *
 * A navigation row component displays several navigation buttons in a horizontal layout, allowing the user to navigate between different pages or (detail) items by pressing one of the buttons.
 *
 * Navigation buttons are added as presets of {@link PageNavButton} or {@link DetailNavButton} within the content of this component. The button that corresponds to the current page or detail path is automatically shown as 'pressed'.
 *
 * @see {@link NavContainerStyles}
 * @see {@link NavColumn}
 * @see {@link PageNavButton}
 * @see {@link DetailNavButton}
 */
export class NavRow extends UIComponent.define({
	/** The margin around the outer container, defaults to 0 */
	margin: 0 as UIRenderable.Offsets,
	/** True if the container should grow to fill the available space, defaults to false */
	grow: false,
	/** A set of styles that are applied to this component, an instance of {@link NavContainerStyles} */
	styles: NavContainerStyles.defaults,
}) {
	protected defineView(...content: ViewBuilder[]) {
		return ui.cell(
			{
				layout: { clip: false },
				margin: this.margin,
				style: this.styles.containerStyle,
				name: "NavRow",
				grow: this.grow,
			},
			ui.row(
				{
					spacing: this.styles.spacing,
					layout: { separator: this.styles.separator },
				},
				...content
			)
		);
	}
}

// ----------------------------------------------------------------------------
// Navigation buttons
// ----------------------------------------------------------------------------

/**
 * Component that encapsulates a page navigation button
 *
 * A page navigation button is used within a {@link NavColumn} or {@link NavRow} to represent a specific page ID. The button emits a `Navigate` event when pressed, and the button appears 'pressed' if the current page matches the button's page ID.
 */
export class PageNavButton extends UIComponent.define({
	/** The page ID to associate with this button */
	pageId: undefined as string | undefined,
	/** True to show the button as pressed all the time */
	pressed: false,
	/** The button label */
	label: StringConvertible.EMPTY,
	/** The button icon, if any */
	icon: undefined as UIIconResource | undefined,
	/** The button chevron, if any */
	chevron: undefined as "up" | "down" | "next" | "back" | undefined,
	/** The button width, if different from the width defined in {@link NavContainerStyles.navButtonStyle} */
	width: undefined as string | number | undefined,
}) {
	defineView() {
		return ui.button({
			icon: $view("icon"),
			iconMargin: $view("styles.iconMargin"),
			iconSize: $view("styles.iconSize"),
			chevron: $view("chevron"),
			label: $view("label"),
			width: this.width,
			navigateTo: $view("navigateTo"),
			pressed: $either(
				$view("pressed"),
				$navigation("matchedPageId").equals($view("pageId"))
			),
			style: $view("styles.navButtonStyle"),
			onPress: "Navigate",
			onEnterKeyPress: "Navigate",
			onArrowUpKeyPress: "RequestFocusPrevious",
			onArrowDownKeyPress: "RequestFocusNext",
			onArrowLeftKeyPress: "RequestFocusPrevious",
			onArrowRightKeyPress: "RequestFocusNext",
			accessibleRole: "option",
		});
	}

	protected beforeRender() {
		if (this.text) this.label = this.text;
		this.navigateTo = { pageId: this.pageId };
	}

	/** Button navigation target, bound to button itself */
	protected navigateTo?: { pageId?: string } = undefined;

	/** This property is set from JSX content, if any; copied to {@link label} */
	protected declare text?: any;
}

/**
 * Component that encapsulates a detail navigation button
 *
 * A detail navigation button is used within a {@link NavColumn} or {@link NavRow} to represent a specific navigation detail path. The button emits a `Navigate` event when pressed, and the button appears 'pressed' if the current detail path matches the button's path.
 */
export class DetailNavButton extends UIComponent.define({
	/** The detail path to associate with this button */
	detail: undefined as string | undefined,
	/** True to show the button as pressed all the time */
	pressed: false,
	/** The button label */
	label: StringConvertible.EMPTY,
	/** The button icon, if any */
	icon: undefined as UIIconResource | undefined,
	/** The button chevron, if any */
	chevron: undefined as "up" | "down" | "next" | "back" | undefined,
	/** The button width, if different from the width defined in {@link NavContainerStyles.navButtonStyle} */
	width: undefined as string | number | undefined,
}) {
	defineView() {
		return ui.button({
			icon: $view("icon"),
			iconMargin: $view("styles.iconMargin"),
			iconSize: $view("styles.iconSize"),
			chevron: $view("chevron"),
			label: $view("label"),
			width: this.width,
			navigateTo: $view("navigateTo"),
			pressed: $either(
				$view("pressed"),
				$navigation("detail").equals($view("detail"))
			),
			style: $view("styles.navButtonStyle"),
			onPress: "Navigate",
			onEnterKeyPress: "Navigate",
			onArrowUpKeyPress: "RequestFocusPrevious",
			onArrowDownKeyPress: "RequestFocusNext",
			onArrowLeftKeyPress: "RequestFocusPrevious",
			onArrowRightKeyPress: "RequestFocusNext",
			accessibleRole: "option",
		});
	}

	protected beforeRender() {
		if (this.text) this.label = this.text;
		this.navigateTo = { detail: this.detail };
	}

	/** Button navigation target, bound to button itself */
	protected navigateTo?: { detail?: string } = undefined;

	/** This property is set from JSX content, if any; copied to {@link label} */
	protected declare text?: any;
}

/**
 * Component that encapsulates a value-backed navigation button
 *
 * A value-backed navigation button is used within a {@link NavColumn} or {@link NavRow} to represent a specific bound value. The button emits a regular `Click` event when pressed, which includes the button's value, and the button appears 'pressed' if the current value matches the button's value.
 */
export class ValueNavButton extends UIComponent.define({
	/** The value to compare against the current value (should be bound) */
	match: undefined as string | undefined,
	/** The value to associate with this button */
	value: undefined as string | undefined,
	/** The button label */
	label: StringConvertible.EMPTY,
	/** The button icon, if any */
	icon: undefined as UIIconResource | undefined,
	/** The button chevron, if any */
	chevron: undefined as "up" | "down" | "next" | "back" | undefined,
	/** The button width, if different from the width defined in {@link NavContainerStyles.navButtonStyle} */
	width: undefined as string | number | undefined,
}) {
	defineView() {
		return ui.button({
			icon: $view("icon"),
			iconMargin: $view("styles.iconMargin"),
			iconSize: $view("styles.iconSize"),
			chevron: $view("chevron"),
			label: $view("label"),
			width: this.width,
			value: $view("value"),
			pressed: $either($view("match").equals($view("value"))),
			style: $view("styles.navButtonStyle"),
			onArrowUpKeyPress: "RequestFocusPrevious",
			onArrowDownKeyPress: "RequestFocusNext",
			onArrowLeftKeyPress: "RequestFocusPrevious",
			onArrowRightKeyPress: "RequestFocusNext",
			accessibleRole: "option",
		});
	}

	protected beforeRender() {
		if (this.text) this.label = this.text;
	}

	/** This property is set from JSX content, if any; copied to {@link label} */
	protected declare text?: any;
}
