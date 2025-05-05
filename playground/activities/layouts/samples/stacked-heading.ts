import { Activity, app } from "talla-ui";
import { SourceCodeActivity } from "~/activities/source/source";
import stackedHeadingView from "./stacked-heading.view";

export class StackedHeadingActivity extends Activity {
	title = "Stacked heading";
	navigationPageId = "stacked-heading";

	createView() {
		return stackedHeadingView.create();
	}

	onViewSource() {
		SourceCodeActivity.viewSource(import("./stacked-heading.view?raw"));
	}
}

// hot reload for vite
if (import.meta.hot) {
	import.meta.hot.accept();
	app.hotReload(import.meta, StackedHeadingActivity);
}
