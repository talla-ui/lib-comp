import { Activity, app, FormContext, ViewEvent } from "talla-ui";
import view from "./view";
import code from "./view?raw";
import COUNTRIES from "../../../data/COUNTRIES";

export class ListBoxSample extends Activity {
	constructor() {
		super();
		this.title = "ListBox";
		this.setRenderMode("none");
		this.formContext = new FormContext({}, { country: "BE" });
	}

	sourceCode = code;

	protected createView() {
		return view.create();
	}

	countriesList = COUNTRIES;

	onCountryChanged(e: ViewEvent) {
		app.log.information("Set country: ", e.data.value, e.data.label);
	}
}

// hot reload for vite:
if (import.meta.hot) {
	import.meta.hot.accept();
	app.hotReload(import.meta, ListBoxSample);
}
