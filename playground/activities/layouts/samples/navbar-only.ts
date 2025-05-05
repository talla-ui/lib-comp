import { Activity, app } from "talla-ui";
import { SourceCodeActivity } from "~/activities/source/source";
import navbarOnlyView from "./navbar-only.view";

export class NavbarOnlyActivity extends Activity {
	title = "Navbar only";
	navigationPageId = "navbar-only";

	createView() {
		return navbarOnlyView.create();
	}

	onViewSource() {
		SourceCodeActivity.viewSource(import("./navbar-only.view?raw"));
	}
}

// hot reload for vite
if (import.meta.hot) {
	import.meta.hot.accept();
	app.hotReload(import.meta, NavbarOnlyActivity);
}
