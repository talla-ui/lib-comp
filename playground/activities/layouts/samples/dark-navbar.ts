import { Activity, app } from "talla-ui";
import { SourceCodeActivity } from "~/activities/source/source";
import darkNavbarView from "./dark-navbar.view";

export class DarkNavbarActivity extends Activity {
	title = "Dark navbar";
	navigationPageId = "dark-navbar";

	createView() {
		return darkNavbarView.create();
	}

	onViewSource() {
		SourceCodeActivity.viewSource(import("./dark-navbar.view?raw"));
	}
}

// hot reload for vite
if (import.meta.hot) {
	import.meta.hot.accept();
	app.hotReload(import.meta, DarkNavbarActivity);
}
