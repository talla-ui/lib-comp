import { Activity, app } from "talla-ui";
import { SourceCodeActivity } from "~/activities/source/source";
import navbarOverlapView from "./navbar-overlap.view";

export class NavbarOverlapActivity extends Activity {
	title = "Navbar overlap";
	navigationPageId = "navbar-overlap";

	createView() {
		return navbarOverlapView.create();
	}

	onViewSource() {
		SourceCodeActivity.viewSource(import("./navbar-overlap.view?raw"));
	}
}

// hot reload for vite
if (import.meta.hot) {
	import.meta.hot.accept();
	app.hotReload(import.meta, NavbarOverlapActivity);
}
