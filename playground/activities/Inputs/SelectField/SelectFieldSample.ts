import { Activity, app, FormContext, ViewEvent } from "talla-ui";
import view from "./view";
import code from "./view?raw";
import { SelectField } from "@talla-ui/lib-comp";
import COUNTRIES from "../../../data/COUNTRIES";

export class SelectFieldSample extends Activity {
	constructor() {
		super();
		this.title = "SelectField";
		this.setRenderMode("none");
		this.formContext = new FormContext({}, { select1: true });
	}

	sourceCode = code;

	protected createView() {
		return view.create();
	}

	selectBoundOptions = [
		{ label: "First", value: 1 },
		{ label: "Second", value: 2 },
	];

	countryOptionsList = COUNTRIES;

	onChangeBoundSelect(e: ViewEvent<SelectField>) {
		this.selectBoundOptions = [
			{ label: "First (updated)", value: 1 },
			{ label: "Second", value: 2 },
		];
	}

	onOpenJITSelect(e: ViewEvent<SelectField>) {
		let now = new Date();
		e.source.options = [
			{ label: "(None)", value: undefined },
			{ label: "Time: " + now.toLocaleTimeString(), value: now },
		];
	}
}

// hot reload for vite:
if (import.meta.hot) {
	import.meta.hot.accept();
	app.hotReload(import.meta, SelectFieldSample);
}
