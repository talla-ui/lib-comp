import { Activity, app } from "talla-ui";
import { SourceCodeActivity } from "~/activities/source/source";
import navbarSidebarSubView from "./navbar-sidebar-sub.view";

export class NavbarSidebarSubActivity extends Activity {
	title = "Navbar with sidebar below";
	navigationPageId = "navbar-sidebar-sub";

	createView() {
		return navbarSidebarSubView.create();
	}

	onViewSource() {
		SourceCodeActivity.viewSource(import("./navbar-sidebar-sub.view?raw"));
	}
}

// hot reload for vite
if (import.meta.hot) {
	import.meta.hot.accept();
	app.hotReload(import.meta, NavbarSidebarSubActivity);
}
