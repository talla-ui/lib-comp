import { Activity, app } from "talla-ui";
import { SourceCodeActivity } from "~/activities/source/source";
import darkSidebarView from "./dark-sidebar.view";

export class DarkSidebarActivity extends Activity {
	title = "Dark sidebar";
	navigationPageId = "dark-sidebar";

	createView() {
		return darkSidebarView.create();
	}

	onViewSource() {
		SourceCodeActivity.viewSource(import("./dark-sidebar.view?raw"));
	}
}

// hot reload for vite
if (import.meta.hot) {
	import.meta.hot.accept();
	app.hotReload(import.meta, DarkSidebarActivity);
}
