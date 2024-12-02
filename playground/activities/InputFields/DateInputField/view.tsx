import { $formContext, ui } from "talla-ui";
import SamplePane from "~/views/SamplePane";
import { DateInputField, DateInputLocale } from "@talla-ui/lib-comp";
import icons from "~/icons/icons";

const dateInputLocale_FR = DateInputLocale.init({
	// for text field order:
	dateFormat: "DMY",
	dateSeparator: "-",
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
			<label>Default DateInputField</label>
			<row>
				<DateInputField value={new Date()} />
			</row>
			<separator margin={16} />
		</column>

		<column align="start" spacing={16}>
			<label>Bound to form field, with icon</label>
			<row>
				<DateInputField formField={"date1"} icon={icons.calendar} />
			</row>
			<button onClick="SetToday">Set to today</button>
			<label wrap>Value: {$formContext.bind("values.date1")}</label>
			<separator margin={16} />
		</column>

		<column align="start" spacing={16}>
			<label>Localized calendar 🇫🇷</label>
			<row>
				<DateInputField formField={"date1"} locale={dateInputLocale_FR} />
			</row>
			<separator margin={16} />
		</column>

		<spacer height={120} />
	</SamplePane>
);
