import { $form, strf, ui } from "talla-ui";
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
		<column spacing={16}>
			<label>Default CalendarSelectField (depends on i18n)</label>
			<row>
				<CalendarSelectField value={new Date()} />
			</row>
			<separator margin={16} />
		</column>

		<column spacing={16}>
			<label>With custom format string</label>
			<row>
				<CalendarSelectField
					value={new Date()}
					styles={{ dateLabel: strf("YMD: %[y]%[m:02i]%[d:02i]") }}
				/>
			</row>
			<separator margin={16} />
		</column>

		<column spacing={16}>
			<label>Bound to form field, with icon</label>
			<row>
				<CalendarSelectField
					formField={"date1"}
					icon={icons.calendar}
					width={180}
				/>
				<button onClick="SetToday">Set to today</button>
			</row>
			<label wrap>Value: {$form("values.date1")}</label>
			<separator margin={16} />
		</column>

		<column spacing={16}>
			<label>Localized calendar 🇫🇷</label>
			<row>
				<CalendarSelectField
					formField={"date1"}
					locale={calendarViewLocale_FR}
				/>
			</row>
			<separator margin={16} />
		</column>

		<spacer height={120} />
	</SamplePane>
);
