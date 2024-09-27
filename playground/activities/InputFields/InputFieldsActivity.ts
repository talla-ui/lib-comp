import { ui } from "talla-ui";
import { CategoryActivity } from "../Category/CategoryActivity";
import { ButtonSwitchSample } from "./ButtonSwitch/ButtonSwitchSample";
import { CalendarSelectFieldSample } from "./CalendarSelectField/CalendarSelectFieldSample";
import { CalendarViewSample } from "./CalendarView/CalendarViewSample";
import { ComboFieldSample } from "./ComboField/ComboFieldSample";
import { DateInputFieldSample } from "./DateInputField/DateInputFieldSample";
import { EditInPlaceSample } from "./EditInPlace/EditInPlaceSample";
import { ListBoxSample } from "./ListBox/ListBoxSample";
import { SelectFieldSample } from "./SelectField/SelectFieldSample";
import { TimeInputFieldSample } from "./TimeInputField/TimeInputFieldSample";

export class InputFieldsActivity extends CategoryActivity {
	static readonly instance = new InputFieldsActivity();

	constructor() {
		super([
			ButtonSwitchSample,
			SelectFieldSample,
			ComboFieldSample,
			ListBoxSample,
			EditInPlaceSample,
			CalendarViewSample,
			CalendarSelectFieldSample,
			DateInputFieldSample,
			TimeInputFieldSample,
		]);
		this.title = "Input fields";
		this.navigationPageId = "input";
	}

	color = ui.color("#07f").alpha(0.8);
}
