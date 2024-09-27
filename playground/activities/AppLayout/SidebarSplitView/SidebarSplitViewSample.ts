import { Activity, app, ViewEvent } from "talla-ui";
import view from "./view";
import code from "./view?raw";

export class SidebarSplitViewSample extends Activity {
	constructor() {
		super();
		this.title = "SidebarSplitView";
		this.renderOptions = {};
	}

	sourceCode = code;

	switchValue = 1;
	showContent = false;
	showSidebar = true;

	protected createView() {
		return view.create();
	}

	onSetDetail(e: ViewEvent) {
		let value = e.data.value as number;
		this.showSidebar = !!(value & 1);
		this.showContent = !!(value & 2);
		this.switchValue = value;
	}

	onShowDetail() {
		if (this.switchValue !== 3) {
			this.showSidebar = false;
			this.showContent = true;
			this.switchValue = 2;
		}
	}

	onCloseDetail() {
		if (this.switchValue !== 3) {
			this.showSidebar = true;
			this.showContent = false;
			this.switchValue = 1;
		}
	}
}

// hot reload for vite:
if (import.meta.hot) {
	import.meta.hot.accept();
	app.hotReload(import.meta, SidebarSplitViewSample);
}
