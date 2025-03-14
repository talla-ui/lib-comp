import { showToastNotification } from "@talla-ui/lib-comp";
import { Activity, app, FormContext } from "talla-ui";
import view from "./view";
import code from "./view?raw";

export class FormSectionSample extends Activity {
	constructor() {
		super();
		this.title = "FormSection";
		this.setRenderMode("none");
		this.formContext = new FormContext();
	}

	sourceCode = code;

	protected createView() {
		return view.create();
	}

	onUpdateProfile() {
		showToastNotification("Your profile information has been saved.");
	}
}

// hot reload for vite:
if (import.meta.hot) {
	import.meta.hot.accept();
	app.hotReload(import.meta, FormSectionSample);
}
