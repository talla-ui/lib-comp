import { Activity, app } from "talla-ui";
import { SourceCodeActivity } from "~/activities/source/source";
import dynamicNavbarView from "./dynamic-navbar.view";

export class DynamicNavbarActivity extends Activity {
	title = "Dynamic navbar";
	navigationPageId = "dynamic-navbar";

	createView() {
		return dynamicNavbarView.create();
	}

	onViewSource() {
		SourceCodeActivity.viewSource(import("./dynamic-navbar.view?raw"));
	}
}

// hot reload for vite
if (import.meta.hot) {
	import.meta.hot.accept();
	app.hotReload(import.meta, DynamicNavbarActivity);
}
