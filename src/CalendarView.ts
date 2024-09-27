import {
	$view,
	bind,
	ConfigOptions,
	ManagedObject,
	ui,
	UIButton,
	UICell,
	UILabel,
	UIStyle,
	UITextField,
	View,
	ViewComposite,
	ViewEvent,
} from "talla-ui";
import { bindFormField } from "./util.js";

/** @internal Number of milliseconds in a day */
const DAY_MS = 1000 * 60 * 60 * 24;

/**
 * Converts a Date object to a local ISO string
 * @internal
 * @param d - The date to convert
 * @returns A string in the format "YYYY-MM-DDTHH:mm:ss" or undefined if input is not a Date
 */
function toLocalISOString(d?: Date | any): string | undefined {
	if (d instanceof Date) {
		let yyyy = d.getFullYear();
		let mm = String(d.getMonth() + 1);
		if (mm.length < 2) mm = "0" + mm;
		let dd = String(d.getDate());
		if (dd.length < 2) dd = "0" + dd;
		return `${yyyy}-${mm}-${dd}T00:00:00`;
	}
}

/**
 * Style configuration for a {@link CalendarView} composite
 *
 * Objects of this type are passed to {@link CalendarView} as the `styles` preset property.
 */
export class CalendarViewStyles extends ConfigOptions {
	/** Default styles that are used when no other styles are specified */
	static default = new CalendarViewStyles();

	/** Style for the grid buttons (dates) */
	gridButtonStyle = ui.style.BUTTON_ICON.extend(
		{
			fontSize: 12,
			fontWeight: "normal",
			borderRadius: 16,
		},
		{
			[UIStyle.STATE_DISABLED]: false,
			[UIStyle.STATE_PRESSED]: true,
			background: ui.color.PRIMARY_BG,
			textColor: ui.color.PRIMARY_BG.text(),
		}
	);

	/** Style for pre-selected grid buttons (date range) */
	gridPreselectedButtonStyle = this.gridButtonStyle.override({
		background: ui.color.PRIMARY_BG.alpha(0.2),
	});

	/** Style for dimmed grid buttons (outside of month) */
	gridDimButtonStyle = this.gridButtonStyle.override({ opacity: 0.1 });

	/** Style for the current day's grid button */
	gridTodayButtonStyle = this.gridButtonStyle.override({
		bold: true,
		underline: true,
	});

	/** Style for weekday headings */
	dayHeadingStyle = ui.style.LABEL.extend({
		fontSize: 12,
		bold: true,
		width: 32,
		textAlign: "center",
	});

	/** Style for the year input field */
	yearInputStyle = ui.style.TEXTFIELD.extend({
		textAlign: "center",
		fontSize: 18,
		bold: true,
		tabularNums: true,
		borderColor: ui.color.CLEAR,
		width: 96,
		minWidth: 0,
	});

	/** Style for month buttons */
	monthButtonStyle = ui.style.BUTTON_PLAIN.extend({
		fontSize: 12,
		minWidth: 0,
		width: 74,
	});
}

/**
 * Localization configuration for a {@link CalendarView} composite
 *
 * Objects of this type are passed to {@link CalendarView} as the `locale` preset property.
 */
export class CalendarViewLocale extends ConfigOptions {
	/** Default locale that is used when no other locale is specified */
	static default = new CalendarViewLocale();

	/** The day of the week to start on (0 = Sunday, 1 = Monday, etc.) */
	weekStart = 0;
	/** Short labels for days of the week, always starting from Sunday */
	dayHeadings = ["S", "M", "T", "W", "T", "F", "S"];
	/** Short labels for months of the year */
	monthLabels = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];
}

/** @internal Describes the properties of a button in the calendar grid */
type GridButtonInfo = {
	label: string;
	isToday: boolean;
	isMonth: boolean;
	isSelected: boolean;
	isPreselected: boolean;
	value?: string;
};

/**
 * View composite for a calendar
 *
 * A calendar view composite displays a monthly calendar, allowing the user to select a single date or a date range. The view composite is optimized for both keyboard and mouse or touch input.
 *
 * The calendar can be localized to start weeks on different days, and to translate the labels for days and months.
 *
 * **Events**
 * - `Change` is emitted when the selected date has changed. The new date is included in the `value` property of the event data.
 * - `DateSelected` is emitted when a date is explicitly selected by the user. The selected date is included in the `value` property of the event data.
 *
 * @see {@link CalendarViewStyles}+
 * @see {@link CalendarViewLocale}+
 */
export class CalendarView extends ViewComposite.define({
	/** The currently selected date */
	value: undefined as Date | undefined,
	/** True if the user should not be able to change the value */
	readOnly: false,
	/** True if the calendar is in date range mode, selecting an end date from the preselected date(s) */
	range: false,
	/** A date or array of dates to be pre-selected */
	preselected: undefined as Date | Date[] | undefined,
	/** The width of the calendar view, defaults to 224 */
	width: 224,
	/** The height of the calendar view, defaults to 256 */
	height: 256,
	/** A form field ID, to add a two-way `FormContext` binding */
	formField: undefined as string | undefined,
	/** A set of styles that are applied to this composite, an instance of {@link CalendarViewStyles} */
	styles: CalendarViewStyles.default,
	/** Localization settings for the calendar, an instance of {@link CalendarViewLocale} */
	locale: CalendarViewLocale.default,
	/** UI component identifier */
	name: "Calendar",
}) {
	/** The ISO string representation of the selected date */
	isoValue = "";

	/** The date currently being displayed */
	protected cursor = new Date();
	/** The name of the month currently being displayed */
	protected monthDisplay = "";
	/** The year currently being displayed */
	protected yearDisplay = "";
	/** Whether the month selection view is currently shown */
	protected showMonths = false;

	protected beforeRender() {
		ManagedObject.observe(this, ["value"], (_, _p, value) => {
			if (value instanceof Date) {
				this.isoValue = toLocalISOString(value) || "";
				this.cursor = value;
				this.emit("Change", { value });
				this._updateGrid();
			}
		});
		bindFormField(this);
		if (this.value) {
			this.cursor = this.value;
		} else if (this.preselected) {
			let preselected = Array.isArray(this.preselected)
				? this.preselected[0]
				: this.preselected;
			if (preselected instanceof Date) {
				this.cursor = preselected;
			}
		}
	}

	protected defineView() {
		return ui.cell(
			{
				background: ui.color.BACKGROUND,
				style: { width: 224, height: 256, grow: 0, shrink: 0 },
				position: { gravity: "auto" },
				layout: { clip: false },
			},
			ui.row(
				{ spacing: 0, height: 32 },
				ui.button({
					label: bind.strf(
						"%s %s",
						$view.string("monthDisplay"),
						$view.string("yearDisplay")
					),
					style: ui.style.BUTTON_PLAIN.override({
						width: "100%",
						shrink: 1,
						padding: { x: 8, y: 2 },
						textAlign: "start",
						minWidth: 0,
						bold: true,
					}),
					onClick: "ShowMonths",
				}),
				ui.button({
					hidden: $view.boolean("showMonths"),
					icon: ui.icon.CHEVRON_BACK,
					style: ui.style.BUTTON_ICON,
					onClick: "PrevMonth",
				}),
				ui.button({
					hidden: $view.boolean("showMonths"),
					icon: ui.icon.CHEVRON_NEXT,
					style: ui.style.BUTTON_ICON,
					onClick: "NextMonth",
				})
			),
			ui.cell({
				hidden: $view.boolean("showMonths"),
				accessibleRole: "list",
				allowKeyboardFocus: true,
				layout: { axis: "horizontal", wrapContent: true },
				position: { gravity: "center" },
				onBeforeRender: "GridRendering",
				onEnterKeyPress: "GridEnterKeyPress",
			}),
			ui.cell(
				{
					hidden: $view.not("showMonths"),
					layout: { clip: false },
					style: { height: 224 },
				},
				ui.spacer(),
				ui.row(
					{ align: "center" },
					ui.button({
						icon: ui.icon.CHEVRON_BACK,
						style: ui.style.BUTTON_ICON,
						onClick: "PrevYear",
					}),
					ui.textField({
						value: $view.bind("yearDisplay"),
						style: this.styles.yearInputStyle,
						selectOnFocus: true,
						type: "numeric",
						onChange: "SetYear",
						onArrowDownKeyPress: "NextYear",
						onArrowUpKeyPress: "PrevYear",
						onEnterKeyPress: "ShowMonths",
					}),
					ui.button({
						icon: ui.icon.CHEVRON_NEXT,
						style: ui.style.BUTTON_ICON,
						onClick: "NextYear",
					})
				),
				ui.cell(
					{
						layout: {
							axis: "horizontal",
							wrapContent: true,
							clip: false,
							distribution: "center",
						},
					},
					...this.locale.monthLabels.map((m, i) =>
						ui.button({
							label: m,
							value: String(i),
							style: this.styles.monthButtonStyle,
							onClick: "SetMonth",
						})
					)
				)
			)
		);
	}

	requestFocus() {
		this._gridCell?.requestFocus();
		return this;
	}

	protected onShowMonths() {
		this.showMonths = !this.showMonths;
		if (this.showMonths) {
			this.findViewContent(UITextField)[0]?.requestFocus();
		}
		return true;
	}

	protected onSetMonth(e: ViewEvent<UIButton>) {
		if (e.source.value) {
			let lastDate = new Date(
				this.cursor.getFullYear(),
				+e.source.value + 1,
				0
			).getDate();
			this.cursor = new Date(
				this.cursor.getFullYear(),
				+e.source.value,
				Math.min(lastDate, this.cursor.getDate())
			);
			this._updateGrid();
			this.showMonths = false;
			this.requestFocus();
		}
		return true;
	}

	protected onSetYear(e: ViewEvent<UITextField>) {
		let yyyy = +e.source.value;
		if (yyyy > 1000 && yyyy < 3000) {
			this.cursor = new Date(
				yyyy,
				this.cursor.getMonth(),
				this.cursor.getDate()
			);
		} else {
			this.yearDisplay = String(new Date().getFullYear());
		}
		this._updateGrid();
		return true;
	}

	protected onSetDate(e: ViewEvent<UIButton>) {
		if (e.source.value && !this.readOnly) {
			this.value = new Date(e.source.value as any);
			this.emit("DateSelected", { value: this.value });
		}
		if (this.readOnly) {
			this._gridCell?.requestFocus();
		}
		return true;
	}

	protected onGridEnterKeyPress() {
		if (this.value) {
			this.emit("DateSelected", { value: this.value });
		}
		return true;
	}

	protected onArrowDownKeyPress() {
		if (this.readOnly) return;
		this._moveDate(true, 7);
	}

	protected onArrowUpKeyPress() {
		if (this.readOnly) return;
		this._moveDate(true, -7);
	}

	protected onArrowLeftKeyPress() {
		if (this.readOnly) return;
		this._moveDate(true, -1);
	}

	protected onArrowRightKeyPress() {
		if (this.readOnly) return;
		this._moveDate(true, 1);
	}

	protected onNextMonth() {
		this._moveDate(false, 0, 1);
		return true;
	}

	protected onPrevMonth() {
		this._moveDate(false, 0, -1);
		return true;
	}

	protected onNextYear() {
		this._moveDate(false, 0, 0, 1);
		return true;
	}

	protected onPrevYear() {
		this._moveDate(false, 0, 0, -1);
		return true;
	}

	protected onGridRendering(e: ViewEvent<UICell>) {
		this._gridCell = e.source;
		this._updateGrid();
		return true;
	}

	private _updateGrid(focus?: boolean) {
		if (!this._gridCell) return;
		let cursor = this.cursor || new Date();

		// Update month and year title
		this.monthDisplay = this.locale.monthLabels[cursor.getMonth()]!;
		this.yearDisplay = String(cursor.getFullYear());

		// set day headings (or take existing ones)
		let content: View[] = [...this._gridCell.content.take(7)];
		if (!content.length) {
			for (let dayHeading of this.locale.dayHeadings) {
				let heading = new UILabel(dayHeading);
				heading.style = this.styles.dayHeadingStyle;
				content.push(heading);
			}
			content.push(...content.splice(0, this.locale.weekStart));
		}

		// get data for current month and add it to the grid
		for (let g of this._getGridInfo(cursor)) {
			content.push(
				new (ui.button({
					label: g.label,
					style: g.isPreselected
						? this.styles.gridPreselectedButtonStyle
						: g.isToday
						? this.styles.gridTodayButtonStyle
						: g.isMonth
						? this.styles.gridButtonStyle
						: this.styles.gridDimButtonStyle,
					value: g.value,
					pressed: g.isSelected,
					disableKeyboardFocus: true,
					accessibleRole: "listitem",
					onPress: "SetDate",
				}))()
			);
		}

		// update the grid and focus (after move)
		this._gridCell.content.replaceAll(content);
		if (focus) this._gridCell.requestFocus();
	}

	private _getGridInfo(cursor: Date) {
		let result: GridButtonInfo[] = [];
		let yyyy = cursor.getFullYear();
		let month = cursor.getMonth();
		let monthStart = new Date(yyyy, month);
		let monthPad = (monthStart.getDay() - this.locale.weekStart + 7) % 7;
		let gridStart = new Date(yyyy, month, -monthPad + 1);
		let cur = gridStart;
		function getIndex(d: Date) {
			return Math.floor((+d - +gridStart) / DAY_MS);
		}
		let selectedIdx = this.value ? getIndex(this.value) : undefined;
		let preselectedIdx: number[];
		if (this.preselected instanceof Date) {
			preselectedIdx = [getIndex(this.preselected)];
		} else if (Array.isArray(this.preselected)) {
			preselectedIdx = this.preselected.map(getIndex);
		} else {
			preselectedIdx = [];
		}
		let todayIndex = Math.floor((Date.now() - +gridStart) / DAY_MS);
		for (let i = 0; i < 42; i++) {
			result.push({
				label: String(cur.getDate()),
				isToday: i === todayIndex,
				isMonth: cur.getMonth() === month,
				isSelected: i === selectedIdx,
				isPreselected:
					i !== selectedIdx &&
					(this.range && i < selectedIdx!
						? preselectedIdx.some((a) => a <= i)
						: preselectedIdx.includes(i)),
				value: toLocalISOString(cur),
			});
			cur.setDate(cur.getDate() + 1);
		}
		return result;
	}

	private _moveDate(select: boolean, days: number, months = 0, years = 0) {
		let year = this.cursor.getFullYear() + years;
		let month = this.cursor.getMonth() + months;
		let date = this.cursor.getDate() + days;
		let nDays = new Date(year, month + 1, 0).getDate();
		if (months) date = Math.min(nDays, date);
		let cursor = new Date(year, month, date);
		this.cursor = cursor;
		if (select && !this.readOnly) {
			this.value = this.cursor;
		} else {
			this._updateGrid();
		}
	}

	private _gridCell?: UICell;
}
