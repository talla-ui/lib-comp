import { Activity, app, ui } from "talla-ui";
import view from "./view";
import code from "./view?raw";

class NestedActivity extends Activity {
	constructor() {
		super();
		this.setRenderMode("none");
	}

	protected createView() {
		return ui
			.column(
				{ align: "center", spacing: 16, padding: 16 },
				ui.label("Nested Activity", { bold: true }),
				ui.label("This is a nested activity."),
				ui.button("Destroy", { onClick: "Destroy" })
			)
			.create();
	}

	protected async beforeActiveAsync() {
		await super.beforeActiveAsync();
		await new Promise((resolve) => setTimeout(resolve, 3000));
	}

	onDestroy() {
		this.unlink();
	}
}

export class LoadingStateViewSample extends Activity {
	constructor() {
		super();
		this.title = "LoadingStateView";
		this.setRenderMode("none");
	}

	sourceCode = code;

	nested = this.attach(new NestedActivity());

	protected createView() {
		return view.create();
	}

	protected async afterActiveAsync() {
		await super.afterActiveAsync();
		await this.nested.activateAsync();
	}
}

// hot reload for vite:
if (import.meta.hot) {
	import.meta.hot.accept();
	app.hotReload(import.meta, LoadingStateViewSample);
}
