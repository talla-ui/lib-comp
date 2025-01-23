import {
	$view,
	ConfigOptions,
	ManagedObject,
	ui,
	UICell,
	UIIconResource,
	UIStyle,
	UITextField,
	ViewComposite,
	ViewEvent,
} from "talla-ui";
import { bindFormField } from "./util.js";

type UITextFields3 = [UITextField, UITextField, UITextField];

/**
 * Style configuration for a {@link TimeInputField} composite
 *
 * Objects of this type are passed to {@link TimeInputField} as the `styles` preset property.
 */
export class TimeInputFieldStyles extends ConfigOptions {
	/** Default styles that are used when no other styles are specified */
	static default = new TimeInputFieldStyles();

	/** The size of the icon, if any */
	iconSize?: number;

	/** The hour and minute text field placeholder, defaults to `__` */
	timePlaceholder = "__";

	/** The AM/PM text field placeholder, defaults to `AM` */
	ampmPlaceholder = "AM";

	/** Style for the hour and minute input fields */
	textFieldStyle: UITextField.StyleValue = ui.style.TEXTFIELD.extend(
		{
			borderThickness: 0,
			height: 26,
			width: 26,
			minWidth: 0,
			padding: 0,
			textAlign: "center",
			lineBreakMode: "clip",
			tabularNums: true,
		},
		{
			[UIStyle.STATE_DISABLED]: false,
			[UIStyle.STATE_FOCUSED]: true,
			borderRadius: 4,
			background: ui.color.PRIMARY_BG.alpha(0.1),
		}
	);

	/** Width for the AM/PM input field */
	ampmTextFieldWidth = 28;

	/** Style for the container cell that groups the text fields */
	containerStyle: UICell.StyleValue = ui.style.CELL.extend({
		height: 38,
		borderColor: ui.color.TEXT.alpha(0.2),
		borderThickness: 1,
		padding: 2,
		borderRadius: 6,
	});
}

/**
 * Localization configuration for a {@link TimeInputField} composite
 *
 * Objects of this type are passed to {@link TimeInputField} as the `locale` preset property.
 */
export class TimeInputLocale extends ConfigOptions {
	/** Default locale that is used when no other locale is specified */
	static default = new TimeInputLocale();

	/** True if 12-hour time format should be used, false for 24-hour format */
	use12HourFormat = false;

	/** The separator used between hours and minutes */
	timeSeparator = ":";
}

/**
 * View composite for a time input field
 *
 * A time input field composite groups together a series of text fields for time-of-day input.
 *
 * This composite can be combined with a DateInputField composite for a complete date/time input option (i.e. year, month, date, hours, and minutes), when bound to the same `Date` value.
 *
 * The time input field can be localized to display 24-hour or 12-hour time.
 *
 * **Events**
 * - `Change` is emitted when the selected time has changed. The new date is included in the `value` property of the event data.
 *
 * @see {@link TimeInputFieldStyles}+
 * @see {@link TimeInputLocale}+
 */
export class TimeInputField extends ViewComposite.define({
	/** The icon displayed on the time input field */
	icon: undefined as UIIconResource | undefined,
	/** The currently selected time (as hours, minutes within a `Date` value) */
	value: undefined as Date | undefined,
	/** True if the user should not be able to change the value */
	readOnly: false,
	/** A form field ID, to add a two-way `FormContext` binding */
	formField: undefined as string | undefined,
	/** Localization settings for the time input, an instance of {@link TimeInputLocale} */
	locale: TimeInputLocale.default,
	/** A set of styles that are applied to this composite, an instance of {@link TimeInputFieldStyles} */
	styles: TimeInputFieldStyles.default,
	/** Accessible labels for hour, minute, and AM/PM input fields (in that order) */
	accessibleLabels: [] as string[],
	/** UI component identifier */
	name: "TimeInputField",
}) {
	protected beforeRender() {
		ManagedObject.observe(this, ["value"], (_, _p, value) => {
			if (value === this._lastValidated) return;
			if (value instanceof Date) {
				this._updateFields(value);
				this._validate();
			}
		});
		bindFormField(this);
		if (this.value instanceof Date) {
			this._updateFields(this.value);
		}
	}

	protected defineView() {
		return ui.row(
			ui.cell(
				{
					name: this.name,
					layout: { axis: "horizontal", separator: { space: 2 } },
					position: { gravity: "center" },
					style: this.styles.containerStyle,
				},
				ui.spacer(4),
				ui.label({
					hidden: $view.not("icon"),
					icon: $view("icon"),
					iconSize: this.styles.iconSize,
					padding: { end: 4 },
					onClick: "RequestFocusNext",
				}),
				ui.textField({
					style: this.styles.textFieldStyle,
					type: "numeric",
					placeholder: this.styles.timePlaceholder,
					selectOnFocus: true,
					disabled: $view.boolean("readOnly"),
					onInput: "HourInput",
					onArrowUpKeyPress: "HourUp",
					onArrowDownKeyPress: "HourDown",
					onChange: "Validate",
					accessibleLabel: this.accessibleLabels[0],
				}),
				ui.label(this.locale.timeSeparator, { bold: true }),
				ui.textField({
					style: this.styles.textFieldStyle,
					type: "numeric",
					placeholder: this.styles.timePlaceholder,
					selectOnFocus: true,
					disabled: $view.boolean("readOnly"),
					onInput: "MinuteInput",
					onBackspaceKeyPress: "MinuteBackspace",
					onArrowUpKeyPress: "MinuteUp",
					onArrowDownKeyPress: "MinuteDown",
					onChange: "Validate",
					accessibleLabel: this.accessibleLabels[1],
				}),
				ui.textField({
					hidden: !this.locale.use12HourFormat,
					placeholder: this.styles.ampmPlaceholder,
					style: this.styles.textFieldStyle,
					width: this.styles.ampmTextFieldWidth,
					disabled: $view.boolean("readOnly"),
					selectOnFocus: true,
					onInput: "AMPMInput",
					onBackspaceKeyPress: "AMPMBackspace",
					onArrowDownKeyPress: "AMPMToggle",
					onArrowUpKeyPress: "AMPMToggle",
					onChange: "Validate",
					accessibleLabel: this.accessibleLabels[2],
				}),
				ui.spacer({ width: this.locale.use12HourFormat ? 2 : 4 })
			)
		);
	}

	protected onValidate() {
		setTimeout(() => this._validate(), 0);
		return true;
	}

	protected onInputRendered(e: ViewEvent<UITextField>) {
		let elt = e.source.lastRenderOutput?.element as HTMLInputElement;
		elt.inputMode = "numeric";
		return true;
	}

	protected onHourInput(e: ViewEvent<UITextField>) {
		if (this.readOnly) return true;
		if (
			e.source.value.endsWith(":") ||
			e.source.value.length > 1 ||
			+e.source.value > 2
		) {
			e.source.value = String(parseInt(e.source.value));
			e.source.requestFocusNext();
			this._validate();
		}
		return true;
	}

	protected onHourUp(e: ViewEvent<UITextField>) {
		if (this.readOnly) return true;
		let h12 = this.locale.use12HourFormat;
		let h = (+e.source.value || 0) + 1;
		if (h > (h12 ? 12 : 23)) h = h12 ? 12 : 23;
		e.source.value = String(h);
		this._validate();
		return true;
	}

	protected onHourDown(e: ViewEvent<UITextField>) {
		if (this.readOnly) return true;
		let h12 = this.locale.use12HourFormat;
		let h = (+e.source.value || 0) - 1;
		if (h < (h12 ? 1 : 0)) h = h12 ? 1 : 0;
		e.source.value = String(h);
		this._validate();
		return true;
	}

	protected onMinuteInput(e: ViewEvent<UITextField>) {
		if (this.readOnly) return true;
		let h12 = this.locale.use12HourFormat;
		if (e.source.value.length > 1 || (h12 && +e.source.value > 5)) {
			e.source.requestFocusNext();
			this._validate();
		}
		return true;
	}

	protected onMinuteBackspace(e: ViewEvent<UITextField>) {
		if (this.readOnly) return true;
		if (!e.source.value) e.source.requestFocusPrevious();
		return true;
	}

	protected onMinuteUp(e: ViewEvent<UITextField>) {
		if (this.readOnly) return true;
		let m = (+e.source.value || 0) + 1;
		if (m > 59) m = 59;
		e.source.value = String(m);
		this._validate();
		return true;
	}

	protected onMinuteDown(e: ViewEvent<UITextField>) {
		if (this.readOnly) return true;
		let m = (+e.source.value || 0) - 1;
		if (m < 0) m = 0;
		e.source.value = String(m);
		this._validate();
		return true;
	}

	protected onAMPMBackspace(e: ViewEvent<UITextField>) {
		if (this.readOnly) return true;
		if (!e.source.value) e.source.requestFocusPrevious();
		else e.source.value = "";
		return true;
	}

	protected onAMPMToggle(e: ViewEvent<UITextField>) {
		if (this.readOnly) return true;
		if (e.source.value === "AM") e.source.value = "PM";
		else e.source.value = "AM";
		this._validate();
		return true;
	}

	protected onAMPMInput(e: ViewEvent<UITextField>) {
		if (this.readOnly) return true;
		let firstLetter = e.source.value.toUpperCase()[0];
		let lastLetter = e.source.value.toUpperCase().slice(-1);
		switch (lastLetter) {
			case "A":
				e.source.value = "AM";
				break;
			case "P":
				e.source.value = "PM";
				break;
			default:
				if (firstLetter === "A") e.source.value = "AM";
				if (firstLetter === "P") e.source.value = "PM";
		}
		this._validate();
		return true;
	}

	private _updateFields(value: Date) {
		let [ht, mt, at] = this.findViewContent(UITextField) as UITextFields3;
		let h = value.getHours();
		mt.value = String(value.getMinutes());
		if (this.locale.use12HourFormat) {
			ht.value = String(h % 12 || 12);
			at.value = h >= 12 ? "PM" : "AM";
		} else {
			ht.value = String(h);
			at.value = "";
		}
		this._validate();
	}

	private _validate() {
		let [ht, mt, at] = this.findViewContent(UITextField) as UITextFields3;
		let h = 0;
		let m = 0;
		if (ht.value) {
			let hh = parseInt(ht.value) || 0;
			if (hh > 24) hh = hh > 100 ? Math.floor(hh / 100) : Math.floor(hh / 10);
			h = Math.max(0, hh % 24);
			if (this.locale.use12HourFormat) h = h % 12 || 12;
			ht.value = (h < 10 ? "0" : "") + h;
		}
		if (mt.value) {
			m = Math.max(0, (parseInt(mt.value) || 0) % 60);
			mt.value = (m < 10 ? "0" : "") + m;
		}
		if (this.locale.use12HourFormat && at.value) {
			let ampm = at.value.toUpperCase();
			if (ampm !== "AM" && ampm !== "PM") at.value = "AM";
			h = (h % 12) + (at.value === "PM" ? 12 : 0);
		}
		let value = this.value;
		if (value instanceof Date) {
			if (value.getHours() === h && value.getMinutes() === m) return;
		} else {
			value = new Date();
		}
		if (ht.value && mt.value) {
			this._lastValidated =
				this.value =
				value =
					new Date(
						value.getFullYear(),
						value.getMonth(),
						value.getDate(),
						h % 24,
						m,
						0
					);
			this.emit("Change", { value });
		}
	}

	private _lastValidated?: Date;
}
