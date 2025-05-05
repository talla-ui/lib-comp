import { SelectField } from "@talla-ui/lib-comp";
import {
	Activity,
	app,
	FormContext,
	NavigationTarget,
	ViewEvent,
} from "talla-ui";
import COUNTRIES from "~/mock/COUNTRIES";
import { SourceCodeActivity } from "../source/source";
import componentsView from "./components.view";

const NOW = new Date();
const YYYY = NOW.getFullYear();
const MM = NOW.getMonth() + 1;
const DD = NOW.getDate();

export class ComponentsActivity extends Activity {
	title = "Components — Playground";
	navigationPageId = "components";

	countries = COUNTRIES;
	countriesInput = COUNTRIES;

	formContext = new FormContext(undefined, {
		selectBool: true,
		country: "",
		countryName: "",
		listBoxCountry: "BE",
		date1: new Date(YYYY, MM - 1, DD + 7),
		datetime: new Date(YYYY, MM - 1, DD + 7, 14, 30),
	});

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

	progress = 0;

	constructor() {
		super();
		let q = this.createActiveTaskQueue({ throttleDelay: 1000 });
		const setProgress = async () => {
			this.progress = (this.progress + 0.07) % 1;
			q.add(setProgress);
		};
		setProgress();
	}

	createView() {
		return componentsView.create();
	}

	onViewSource(e: ViewEvent) {
		let source: any;
		switch (e.data.id) {
			case "builtin":
				source = import("./samples/builtin.tsx?raw");
				break;
			case "button-switches":
				source = import("./samples/button-switches.tsx?raw");
				break;
			case "edit-in-place":
				source = import("./samples/edit-in-place.tsx?raw");
				break;
			case "select-fields":
				source = import("./samples/select-fields.tsx?raw");
				break;
			case "combo-fields":
				source = import("./samples/combo-fields.tsx?raw");
				break;
			case "date-pickers":
				source = import("./samples/date-pickers.tsx?raw");
				break;
			case "date-time-input":
				source = import("./samples/date-time-input.tsx?raw");
				break;
			case "progress":
				source = import("./samples/progress.tsx?raw");
				break;
			case "list-boxes":
				source = import("./samples/list-boxes.tsx?raw");
				break;
		}
		if (!source) return;
		SourceCodeActivity.viewSource(source);
	}

	onOpenJITSelect(e: ViewEvent<SelectField>) {
		let now = new Date();
		e.source.options = [
			{ label: "(None)", value: undefined },
			{ label: "Time: " + now.toLocaleTimeString(), value: now },
		];
	}

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
		this.countriesInput = COUNTRIES.filter((c) =>
			c.label.toUpperCase().startsWith(value)
		);
	}

	protected async navigateAsync(target: NavigationTarget) {
		app.navigate(target, {
			// replace page only on narrow viewport
			replace: app.renderer?.viewport.col2 ? undefined : "page",
		});
	}
}

// hot reload for vite
if (import.meta.hot) {
	import.meta.hot.accept();
	app.hotReload(import.meta, ComponentsActivity);
}
