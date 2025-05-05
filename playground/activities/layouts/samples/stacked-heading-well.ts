import { Activity, app } from "talla-ui";
import { SourceCodeActivity } from "~/activities/source/source";
import stackedHeadingWellView from "./stacked-heading-well.view";

export class StackedHeadingWellActivity extends Activity {
	title = "Stacked heading well";
	navigationPageId = "stacked-heading-well";

	createView() {
		return stackedHeadingWellView.create();
	}

	onViewSource() {
		SourceCodeActivity.viewSource(import("./stacked-heading-well.view?raw"));
	}
}

// hot reload for vite
if (import.meta.hot) {
	import.meta.hot.accept();
	app.hotReload(import.meta, StackedHeadingWellActivity);
}
