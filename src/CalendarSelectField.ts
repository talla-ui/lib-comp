import {
	$view,
	app,
	ConfigOptions,
	LazyString,
	ManagedObject,
	strf,
	StringConvertible,
	ui,
	UIButton,
	UIIconResource,
	UIStyle,
	ViewComposite,
	ViewEvent,
} from "talla-ui";
import {
	CalendarView,
	CalendarViewLocale,
	CalendarViewStyles,
} from "./CalendarView.js";
import { bindFormField } from "./util.js";

/**
 * Style configuration for a {@link CalendarSelectField} composite
 *
 * Objects of this type are passed to {@link CalendarSelectField} as the `styles` preset property.
 */
export class CalendarSelectFieldStyles extends ConfigOptions {
	/** Default styles that are used when no other styles are specified */
	static default = new CalendarSelectFieldStyles();

	/** The direction of the button chevron icon */
	chevron?: "up" | "down" | "next" | "back" = "down";

	/** The size of the button icon, if any */
	iconSize?: number;

	/**
	 * A lazily-evaluated string for displaying the date value, defaults to `strf("%[value:local|date]")`
	 *
	 * > Note: The default value depends on `app.i18n` to format the date value. You must define an `I18nProvider` for this to work, or use another format that doesn't use 'local', e.g. `strf("%[m:02i]-%[d:02i]-%[y:04i]")`.
	 *
	 * The following fields are available in the format string.
	 * - `value` is the `Date` value itself
	 * - `d` is the date of the month as a number (1-31)
	 * - `m` is the month of the year as a number (1-12)
	 * - `y` is the year as a number
	 */
	dateLabel?: LazyString = strf("%[value:local|date]");

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
 * View composite for a calendar select field
 *
 * A calendar select field consists of a dropdown button that discloses a modal calendar view overlay when pressed, allowing the user to select a date.
 *
 * The calendar overlay view can be localized in the same way as a standalone calendar view.
 *
 * > Note: The button label is formatted using the `I18nProvider` in `app.i18n` by default. You must define the i18n provider for this to work, or change the date label format using {@link CalendarSelectFieldStyles.dateLabel}.
 *
 * For a more keyboard-friendly option, consider using the DateInputField composite instead.
 *
 * **Events**
 * - `Change` is emitted when the selected date has changed. The new date is included in the `value` property of the event data.
 *
 * @see {@link CalendarSelectFieldStyles}+
 * @see {@link CalendarViewLocale}
 * @see {@link CalendarViewStyles}
 */
export class CalendarSelectField extends ViewComposite.define({
	/** The current selected date */
	value: undefined as Date | undefined,
	/** The label displayed on the dropdown button */
	label: StringConvertible.EMPTY as StringConvertible | undefined,
	/** True if the calendar is in date range mode, selecting an end date from the preselected date(s) */
	range: false,
	/** A date or array of dates to be pre-selected */
	preselected: undefined as Date | Date[] | undefined,
	/** The width of the dropdown button */
	width: undefined as string | number | undefined,
	/** True if the button should grow to fill the available space, defaults to false */
	grow: false,
	/** The icon displayed on the dropdown button */
	icon: undefined as UIIconResource | undefined,
	/** True if the user should not be able to change the value */
	readOnly: false,
	/** A form field ID, to add a two-way `FormContext` binding */
	formField: undefined as string | undefined,
	/** UI component identifier */
	name: "SelectField",
	/** UI component accessible label */
	accessibleLabel: undefined as string | undefined,
	/** Localization settings for the calendar, an instance of {@link CalendarViewLocale} */
	locale: CalendarViewLocale.default,
	/** A set of styles that are applied to this composite, an instance of {@link CalendarSelectFieldStyles} */
	styles: CalendarSelectFieldStyles.default,
	/** Styles for the calendar view, an instance of {@link CalendarViewStyles} */
	calendarViewStyles: CalendarViewStyles.default,
}) {
	protected beforeRender() {
		ManagedObject.observe(this, ["value"], (_, _p, value) => {
			if (value instanceof Date) {
				this._updateLabel(value);
				this.emit("Change", { value: this.value });
			}
		});
		bindFormField(this);
		if (this.value instanceof Date) {
			this._updateLabel(this.value);
		}
	}

	protected defineView() {
		return ui.button({
			label: $view.string("label"),
			disabled: $view.boolean("readOnly"),
			icon: $view("icon"),
			iconSize: this.styles.iconSize,
			chevron: this.styles.chevron,
			width: this.width,
			grow: this.grow,
			style: this.styles.buttonStyle,
			name: this.name,
			accessibleLabel: this.accessibleLabel,
			onClick: "OpenCalendar",
			onPress: "OpenCalendar",
			onSpacebarPress: "OpenCalendar",
		});
	}

	protected onKeyDown(e: ViewEvent) {
		let key = (e.data.event as any)?.key;
		if (key === "t" || key === "T") {
			this.value = new Date();
			return;
		}
		if (!this.value) return;
		if (key === "-" || key === "ArrowDown") {
			this.value = new Date(
				this.value.getFullYear(),
				this.value.getMonth(),
				this.value.getDate() - 1
			);
			return;
		}
		if (key === "+" || key === "ArrowUp") {
			this.value = new Date(
				this.value.getFullYear(),
				this.value.getMonth(),
				this.value.getDate() + 1
			);
			return;
		}
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
					grow: false,
					effect: ui.effect.ELEVATE,
				},
				ui.use(CalendarView, {
					value: this.value,
					range: this.range,
					preselected: this.preselected,
					locale: this.locale,
					styles: this.calendarViewStyles,
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
					}, 100);
					break;
			}
		}
		this._calendarOpen = false;
	}

	private _updateLabel(value: Date) {
		if (this.styles.dateLabel instanceof LazyString) {
			this.label = this.styles.dateLabel.format({
				value,
				d: value.getDate(),
				m: value.getMonth() + 1,
				y: value.getFullYear(),
			});
		} else if (this.styles.dateLabel) {
			this.label = this.styles.dateLabel;
		}
	}

	private _calendarOpen = false;
}
