import { Activity, app, NavigationContext, NavigationTarget } from "talla-ui";
import layoutsView from "./layouts.view";

export class LayoutsActivity extends Activity {
	title = "Layouts — Playground";
	navigationPageId = "layouts";

	createView() {
		return layoutsView.create();
	}

	protected async navigateAsync(target: NavigationTarget) {
		app.navigate(target, {
			// replace page only on narrow viewport
			replace: app.renderer?.viewport.col2 ? undefined : "page",
		});
	}
}

// hot reload for vite
if (import.meta.hot) {
	import.meta.hot.accept();
	app.hotReload(import.meta, LayoutsActivity);
}
