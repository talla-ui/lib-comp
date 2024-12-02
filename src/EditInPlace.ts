import {
	$view,
	ConfigOptions,
	ui,
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
	labelStyle: ui.LabelStyle = ui.style.LABEL.extend({
		padding: { x: 8, y: 4 },
		css: { cursor: "pointer" },
	});

	/** The style applied to the text field */
	textFieldStyle: ui.TextFieldStyle = ui.style.TEXTFIELD.extend({
		maxWidth: "100%",
		width: "100%",
		borderRadius: 0,
		borderThickness: 0,
		padding: { x: 8, y: 4 },
		css: { outlineOffset: "-2px" },
	});
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
		return ui.cell(
			{
				layout: { axis: "horizontal", distribution: "start" },
				style: { width: this.width, height: this.height, grow: 0, shrink: 1 },
				name: this.name,
				accessibleLabel: this.accessibleLabel,
				onPress: "StartEdit",
				onFocusIn: "+StartEdit",
			},
			ui.label({
				text: $view.bind("value").asString(this.isNumber ? "n" : "s"),
				width: "100%",
				hidden: $view.boolean("editing"),
				style: ui.style(this.styles.labelStyle, {
					textAlign: this.isNumber ? "end" : "start",
				}),
				dim: !!this.readOnly,
				allowKeyboardFocus: !this.readOnly,
			}),
			ui.textField({
				value: $view.bind("value").asString(this.isNumber ? "n" : "s"),
				hidden: $view.not("editing"),
				position: { gravity: "overlay", top: 0, left: 0, right: 0, bottom: 0 },
				style: ui.style(this.styles.textFieldStyle, {
					textAlign: this.isNumber ? "end" : "start",
				}),
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
