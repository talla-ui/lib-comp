import {
	DateInputField,
	DateInputLocale,
	FormEntry,
	TimeInputField,
	TimeInputLocale,
} from "@talla-ui/lib-comp";
import { $form, ui } from "talla-ui";
import { calendarIcon, clockIcon } from "~/icons";

const dateLocale_FR = DateInputLocale.init({
	// Use D, M, Y format:
	dateFormat: "DMY",
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

const timeLocale_FR = TimeInputLocale.init({
	use24HourFormat: true,
});

export default (
	<column spacing={8}>
		{/* Sample 1: Date input */}
		<FormEntry label="Default date input (MDY) with icon">
			<row>
				<DateInputField icon={calendarIcon} value={new Date()} />
			</row>
		</FormEntry>
		<spacer />

		{/* Sample 2: Time input */}
		<FormEntry label="Default time input (12h) with icon">
			<row>
				<TimeInputField icon={clockIcon} value={new Date()} />
			</row>
		</FormEntry>
		<spacer />

		{/* Sample 3: Date and time input */}
		<FormEntry label="Date and time (24h), bound, no calendar">
			<row>
				<DateInputField formField="datetime" icon={calendarIcon} hideCalendar />
				<TimeInputField
					formField="datetime"
					icon={clockIcon}
					locale={{ use24HourFormat: true }}
				/>
			</row>
		</FormEntry>
		<row>
			<label>Value: {$form("values.datetime")}</label>
		</row>
		<spacer />

		{/* Sample 4: Localized */}
		<FormEntry label="Localized 🇫🇷">
			<row>
				<DateInputField
					formField="datetime"
					icon={calendarIcon}
					locale={dateLocale_FR}
				/>
				<TimeInputField
					formField="datetime"
					icon={clockIcon}
					locale={timeLocale_FR}
				/>
			</row>
		</FormEntry>
	</column>
);
