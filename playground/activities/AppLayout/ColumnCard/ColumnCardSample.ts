import { Activity, app } from "talla-ui";
import view from "./view";
import code from "./view?raw";
import COUNTRIES from "~/data/COUNTRIES";

export class ColumnCardSample extends Activity {
	constructor() {
		super();
		this.title = "ColumnCard";
		this.setRenderMode("none");
	}

	sourceCode = code;

	countries = COUNTRIES;

	protected createView() {
		return view.create();
	}
}

// hot reload for vite:
if (import.meta.hot) {
	import.meta.hot.accept();
	app.hotReload(import.meta, ColumnCardSample);
}
