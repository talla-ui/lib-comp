import { Activity, app, FormContext } from "talla-ui";
import view from "./view";
import code from "./view?raw";

export class TimeInputFieldSample extends Activity {
	constructor() {
		super();
		this.title = "TimeInputField";
		this.setRenderMode("none");
		this.formContext = new FormContext().set("datetime", new Date());
	}

	sourceCode = code;

	protected createView() {
		return view.create();
	}
}

// hot reload for vite:
if (import.meta.hot) {
	import.meta.hot.accept();
	app.hotReload(import.meta, TimeInputFieldSample);
}
