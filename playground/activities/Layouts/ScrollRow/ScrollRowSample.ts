import { Activity, app } from "talla-ui";
import view from "./view";
import code from "./view?raw";
import COUNTRIES from "~/data/COUNTRIES";

export class ScrollRowSample extends Activity {
	constructor() {
		super();
		this.title = "ScrollRow";
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
	app.hotReload(import.meta, ScrollRowSample);
}
