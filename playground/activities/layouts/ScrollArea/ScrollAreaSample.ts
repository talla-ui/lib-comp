import { Activity, app } from "talla-ui";
import view from "./view";
import code from "./view?raw";

export class ScrollAreaSample extends Activity {
	constructor() {
		super();
		this.title = "ScrollArea";
		this.setRenderMode("none");
	}

	sourceCode = code;

	protected createView() {
		return view.create();
	}
}

// hot reload for vite:
if (import.meta.hot) {
	import.meta.hot.accept();
	app.hotReload(import.meta, ScrollAreaSample);
}
