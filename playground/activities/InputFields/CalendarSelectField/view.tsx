import { $formContext, strf, ui } from "talla-ui";
import SamplePane from "~/views/SamplePane";
import { CalendarSelectField, CalendarViewLocale } from "@talla-ui/lib-comp";
import icons from "~/icons/icons";

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
		<column align="start" spacing={8}>
			<label>Default CalendarSelectField (depends on i18n)</label>
			<CalendarSelectField value={new Date()} />
			<separator margin={16} />
		</column>

		<column align="start" spacing={8}>
			<label>With custom format string</label>
			<CalendarSelectField
				value={new Date()}
				styles={{ dateLabel: strf("YMD: %[y]%[m:02i]%[d:02i]") }}
			/>
			<separator margin={16} />
		</column>

		<column align="start" spacing={8}>
			<label>Bound to form field, with icon</label>
			<CalendarSelectField
				formField={"date1"}
				icon={icons.calendar}
				width={180}
			/>
			<button onClick="SetToday">Set to today</button>
			<label wrap>Value: {$formContext.bind("values.date1")}</label>
			<separator margin={16} />
		</column>

		<column align="start" spacing={8}>
			<label>Localized calendar 🇫🇷</label>
			<CalendarSelectField formField={"date1"} locale={calendarViewLocale_FR} />
			<separator margin={16} />
		</column>

		<spacer height={120} />
	</SamplePane>
);
