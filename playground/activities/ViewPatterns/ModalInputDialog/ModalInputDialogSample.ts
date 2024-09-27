import { Activity, app, FormContext } from "talla-ui";
import view, { openDialog } from "./view";
import code from "./view?raw";

export class ModalInputDialogSample extends Activity {
	constructor() {
		super();
		this.title = "ModalInputDialog";
		this.renderOptions = {};
		this.formContext = new FormContext()
			.set("email", "test@example.com")
			.set("message", "Hello");
	}

	sourceCode = code;

	protected createView() {
		return view.create();
	}

	onOpenDialog() {
		return openDialog({
			email: this.formContext!.values.email as any,
			message: this.formContext!.values.message as any,
		});
	}
}

// hot reload for vite:
if (import.meta.hot) {
	import.meta.hot.accept();
	app.hotReload(import.meta, ModalInputDialogSample);
}
