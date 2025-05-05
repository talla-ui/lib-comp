import { Activity, app } from "talla-ui";
import { SourceCodeActivity } from "~/activities/source/source";
import navbarSidebarFixedView from "./navbar-sidebar-fixed.view";

export class NavbarSidebarFixedActivity extends Activity {
	title = "Navbar with fixed sidebar";
	navigationPageId = "navbar-sidebar-fixed";

	createView() {
		return navbarSidebarFixedView.create();
	}

	onViewSource() {
		SourceCodeActivity.viewSource(import("./navbar-sidebar-fixed.view?raw"));
	}
}

// hot reload for vite
if (import.meta.hot) {
	import.meta.hot.accept();
	app.hotReload(import.meta, NavbarSidebarFixedActivity);
}
