import { Activity, app, UIToggle, ViewEvent } from "talla-ui";
import view from "./view";
import code from "./view?raw";
import { HeaderPane } from "../../../../lib";

export class HeaderPaneSample extends Activity {
	constructor() {
		super();
		this.title = "HeaderPane";
		this.setRenderMode("none");
	}

	sourceCode = code;

	protected createView() {
		return view.create();
	}

	onToggleHeader(e: ViewEvent<UIToggle>) {
		let pane = HeaderPane.whence(e.source);
		if (pane) pane.showHeader = e.source.state;
	}

	onToggleBackdrop(e: ViewEvent<UIToggle>) {
		let pane = HeaderPane.whence(e.source);
		if (pane) pane.backdrop = e.source.state;
	}
}

// hot reload for vite:
if (import.meta.hot) {
	import.meta.hot.accept();
	app.hotReload(import.meta, HeaderPaneSample);
}
