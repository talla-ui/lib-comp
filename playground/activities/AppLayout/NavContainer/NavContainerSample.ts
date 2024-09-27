import { Activity, app } from "talla-ui";
import view from "./view";
import code from "./view?raw";

export class NavContainerSample extends Activity {
	constructor() {
		super();
		this.title = "NavContainer";
		this.renderOptions = {};
	}

	sourceCode = code;

	protected createView() {
		return view.create();
	}
}

// hot reload for vite:
if (import.meta.hot) {
	import.meta.hot.accept();
	app.hotReload(import.meta, NavContainerSample);
}
