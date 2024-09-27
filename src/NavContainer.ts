import {
	$navigation,
	$view,
	ConfigOptions,
	StringConvertible,
	UIComponent,
	UIContainer,
	UIIconResource,
	UIStyle,
	ViewClass,
	ViewComposite,
	ui,
} from "talla-ui";

/**
 * Style configuration for {@link NavColumn} and {@link NavRow} composites
 *
 * Objects of this type are passed to {@link NavColumn} and {@link NavRow} composites as the `styles` preset property.
 */
export class NavContainerStyles extends ConfigOptions {
	/** Default styles that are used when no other styles are specified */
	static defaults = new NavContainerStyles();

	/** The space between navigation buttons, defaults to 8 */
	spacing = 8;

	/** Separator options used within the column or row container */
	separator?: UIContainer.SeparatorOptions;

	/** Cell style for the outer container */
	containerStyle = ui.style.CELL.extend({ grow: 0 });

	/** Button style for contained navigation buttons */
	navButtonStyle = ui.style.BUTTON_PLAIN.extend(
		{
			textAlign: "start",
		},
		{
			[UIStyle.STATE_DISABLED]: false,
			[UIStyle.STATE_PRESSED]: true,
			background: ui.color.PRIMARY.alpha(0.1),
			textColor: ui.color.PRIMARY,
		}
	);
}

/**
 * View composite for a navigation button column
 *
 * A navigation column composite displays several navigation buttons in a vertical layout, allowing the user to navigate between different pages or (detail) items by pressing one of the buttons.
 *
 * Navigation buttons are added as presets of {@link PageNavButton} or {@link DetailNavButton} within the content of this composite. The button that corresponds to the current page or detail path is automatically shown as 'pressed'.
 *
 * @see {@link NavContainerStyles}+
 * @see {@link SidebarNavColumn}+
 * @see {@link ListNavColumn}+
 * @see {@link NavRow}
 * @see {@link PageNavButton}+
 * @see {@link DetailNavButton}+
 */
export class NavColumn extends ViewComposite.define({
	/** The margin around the outer container, defaults to 0 */
	margin: 0 as UIComponent.Offsets,
	/** The padding around the navigation buttons, defaults to 0 */
	padding: 0 as UIComponent.Offsets,
	/** A set of styles that are applied to this composite, an instance of {@link NavContainerStyles} */
	styles: NavContainerStyles.defaults,
}) {
	protected defineView(...content: ViewClass[]) {
		return ui.cell(
			{
				layout: { clip: false },
				margin: this.margin,
				padding: this.padding,
				style: this.styles.containerStyle,
				name: "NavColumn",
			},
			ui.column(
				{
					align: "start",
					spacing: this.styles.spacing,
					layout: { separator: this.styles.separator },
				},
				...content
			)
		);
	}
}

/**
 * View composite for a sidebar navigation column
 *
 * A sidebar navigation column composite is a {@link NavColumn} composite with predefined {@link styles} to match those of a typical application sidebar, subtly highlighting the currently selected page (or detail view) along the full width of the sidebar.
 */
export class SidebarNavColumn extends NavColumn {
	/** Predefined sidebar styles */
	styles = NavContainerStyles.init({
		containerStyle: ui.style.CELL,
		navButtonStyle: NavContainerStyles.defaults.navButtonStyle.extend({
			width: "100%",
		}),
	});
}

/**
 * View composite for a compact list navigation column
 *
 * A list navigation column composite is a {@link NavColumn} composite with predefined {@link styles} to match those of a typical (compact) navigation list, with separators between each option. The current navigation button is highlighted using the primary background color along the full width of the list.
 */
export class ListNavColumn extends NavColumn {
	/** Predefined list navigation styles */
	styles = NavContainerStyles.init({
		separator: { lineThickness: 1, lineColor: ui.color.SEPARATOR },
		containerStyle: ui.style.CELL.extend({
			grow: 0,
		}),
		navButtonStyle: ui.style.BUTTON_PLAIN.extend(
			{
				borderRadius: 0,
				textAlign: "start",
				width: "100%",
			},
			{
				[UIStyle.STATE_FOCUSED]: true,
				[UIStyle.STATE_PRESSED]: false,
				[UIStyle.STATE_DISABLED]: false,
				background: ui.color.PRIMARY_BG.alpha(0.1),
			},
			{
				[UIStyle.STATE_PRESSED]: true,
				[UIStyle.STATE_DISABLED]: false,
				background: ui.color.PRIMARY_BG,
				textColor: ui.color.PRIMARY_BG.text(),
			}
		),
	});
}

/**
 * View composite for a navigation button row
 *
 * A navigation row composite displays several navigation buttons in a horizontal layout, allowing the user to navigate between different pages or (detail) items by pressing one of the buttons.
 *
 * Navigation buttons are added as presets of {@link PageNavButton} or {@link DetailNavButton} within the content of this composite. The button that corresponds to the current page or detail path is automatically shown as 'pressed'.
 *
 * @see {@link NavContainerStyles}
 * @see {@link TabNavRow}+
 * @see {@link NavColumn}
 * @see {@link PageNavButton}
 * @see {@link DetailNavButton}
 */
export class NavRow extends ViewComposite.define({
	/** The margin around the outer container, defaults to 0 */
	margin: 0 as UIComponent.Offsets,
	/** The padding around the navigation buttons, defaults to 0 */
	padding: 0 as UIComponent.Offsets,
	/** A set of styles that are applied to this composite, an instance of {@link NavContainerStyles} */
	styles: NavContainerStyles.defaults,
}) {
	protected defineView(...content: ViewClass[]) {
		return ui.cell(
			{
				layout: { clip: false },
				margin: this.margin,
				padding: this.padding,
				style: this.styles.containerStyle,
				name: "NavRow",
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

/**
 * View composite for a tab navigation row
 *
 * A tab navigation row composite is a {@link NavRow} composite with predefined {@link styles} to match those of a typical tab bar. The tab bar has a rounded appearance and subtle background color. The current navigation button is highlighted with a contrasting background and text color.
 */
export class TabNavRow extends NavRow {
	/** Predefined tab bar styles */
	styles = NavContainerStyles.init({
		containerStyle: ui.style.CELL.extend({
			background: ui.color.CONTROL_BASE,
			borderRadius: 32,
		}),
		navButtonStyle: ui.style.BUTTON.extend(
			{
				background: ui.color.CLEAR,
				minWidth: 88,
				borderRadius: 32,
				lineHeight: 1.75,
				textColor: ui.color.TEXT.alpha(0.65),
			},
			{
				[UIStyle.STATE_DISABLED]: false,
				[UIStyle.STATE_PRESSED]: true,
				background: ui.color.fg(ui.color.BACKGROUND, ui.color.PRIMARY),
				borderColor: ui.color.TEXT.alpha(0.2),
				textColor: ui.color.fg(ui.color.TEXT, ui.color.PRIMARY.text()),
			}
		),
	});
}

/**
 * View composite that encapsulates a page navigation button
 *
 * A page navigation button is used within a {@link NavColumn} or {@link NavRow} to represent a specific page ID. The button emits a `Navigate` event when pressed, and the button appears 'pressed' if the current page matches the button's page ID.
 */
export class PageNavButton extends ViewComposite.define({
	/** The page ID to associate with this button */
	pageId: undefined as string | undefined,
	/** The button label */
	label: StringConvertible.EMPTY,
	/** The button icon, if any */
	icon: undefined as UIIconResource | undefined,
	/** The margin between the button icon and label, defaults to 16 */
	iconMargin: 16,
	/** The button icon size, defaults to 20 */
	iconSize: 20,
	/** The button chevron, if any */
	chevron: undefined as "up" | "down" | "next" | "back" | undefined,
	/** The button width, if different from the width defined in {@link NavContainerStyles.navButtonStyle} */
	width: undefined as string | number | undefined,
}) {
	defineView() {
		return ui.button({
			icon: $view.bind("icon"),
			iconMargin: this.iconMargin,
			iconSize: this.iconSize,
			chevron: $view.bind("chevron"),
			label: $view.string("label"),
			width: this.width,
			navigateTo: $view.bind("navigateTo"),
			pressed: $navigation.bind("matchedPageId").equals($view.bind("pageId")),
			style: $view.bind("styles.navButtonStyle"),
			onPress: "Navigate",
			onEnterKeyPress: "Navigate",
			onArrowUpKeyPress: "RequestFocusPrevious",
			onArrowDownKeyPress: "RequestFocusNext",
			onArrowLeftKeyPress: "RequestFocusPrevious",
			onArrowRightKeyPress: "RequestFocusNext",
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
 * View composite that encapsulates a detail navigation button
 *
 * A detail navigation button is used within a {@link NavColumn} or {@link NavRow} to represent a specific navigation detail path. The button emits a `Navigate` event when pressed, and the button appears 'pressed' if the current detail path matches the button's path.
 */
export class DetailNavButton extends ViewComposite.define({
	/** The detail path to associate with this button */
	detail: undefined as string | undefined,
	/** The button label */
	label: StringConvertible.EMPTY,
	/** The button icon, if any */
	icon: undefined as UIIconResource | undefined,
	/** The margin between the button icon and label, defaults to 16 */
	iconMargin: 16,
	/** The button icon size, defaults to 20 */
	iconSize: 20,
	/** The button chevron, if any */
	chevron: undefined as "up" | "down" | "next" | "back" | undefined,
	/** The button width, if different from the width defined in {@link NavContainerStyles.navButtonStyle} */
	width: undefined as string | number | undefined,
}) {
	defineView() {
		return ui.button({
			icon: $view.bind("icon"),
			iconMargin: this.iconMargin,
			iconSize: this.iconSize,
			chevron: $view.bind("chevron"),
			label: $view.string("label"),
			width: this.width,
			navigateTo: $view.bind("navigateTo"),
			pressed: $navigation.bind("detail").equals($view.bind("detail")),
			style: $view.bind("styles.navButtonStyle"),
			onPress: "Navigate",
			onEnterKeyPress: "Navigate",
			onArrowUpKeyPress: "RequestFocusPrevious",
			onArrowDownKeyPress: "RequestFocusNext",
			onArrowLeftKeyPress: "RequestFocusPrevious",
			onArrowRightKeyPress: "RequestFocusNext",
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
