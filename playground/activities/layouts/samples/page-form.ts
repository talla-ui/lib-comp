import { Activity, app } from "talla-ui";
import { SourceCodeActivity } from "~/activities/source/source";
import pageFormView from "./page-form.view";

export class PageFormActivity extends Activity {
	title = "Page form";
	navigationPageId = "page-form";

	createView() {
		return pageFormView.create();
	}

	onViewSource() {
		SourceCodeActivity.viewSource(import("./page-form.view?raw"));
	}
}

// hot reload for vite
if (import.meta.hot) {
	import.meta.hot.accept();
	app.hotReload(import.meta, PageFormActivity);
}
