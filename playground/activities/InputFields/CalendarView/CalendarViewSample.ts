import { Activity, app, FormContext } from "talla-ui";
import view from "./view";
import code from "./view?raw";

const NOW = new Date();
const YYYY = NOW.getFullYear();
const MM = NOW.getMonth() + 1;
const DD = NOW.getDate();

export class CalendarViewSample extends Activity {
	constructor() {
		super();
		this.title = "CalendarView";
		this.renderOptions = {};
		this.formContext = new FormContext().set(
			"date1",
			new Date(YYYY, MM - 1, DD + 7)
		);
	}

	sourceCode = code;

	today = new Date(YYYY, MM - 1, DD);

	preselectedDates = [
		new Date(YYYY, MM - 1, DD + 7),
		new Date(YYYY, MM - 1, DD + 8),
		new Date(YYYY, MM - 1, DD + 9),
		new Date(YYYY, MM - 1, DD + 10),
		new Date(YYYY, MM - 1, DD + 11),
		new Date(YYYY, MM - 1, DD + 12),
		new Date(YYYY, MM - 1, DD + 13),
	];

	protected createView() {
		return view.create();
	}
}

// hot reload for vite:
if (import.meta.hot) {
	import.meta.hot.accept();
	app.hotReload(import.meta, CalendarViewSample);
}
