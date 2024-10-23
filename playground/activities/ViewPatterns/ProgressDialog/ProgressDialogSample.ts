import { Activity, app, AsyncTaskQueue } from "talla-ui";
import view, { openIndeterminate, openAdvanced } from "./view";
import code from "./view?raw";

export class ProgressDialogSample extends Activity {
	constructor() {
		super();
		this.title = "ProgressDialog";
		this.setRenderMode("none");
	}

	protected async afterActiveAsync() {
		const setProgress = (t: AsyncTaskQueue.Task) => {
			this.progress = new Date().getSeconds() / 60;
			setTimeout(() => t.queue.add(setProgress), 100);
		};
		this.createActiveTaskQueue().add(setProgress);
	}

	sourceCode = code;

	progress = 0;

	protected createView() {
		return view.create();
	}

	onOpenIndeterminate() {
		return openIndeterminate();
	}

	onOpenAdvanced() {
		return openAdvanced();
	}
}

// hot reload for vite:
if (import.meta.hot) {
	import.meta.hot.accept();
	app.hotReload(import.meta, ProgressDialogSample);
}
