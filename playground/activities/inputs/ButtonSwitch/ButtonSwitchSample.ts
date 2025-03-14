import { Activity, app, FormContext } from "talla-ui";
import view from "./view";
import code from "./view?raw";

export class ButtonSwitchSample extends Activity {
	constructor() {
		super();
		this.title = "ButtonSwitch";
		this.setRenderMode("none");
		this.formContext = new FormContext();
	}

	sourceCode = code;

	protected createView() {
		return view.create();
	}
}

// hot reload for vite:
if (import.meta.hot) {
	import.meta.hot.accept();
	app.hotReload(import.meta, ButtonSwitchSample);
}
