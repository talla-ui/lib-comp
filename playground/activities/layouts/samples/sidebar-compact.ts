import { Activity, app } from "talla-ui";
import { SourceCodeActivity } from "~/activities/source/source";
import sidebarCompactView from "./sidebar-compact.view";

export class SidebarCompactActivity extends Activity {
	title = "Sidebar (compact)";
	navigationPageId = "sidebar-compact";

	createView() {
		return sidebarCompactView.create();
	}

	onViewSource() {
		SourceCodeActivity.viewSource(import("./sidebar-compact.view?raw"));
	}
}

// hot reload for vite
if (import.meta.hot) {
	import.meta.hot.accept();
	app.hotReload(import.meta, SidebarCompactActivity);
}
