import { Activity, app, RenderContext, ui, View } from "talla-ui";
import { SourceCodeActivity } from "~/activities/source/source";
import sidebarDrawerDrawer from "./sidebar-drawer.drawer";
import sidebarDrawerView from "./sidebar-drawer.view";

export class SidebarDrawerActivity extends Activity {
	title = "Sidebar with drawer";
	navigationPageId = "sidebar-drawer";

	drawer?: View = undefined;
	showDrawerOverlay = false;
	showDrawer = true;

	createView() {
		this.drawer = this.attach(sidebarDrawerDrawer.create(), { delegate: this });
		return sidebarDrawerView.create();
	}

	async onViewSource() {
		let viewSource = await import("./sidebar-drawer.view?raw");
		let drawerSource = await import("./sidebar-drawer.drawer?raw");
		let sidebarSource = await import("./sidebar-drawer.sidebar?raw");
		let source =
			"// ...view.tsx:\n" +
			viewSource.default +
			"\n\n// ...drawer.tsx:\n" +
			drawerSource.default +
			"\n\n// ...sidebar.tsx:\n" +
			sidebarSource.default;
		SourceCodeActivity.viewSource(source);
	}

	onShowDrawer() {
		if (app.renderer?.viewport.col2) {
			this.showDrawer = true;
		} else {
			this.showDrawer = false;
			this.showDrawerOverlay = true;
			this._drawerControl = app.render(this.drawer!, {
				mode: "modal",
				transform: { show: ui.animation.FADE_IN_LEFT },
			});
		}
	}

	onHideDrawer() {
		this._drawerControl?.removeAsync();
		this._drawerControl = undefined;
		this.showDrawer = false;
		this.showDrawerOverlay = false;
	}

	_drawerControl?: RenderContext.ViewController;
}

// hot reload for vite
if (import.meta.hot) {
	import.meta.hot.accept();
	app.hotReload(import.meta, SidebarDrawerActivity);
}
