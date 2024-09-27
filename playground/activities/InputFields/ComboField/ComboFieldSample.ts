import { Activity, app, FormContext, ViewEvent } from "talla-ui";
import view from "./view";
import code from "./view?raw";
import COUNTRIES from "../../../data/COUNTRIES";

export class ComboFieldSample extends Activity {
	constructor() {
		super();
		this.title = "ComboField";
		this.renderOptions = {};
		this.formContext = new FormContext();
	}

	sourceCode = code;

	protected createView() {
		return view.create();
	}

	countryOptions = COUNTRIES;

	onCountryChanged(e: ViewEvent) {
		let value = String(e.data.value || "").toUpperCase();
		let r = value
			? COUNTRIES.filter((c) => c.label.toUpperCase().startsWith(value))[0]
			: undefined;
		if (r) {
			this.formContext!.set("country", r.value);
			this.formContext!.set("countryName", r.label);
		} else {
			this.formContext!.set("country", undefined);
			this.formContext!.set("countryName", undefined);
		}
	}

	onFilterCountries(e: ViewEvent) {
		let value = String(e.data.value || "").toUpperCase();
		this.countryOptions = COUNTRIES.filter((c) =>
			c.label.toUpperCase().startsWith(value)
		);
	}
}

// hot reload for vite:
if (import.meta.hot) {
	import.meta.hot.accept();
	app.hotReload(import.meta, ComboFieldSample);
}
