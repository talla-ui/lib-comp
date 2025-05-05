import {
	CalendarSelectField,
	CalendarView,
	ColumnCard,
	DateInputLocale,
	FormEntry,
} from "@talla-ui/lib-comp";
import { $activity, $form, strf, ui } from "talla-ui";
import { calendarIcon } from "~/icons";

const dateLocale_FR = DateInputLocale.init({
	// use D, M, Y format:
	dateFormat: "DMY",
	// week starts on Monday:
	weekStart: 1,
	// day labels (Sunday still first here):
	dayHeadings: "DLMMJVS".split(""),
	// month labels don't need to be 3 chars:
	monthLabels: [
		"janv.",
		"févr.",
		"mars",
		"avr.",
		"mai",
		"juin",
		"juil.",
		"août",
		"sept.",
		"oct.",
		"nov.",
		"déc.",
	],
});

export default (
	<column>
		<row wrap align="center">
			{/* Sample 1: CalendarView */}
			<ColumnCard margin={8}>
				<row align="center" padding={8}>
					<label fontSize={12}>Plain calendar view</label>
				</row>
				<row align="center" padding={8}>
					<CalendarView />
				</row>
			</ColumnCard>

			{/* Sample 2 */}
			<ColumnCard margin={8}>
				<row align="center" padding={8}>
					<label fontSize={12}>Localized 🇫🇷</label>
				</row>
				<row align="center" padding={8}>
					<CalendarView locale={dateLocale_FR} />
				</row>
			</ColumnCard>

			{/* Sample 3 */}
			<ColumnCard margin={8}>
				<row align="center" padding={8}>
					<label fontSize={12}>Bound form field, with preselected week</label>
				</row>
				<row align="center" padding={8}>
					<CalendarView
						formField="date1"
						preselected={$activity("preselectedDates")}
					/>
				</row>
				<row align="center" padding={8}>
					<label>{$form("values.date1")}</label>
				</row>
			</ColumnCard>

			{/* Sample 4 */}
			<ColumnCard margin={8}>
				<row align="center" padding={8}>
					<label fontSize={12}>Range from today</label>
				</row>
				<row align="center" padding={8}>
					<CalendarView
						formField="date1"
						preselected={$activity("today")}
						range
					/>
				</row>
			</ColumnCard>
		</row>
		<spacer height={16} />

		{/* Sample 5: CalendarSelectField */}
		<row align="center">
			<FormEntry label="Calendar select field (your locale)">
				<CalendarSelectField
					value={new Date()}
					formField="date1"
					icon={calendarIcon}
				/>
			</FormEntry>
		</row>
		<spacer height={16} />

		{/* Sample 6 */}
		<row align="center">
			<FormEntry label="Localized 🇫🇷">
				<CalendarSelectField formField="date1" locale={dateLocale_FR} />
			</FormEntry>
		</row>
		<spacer height={16} />

		{/* Sample 7 */}
		<row align="center">
			<FormEntry label="Custom format">
				<CalendarSelectField
					value={new Date()}
					styles={{ dateLabel: strf("YMD: %[y]%[m:02i]%[d:02i]") }}
				/>
			</FormEntry>
		</row>
	</column>
);
