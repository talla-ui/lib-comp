import { Activity, app, ViewEvent } from "talla-ui";
import view, { toasts } from "./view";
import code from "./view?raw";

export class ToastNotificationSample extends Activity {
	constructor() {
		super();
		this.title = "ToastNotification";
		this.renderOptions = {};
	}

	sourceCode = code;

	protected createView() {
		return view.create();
	}

	onShowToast(e: ViewEvent) {
		let value = e.data.value as string;
		(toasts as any)[value]?.();
	}
}

// hot reload for vite:
if (import.meta.hot) {
	import.meta.hot.accept();
	app.hotReload(import.meta, ToastNotificationSample);
}
