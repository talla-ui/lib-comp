import { $activity, $formContext, ui } from "talla-ui";
import SamplePane from "~/views/SamplePane";
import { CalendarView, CalendarViewLocale } from "@talla-ui/lib-comp";

const calendarViewLocale_FR = CalendarViewLocale.init({
	// week starts on monday:
	weekStart: 1,
	// Sunday still first here:
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
	<SamplePane>
		<column align="start" spacing={16}>
			<label>Default CalendarView</label>
			<row>
				<CalendarView />
			</row>
			<separator margin={16} />
		</column>

		<column align="start" spacing={16}>
			<label>Bound form field, with preselected week</label>
			<CalendarView
				formField="date1"
				preselected={$activity("preselectedDates")}
			/>
			<label>Selected date: {$formContext("values.date1")}</label>
			<separator margin={16} />
		</column>

		<column align="start" spacing={16}>
			<label>Bound form field, range from today</label>
			<CalendarView formField="date1" preselected={$activity("today")} range />
			<separator margin={16} />
		</column>

		<column align="start" spacing={16}>
			<label>Localized 🇫🇷</label>
			<CalendarView locale={calendarViewLocale_FR} />
			<separator margin={16} />
		</column>

		<spacer height={120} />
	</SamplePane>
);
