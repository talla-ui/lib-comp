import {
	$either,
	$view,
	ConfigOptions,
	strf,
	StringConvertible,
	ui,
	UIComponent,
	UIIconResource,
	UILabel,
	UITextField,
	ViewComposite,
	ViewEvent,
} from "talla-ui";
import { bindFormField } from "./util.js";

/**
 * Style configuration for an {@link EditInPlace} composite
 *
 * Objects of this type are passed to {@link EditInPlace} as the `styles` preset property.
 */
export class EditInPlaceStyles extends ConfigOptions {
	/** Default styles that are used when no other styles are specified */
	static default = new EditInPlaceStyles();

	/** The style applied to the label */
	labelStyle: UILabel.StyleValue = ui.style.LABEL.extend({
		css: { cursor: "pointer" },
	});

	/** The style applied to the text field */
	textFieldStyle: UITextField.StyleValue = ui.style.TEXTFIELD.extend({
		background: ui.color.CLEAR,
		maxWidth: "100%",
		width: "100%",
		borderRadius: 0,
		borderThickness: 0,
		css: { outlineOffset: "-2px" },
	});

	/** Size of the icon (in pixels or string with unit), defaults to 16 */
	iconSize?: number | string = 16;

	/**
	 * The padding applied to both the label and text field
	 * - Note that the field height is set using the `height` property, not (only) vertical padding
	 */
	padding: UIComponent.Offsets = { x: 8, y: 4 };
}

/**
 * View composite for an edit-in-place field
 *
 * An edit-in-place composite contains both a plain label and a text field, swapping between them as needed. The text field is displayed when the composite receives input focus, and the label is displayed otherwise.
 *
 * The label text is kept in sync with the text field value automatically. The value can also be set programmatically at any time.
 *
 * **Events**
 * - `Change` is emitted when the value has changed. The new value is included in the `value` property of the event data.
 * - The text field emits events such as `Input`, `EnterKeyPress` and `EscapeKeyPress`.
 *
 * @see {@link EditInPlaceStyles}+
 */
export class EditInPlace extends ViewComposite.define({
	/** The current value of the edit-in-place field */
	value: "" as string | number | undefined,
	/** Placeholder text that's displayed if the value is an empty string */
	placeholder: StringConvertible.EMPTY,
	/** An icon to be displayed in front of the field value */
	icon: undefined as UIIconResource | undefined,
	/** True if the user should not be able to change the value */
	readOnly: false,
	/** True if the field should accept numeric input */
	isNumber: false,
	/** True if the field should only accept integer values (only applies if {@link isNumber} is true) */
	isInteger: false,
	/** True if the field should only accept positive values (only applies if {@link isNumber} is true) */
	isPositive: false,
	/** The width of the edit-in-place field */
	width: "100%" as number | string,
	/** The height of the edit-in-place field */
	height: 40 as number | string,
	/** A form field ID, to add a two-way `FormContext` binding */
	formField: undefined as string | undefined,
	/** A set of styles that are applied to this composite, an instance of {@link EditInPlaceStyles} */
	styles: EditInPlaceStyles.default,
	/** UI component identifier */
	name: "EditInPlace",
	/** UI component accessible label */
	accessibleLabel: undefined as string | undefined,
}) {
	protected defineView() {
		// normalize padding with and without icon
		let paddingStyle = this.styles.padding;
		if (typeof paddingStyle !== "object") {
			paddingStyle = { x: paddingStyle, y: paddingStyle };
		}
		let padding = {
			start: paddingStyle.start ?? paddingStyle.left ?? paddingStyle.x,
			end: paddingStyle.end ?? paddingStyle.right ?? paddingStyle.x,
			top: paddingStyle.top ?? paddingStyle.y,
			bottom: paddingStyle.bottom ?? paddingStyle.y,
		};
		let iconPaddingStart =
			typeof padding.start === "number" ? padding.start + 24 : padding.start;

		return ui.cell(
			{
				layout: { axis: "horizontal", distribution: "start" },
				style: { width: this.width, height: this.height, grow: 0, shrink: 1 },
				name: this.name,
				accessibleLabel: this.accessibleLabel,
				onPress: "StartEdit",
				onFocusIn: "+StartEdit",
			},

			// use a cell to vertically align the icon independently of the label
			ui.cell(
				{
					hidden: $view.not("icon"),
					layout: { axis: "horizontal", distribution: "start" },
					// move up slightly to visually align the icon with text
					position: { gravity: "overlay", start: 0, top: 0, bottom: 2 },
				},
				ui.label({
					icon: $view("icon"),
					text: " ",
					iconSize: this.styles.iconSize,
					style: this.styles.labelStyle,
					padding,
				})
			),

			// text label, with value or placeholder
			ui.label({
				text: $view
					.not("editing")
					.and(
						$view("value")
							.asString(this.isNumber ? "n" : "s")
							.or("placeholder")
					)
					.else(""),
				width: "100%",
				style: $view.boolean("icon").select(
					ui.style(this.styles.labelStyle, {
						textAlign: this.isNumber ? "end" : "start",
						padding: { ...padding, start: iconPaddingStart },
						lineBreakMode: "nowrap",
					}),
					ui.style(this.styles.labelStyle, {
						textAlign: this.isNumber ? "end" : "start",
						padding,
						lineBreakMode: "nowrap",
					})
				),
				dim:
					!!this.readOnly ||
					$view("value")
						.asString(this.isNumber ? "n" : "s")
						.not()
						.and($view.not("editing")),
			}),

			// text field, covering other elements
			ui.textField({
				value: $view("value").asString(this.isNumber ? "n" : "s"),
				disabled: !!this.readOnly,
				position: { gravity: "cover" },
				style: $either(
					$view.not("editing").select({ opacity: 0 }),
					$view.boolean("icon").select(
						ui.style(this.styles.textFieldStyle, {
							textAlign: this.isNumber ? "end" : "start",
							padding: { ...padding, start: iconPaddingStart },
						}),
						ui.style(this.styles.textFieldStyle, {
							textAlign: this.isNumber ? "end" : "start",
							padding,
						})
					)
				),
				type: this.isNumber ? "decimal" : "text",
				selectOnFocus: this.isNumber,
				onFocusOut: "+EndEdit",
				onInput: "EditInPlaceInput", // stop Input event from escaping
			})
		);
	}

	/** True if the field is currently in edit mode */
	editing = false;

	protected beforeRender() {
		bindFormField(this);
	}

	requestFocus() {
		if (!this.readOnly) {
			this.editing = true;
			this.findViewContent(UITextField)[0]?.requestFocus();
		}
		return this;
	}

	protected onStartEdit() {
		if (!this.readOnly) {
			this.editing = true;
			let str = strf(this.isNumber ? "%n" : "%s", this.value);
			this.value = str.replace(/[\r\n]+/g, " ");
			this.requestFocus();
		}
		return true;
	}

	protected onEndEdit(e: ViewEvent<UITextField>) {
		this.editing = false;
		this._update(e.source.value || "");
		return true;
	}

	protected onChange(e: ViewEvent) {
		this.emit("Change", {
			value: this._update(String(e.data.value || "")),
		});
		return true;
	}

	private _update(value?: string | number) {
		if (this.isNumber && typeof value === "string") {
			value = parseFloat(value);
			if (this.isInteger) value = Math.trunc(value);
			if (this.isPositive) value = Math.abs(value);
		}
		this.value = value;
		return value;
	}
}
