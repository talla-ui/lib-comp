import {
	$view,
	app,
	ConfigOptions,
	ManagedObject,
	ui,
	UIButton,
	UICell,
	UIIconResource,
	UIStyle,
	UITextField,
	ViewComposite,
	ViewEvent,
} from "talla-ui";
import { bindFormField } from "./util.js";
import {
	CalendarView,
	CalendarViewLocale,
	CalendarViewStyles,
} from "./CalendarView.js";

type UITextFields3 = [UITextField, UITextField, UITextField];

/**
 * Style configuration for a {@link DateInputField} composite
 *
 * Objects of this type are passed to {@link DateInputField} as the `styles` preset property.
 */
export class DateInputFieldStyles extends ConfigOptions {
	/** Default styles that are used when no other styles are specified */
	static default = new DateInputFieldStyles();

	/** The size of the icon, if any */
	iconSize?: number;

	/** The date text field placeholder, defaults to `__` */
	datePlaceholder = "__";

	/** The month text field placeholder, defaults to `__` */
	monthPlaceholder = "__";

	/** The year text field placeholder, defaults to `____` */
	yearPlaceholder = "____";

	/** Style for the date and month input fields */
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

	/** Width for the year input field (overrides with on {@link textFieldStyle}) */
	yearTextFieldWidth = 46;

	/** Style for the container cell that groups the text fields */
	containerStyle: UICell.StyleValue = ui.style.CELL.extend({
		height: 38,
		borderColor: ui.color.TEXT.alpha(0.2),
		borderThickness: 1,
		padding: 2,
		borderRadius: 6,
	});

	/** Style for the calendar dropdown chevron button, defaults to a default icon button */
	calendarButtonStyle: UIButton.StyleValue = ui.style.BUTTON_ICON;
}

/**
 * Localization configuration for a {@link DateInputField} composite
 *
 * Objects of this type are passed to {@link DateInputField} as the `locale` preset property.
 */
export class DateInputLocale extends CalendarViewLocale {
	/** Default locale that is used when no other locale is specified */
	static default = new DateInputLocale();

	/** The order of date components (either DMY, MDY, or YMD) */
	dateFormat: "DMY" | "MDY" | "YMD" = "MDY";
	/** The separator used between date components */
	dateSeparator = "/";
}

/**
 * View composite for a date input field
 *
 * A date input field composite groups together a series of text fields for year, month, and date input, and a button that discloses a modal calendar view overlay when pressed.
 *
 * The date input field composite is a more text-focused alternative to the CalendarSelectField composite.
 *
 * The date separator and order of input fields (i.e. DMY, MDY, or YMD) can be localized. The calendar overlay view can also be localized in the same way as a standalone calendar view.
 *
 * **Events**
 * - `Change` is emitted when the selected date has changed. The new date is included in the `value` property of the event data.
 *
 * @see {@link DateInputFieldStyles}+
 * @see {@link DateInputLocale}+
 * @see {@link CalendarViewStyles}
 */
export class DateInputField extends ViewComposite.define({
	/** The icon displayed on the date input field */
	icon: undefined as UIIconResource | undefined,
	/** The currently selected date */
	value: undefined as Date | undefined,
	/** True if the user should not be able to change the value */
	readOnly: false,
	/** True if the calendar is in date range mode, selecting an end date from the preselected date(s) */
	range: false,
	/** A date or array of dates to be pre-selected */
	preselected: undefined as Date | Date[] | undefined,
	/** A form field ID, to add a two-way `FormContext` binding */
	formField: undefined as string | undefined,
	/** Localization settings for the date input, an instance of {@link DateInputLocale} */
	locale: DateInputLocale.default,
	/** A set of styles that are applied to this composite, an instance of {@link DateInputFieldStyles} */
	styles: DateInputFieldStyles.default,
	/** Styles for the calendar view, an instance of {@link CalendarViewStyles} */
	calendarViewStyles: CalendarViewStyles.default,
	/** Accessible labels for day, month, and year input fields (in that order) */
	accessibleLabels: [] as string[],
	/** UI component identifier */
	name: "DateInputField",
}) {
	protected beforeRender() {
		ManagedObject.observe(this, ["value"], (_, _p, value) => {
			if (value instanceof Date) this._updateFields(value);
		});
		bindFormField(this);
		if (this.value instanceof Date) {
			this._updateFields(this.value);
		}
	}

	protected defineView() {
		let dmyFields = [
			ui.textField({
				style: this.styles.textFieldStyle,
				type: "numeric",
				placeholder: this.styles.datePlaceholder,
				selectOnFocus: true,
				disabled: $view.boolean("readOnly"),
				onBackspaceKeyPress: "InputBackspace",
				onInput: "DateInput",
				onArrowUpKeyPress: "DateUp",
				onArrowDownKeyPress: "DateDown",
				onChange: "Validate",
				accessibleLabel: this.accessibleLabels[0],
			}),
			ui.textField({
				style: this.styles.textFieldStyle,
				type: "numeric",
				placeholder: this.styles.monthPlaceholder,
				selectOnFocus: true,
				disabled: $view.boolean("readOnly"),
				onBackspaceKeyPress: "InputBackspace",
				onInput: "MonthInput",
				onArrowUpKeyPress: "MonthUp",
				onArrowDownKeyPress: "MonthDown",
				onChange: "Validate",
				accessibleLabel: this.accessibleLabels[1],
			}),
			ui.textField({
				style: this.styles.textFieldStyle,
				width: this.styles.yearTextFieldWidth,
				type: "numeric",
				placeholder: this.styles.yearPlaceholder,
				selectOnFocus: true,
				disabled: $view.boolean("readOnly"),
				onBackspaceKeyPress: "InputBackspace",
				onInput: "YearInput",
				onArrowUpKeyPress: "YearUp",
				onArrowDownKeyPress: "YearDown",
				onChange: "Validate",
				accessibleLabel: this.accessibleLabels[2],
			}),
		];
		if (this.locale.dateFormat === "YMD") {
			dmyFields.reverse();
		} else if (this.locale.dateFormat === "MDY") {
			dmyFields = [dmyFields[1]!, dmyFields[0]!, dmyFields[2]!];
		}
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
					icon: $view.bind("icon"),
					iconSize: this.styles.iconSize,
					padding: { end: 4 },
					onClick: "OpenCalendar",
				}),
				dmyFields[0]!,
				ui.label(this.locale.dateSeparator, { bold: true }),
				dmyFields[1]!,
				ui.label(this.locale.dateSeparator, { bold: true }),
				dmyFields[2]!,
				ui.button({
					icon: ui.icon.CHEVRON_DOWN,
					onClick: "OpenCalendar",
					disabled: $view.boolean("readOnly"),
					style: this.styles.calendarButtonStyle,
				})
			)
		);
	}

	protected onValidate() {
		setTimeout(() => this._validate(), 0);
		return true;
	}

	protected onInputBackspace(e: ViewEvent<UITextField>) {
		if (!e.source.value) e.source.requestFocusPrevious();
		return true;
	}

	protected onDateInput(e: ViewEvent<UITextField>) {
		if (this.readOnly) return true;
		if (e.source.value.toUpperCase().indexOf("T") >= 0) {
			this.value = new Date();
			this._validate(true);
		}
		if (
			/[./-]$/.test(e.source.value) ||
			e.source.value.length > 1 ||
			+e.source.value > 3
		) {
			e.source.value = String(parseInt(e.source.value));
			if (this.locale.dateFormat !== "YMD") {
				e.source.requestFocusNext();
			}
			this._validate();
		}
		return true;
	}

	protected onDateUp(e: ViewEvent<UITextField>) {
		if (this.readOnly) return;
		let d = +e.source.value + 1 || 0;
		e.source.value = String(d);
		this._validate();
		return true;
	}

	protected onDateDown(e: ViewEvent<UITextField>) {
		if (this.readOnly) return;
		let d = +e.source.value - 1 || 0;
		if (d < 1) d = 1;
		e.source.value = String(d);
		this._validate();
		return true;
	}

	protected onMonthInput(e: ViewEvent<UITextField>) {
		if (this.readOnly) return true;
		if (e.source.value.toUpperCase().indexOf("T") >= 0) {
			this.value = new Date();
			this._validate(true);
		}
		if (
			/[./-]$/.test(e.source.value) ||
			e.source.value.length > 1 ||
			+e.source.value > 1
		) {
			e.source.value = String(parseInt(e.source.value));
			e.source.requestFocusNext();
			this._validate();
		}
		return true;
	}

	protected onMonthUp(e: ViewEvent<UITextField>) {
		if (this.readOnly) return true;
		let m = +e.source.value + 1 || 0;
		e.source.value = String(m);
		this._validate();
		return true;
	}

	protected onMonthDown(e: ViewEvent<UITextField>) {
		if (this.readOnly) return true;
		let m = +e.source.value - 1 || 0;
		if (m < 1) m = 1;
		e.source.value = String(m);
		this._validate();
		return true;
	}

	protected onYearInput(e: ViewEvent<UITextField>) {
		if (this.readOnly) return true;
		if (e.source.value.toUpperCase().indexOf("T") >= 0) {
			this.value = new Date();
			this._validate(true);
		}
		if (
			/[./-]$/.test(e.source.value) ||
			e.source.value.length > 3 ||
			+e.source.value > 1000
		) {
			e.source.value = String(parseInt(e.source.value));
			if (this.locale.dateFormat === "YMD") {
				e.source.requestFocusNext();
			}
			this._validate();
		}
		return true;
	}

	protected onYearUp(e: ViewEvent<UITextField>) {
		if (this.readOnly) return true;
		let y = +e.source.value + 1 || 0;
		e.source.value = String(y);
		this._validate();
		return true;
	}

	protected onYearDown(e: ViewEvent<UITextField>) {
		if (this.readOnly) return true;
		let y = +e.source.value - 1 || 0;
		if (y < 1) y = 1;
		e.source.value = String(y);
		this._validate();
		return true;
	}

	protected async onOpenCalendar() {
		if (this._calendarOpen) return true;
		let view = ui
			.cell(
				{
					background: ui.color.BACKGROUND,
					padding: 8,
					borderRadius: 8,
					position: { gravity: "start" },
					style: { grow: 0 },
					effect: ui.effect.ELEVATE,
				},
				ui.use(CalendarView, {
					value: this.value,
					range: this.range,
					preselected: this.preselected,
					locale: this.locale,
					styles: this.calendarViewStyles,
					readOnly: this.readOnly,
				})
			)
			.create();
		let calendarView = view.findViewContent(CalendarView)[0];
		if (!calendarView) return;
		app.render(view, {
			mode: "modal",
			shade: true,
			ref: (this.body as UIButton).lastRenderOutput,
			transform: {
				show: ui.animation.SHOW_MENU,
				hide: ui.animation.HIDE_MENU,
			},
		});
		this._calendarOpen = true;
		for await (let e of view.listen(true)) {
			switch (e.name) {
				case "Rendered":
					calendarView.requestFocus();
					break;
				case "CloseModal":
				case "EscapeKeyPress":
					view.unlink();
					break;
				case "DateSelected":
					setTimeout(() => {
						this.value = calendarView.value;
						view.unlink();
						this._validate(true);
					}, 100);
					break;
			}
		}
		this._calendarOpen = false;
	}

	private _calendarOpen = false;

	private _updateFields(value: Date) {
		let [dt, mt, yt] = this._getDMYFields();
		dt.value = String(value.getDate());
		mt.value = String(value.getMonth() + 1);
		yt.value = String(value.getFullYear());
		this._validate();
	}

	private _validate(forceChange?: boolean) {
		let [dt, mt, yt] = this._getDMYFields();
		let d = 0;
		let m = 0;
		let y = 0;
		if (yt.value) {
			y = Math.min(3000, parseInt(yt.value) || 0);
			if (!(y >= 1000)) y = 1000;
			yt.value = String(y);
		}
		if (mt.value) {
			m = Math.min(12, parseInt(mt.value) || 0);
			if (!(m >= 1)) m = 1;
			mt.value = (m < 10 ? "0" : "") + m;
		}
		if (dt.value) {
			let maxD = 31;
			if (y && m) maxD = new Date(y, m, 0).getDate();
			d = Math.min(maxD, parseInt(dt.value) || 0);
			if (!(d >= 1)) d = 1;
			dt.value = (d < 10 ? "0" : "") + d;
		}
		let value = this.value;
		if (value instanceof Date && !forceChange) {
			if (
				value.getDate() === d &&
				value.getMonth() + 1 === m &&
				value.getFullYear() === y
			)
				return;
		} else {
			value = new Date(value ? +value : Date.now());
		}
		if (dt.value && mt.value && yt.value) {
			this.value = value = new Date(
				y,
				m - 1,
				d,
				value.getHours(),
				value.getMinutes(),
				value.getSeconds()
			);
			this.emit("Change", { value });
		}
	}

	private _getDMYFields(): UITextFields3 {
		let fields = this.findViewContent(UITextField);
		if (this.locale.dateFormat === "YMD") fields.reverse();
		return this.locale.dateFormat === "MDY"
			? [fields[1], fields[0], fields[2]]
			: (fields as any);
	}
}
