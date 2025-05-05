import { Activity, app } from "talla-ui";
import { SourceCodeActivity } from "~/activities/source/source";
import sidebarOnlyView from "./sidebar-only.view";

export class SidebarOnlyActivity extends Activity {
	title = "Sidebar only";
	navigationPageId = "sidebar-only";

	createView() {
		return sidebarOnlyView.create();
	}

	onViewSource() {
		SourceCodeActivity.viewSource(import("./sidebar-only.view?raw"));
	}
}

// hot reload for vite
if (import.meta.hot) {
	import.meta.hot.accept();
	app.hotReload(import.meta, SidebarOnlyActivity);
}
