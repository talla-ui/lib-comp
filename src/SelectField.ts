import {
	$view,
	ConfigOptions,
	ManagedObject,
	StringConvertible,
	UIButton,
	UIIconResource,
	UIStyle,
	ViewComposite,
	app,
	ui,
} from "talla-ui";
import { bindFormField } from "./util.js";

/**
 * Style configuration for a {@link SelectField} composite
 *
 * Objects of this type are passed to {@link SelectField} as the `styles` preset property.
 */
export class SelectFieldStyles extends ConfigOptions {
	/** Default styles that are used when no other styles are specified */
	static default = new SelectFieldStyles();

	/** The size of the button icon, defaults to 16 */
	iconSize?: number | string = 16;
	/** The margin after the button icon, defaults to undefined */
	iconMargin?: number;

	/** The amount of space between the edge of the button and the overlay, defaults to undefined */
	menuOffset?: number;

	/** The style applied to the dropdown button */
	buttonStyle: UIButton.StyleValue = ui.style.BUTTON_PLAIN.extend(
		{
			borderRadius: 6,
			minWidth: 240,
			padding: { x: 8, y: 4 },
			textAlign: "start",
			fontWeight: "normal",
			background: ui.color.BACKGROUND,
			borderColor: ui.color.TEXT.alpha(0.25),
		},
		{
			[UIStyle.STATE_DISABLED]: false,
			[UIStyle.STATE_HOVERED]: true,
			background: ui.color.BACKGROUND,
			borderColor: ui.color.TEXT.alpha(0.5),
		}
	);
}

/**
 * An object that describes a button that's displayed within a {@link ButtonSwitch} composite
 *
 * Objects of this type are passed to {@link SelectField} as the `options` preset property.

 * The {@link value} property is used to determine which predefined option should be displayed on the button.
 */
export interface SelectFieldOption {
	/** The associated field value */
	value: unknown;
	/** Dropdown menu label */
	label: StringConvertible;
	/** Dropdown menu icon, if any */
	icon?: UIIconResource;
}

/**
 * View composite for a select field
 *
 * A select field composite displays a dropdown button which reflects a chosen value (or a placeholder) and reveals a menu when pressed.
 *
 * The current value of the select field can be set programmatically using {@link value}, and by the user.
 *
 * Options are added using a list of {@link SelectFieldOption} objects, each containing a value, a label, and optionally an icon. The list may be preset, bound, or updated right before opening the menu, e.g. using the `BeforeSelect` event.
 *
 * **Events**
 * - `Change` is emitted when the value has changed. The new value is included in the `value` property of the event data.
 * - `BeforeSelect` is emitted immediately before opening the menu, to allow updating of menu options in {@link options} (synchronously).
 *
 * @see {@link SelectFieldOption} +
 * @see {@link SelectFieldStyles} +
 */
export class SelectField extends ViewComposite.define({
	/** The button label, updated automatically upon selection */
	label: StringConvertible.EMPTY as StringConvertible | undefined,
	/** The button icon, until an option with an icon is selected */
	icon: undefined as UIIconResource | undefined,
	/** The button chevron icon, defaults to "down" */
	chevron: "down" as UIButton["chevron"],
	/** The width of the button element, defaults to undefined */
	width: undefined as string | number | undefined,
	/** A list of available options, as an array of {@link SelectFieldOption} objects */
	options: [] as SelectFieldOption[],
	/** The current value, one of the values from {@link options} */
	value: undefined as unknown,
	/** True if the user should not be able to change the value */
	readOnly: false,
	/** A form field ID, to add a two-way `FormContext` binding */
	formField: undefined as string | undefined,
	/** A set of styles that are applied to this composite, an instance of {@link SelectFieldStyles} */
	styles: SelectFieldStyles.default,
	/** UI component identifier */
	name: "SelectField",
	/** UI component accessible label */
	accessibleLabel: undefined as string | undefined,
}) {
	/** The selected item's icon, if any */
	protected itemIcon?: UIIconResource = undefined;

	protected defineView() {
		return ui.button({
			label: $view.string("label"),
			disabled: $view.boolean("readOnly"),
			icon: $view("itemIcon").or("icon"),
			iconSize: this.styles.iconSize,
			iconMargin: this.styles.iconMargin,
			chevron: this.chevron,
			width: this.width,
			style: this.styles.buttonStyle,
			name: this.name,
			accessibleLabel: this.accessibleLabel,
			onClick: "OpenMenu",
			onPress: "OpenMenu",
			onSpacebarPress: "OpenMenu",
		});
	}

	protected beforeRender() {
		bindFormField(this);
		if (this.value !== undefined) this._updateButton();
		ManagedObject.observe(this, ["value"], () => this._updateButton());
	}

	protected async onOpenMenu() {
		if (this._menuOpen || this.readOnly) return true;
		this._menuOpen = true;
		let button = this.findViewContent(UIButton)[0]!;
		button.pressed = true;
		button.requestFocus();
		this.emit("BeforeSelect");

		// deliberately pause here for focus, and last-minute updates
		await new Promise((r) => setTimeout(r, 0));
		let choice =
			!!this.options?.length &&
			(await app.showModalMenuAsync(
				{
					width: this.width,
					items: this.options.map((item, index) => ({
						key: "" + index,
						text: item.label,
						icon: item.icon,
						iconSize: this.styles.iconSize,
						hintIcon: item.value === this.value ? ui.icon.CHECK : ui.icon.BLANK,
						hintIconSize: 16,
					})),
				},
				this.body as UIButton
			));
		this._menuOpen = false;
		button.pressed = false;

		let option = choice ? this.options[choice as any] : undefined;
		if (option && option.value !== this.value) {
			this.value = option.value;
			this.emit("Change", { value: option.value });
		}
	}

	private _menuOpen = false;

	private _updateButton() {
		let item = this.options?.find((item) => item.value === this.value);
		this.itemIcon = item?.icon;
		this.label = item?.label;
	}
}
