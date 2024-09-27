import { Activity, app, FormContext } from "talla-ui";
import view from "./view";
import code from "./view?raw";

const NOW = new Date();
const YYYY = NOW.getFullYear();
const MM = NOW.getMonth() + 1;
const DD = NOW.getDate();

export class CalendarSelectFieldSample extends Activity {
	constructor() {
		super();
		this.title = "CalendarSelectField";
		this.renderOptions = {};
		this.formContext = new FormContext().set(
			"date1",
			new Date(YYYY, MM - 1, DD + 7)
		);
	}

	sourceCode = code;

	protected createView() {
		return view.create();
	}

	onSetToday() {
		this.formContext!.set("date1", new Date(YYYY, MM - 1, DD));
	}
}

// hot reload for vite:
if (import.meta.hot) {
	import.meta.hot.accept();
	app.hotReload(import.meta, CalendarSelectFieldSample);
}
