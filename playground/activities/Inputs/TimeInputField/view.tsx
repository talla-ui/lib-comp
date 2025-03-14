import { $form, ui } from "talla-ui";
import SamplePane from "~/components/SamplePane";
import {
	DateInputField,
	DateInputLocale,
	TimeInputField,
} from "@talla-ui/lib-comp";
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
		<column spacing={16}>
			<label>Default TimeInputField (24h)</label>
			<row>
				<TimeInputField value={new Date()} />
			</row>
			<separator margin={16} />
		</column>

		<column spacing={16}>
			<label>Date and time bound to form field, 12h</label>
			<row wrap>
				<DateInputField formField="datetime" icon={icons.calendar} />
				<TimeInputField
					formField="datetime"
					icon={icons.clock}
					locale={{ use12HourFormat: true }}
				/>
			</row>
			<label wrap>Value: {$form("values.datetime")}</label>
			<separator margin={16} />
		</column>

		<column spacing={16}>
			<label>Localized 🇫🇷</label>
			<row>
				<DateInputField formField="datetime" locale={dateInputLocale_FR} />
				<TimeInputField formField="datetime" />
			</row>
			<label wrap>Value: {$form("values.datetime")}</label>
			<separator margin={16} />
		</column>

		<spacer height={120} />
	</SamplePane>
);
