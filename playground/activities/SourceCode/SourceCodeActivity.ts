import { Activity, app } from "talla-ui";
import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/typescript";
import xml from "highlight.js/lib/languages/xml";
import screen from "./screen";

// Enable TS + JSX syntax highlighting:
hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("xml", xml);

export class SourceCodeActivity extends Activity {
	static async showForActivity(activity?: Activity) {
		let sourceCode =
			activity && "sourceCode" in activity && activity.sourceCode;
		if (!activity || !sourceCode) {
			app.showAlertDialogAsync("Source code not found");
			return;
		}
		let sourceCodeActivity = new SourceCodeActivity(
			String(activity.title || ""),
			String(sourceCode)
		);
		app.addActivity(sourceCodeActivity, true);
	}

	constructor(title: string, code: string) {
		super();
		this.title = "Source code: " + title;
		this.code = hljs.highlight(code.replace(/\t/g, "  "), {
			language: "ts",
		}).value;

		// if navigation occurs, close this screen right away
		app.navigation.listen({
			handler: () => {
				this.unlink();
			},
			init: (_, stop) => {
				// when activity is unlinked, stop listening for navigation
				this.listen({ unlinked: () => stop() });
			},
		});
	}

	code: string;

	protected createView() {
		this.renderOptions = {
			place: {
				mode: app.renderer?.viewport.col3 ? "modal" : "screen",
				shade: true,
			},
		};
		return screen.create();
	}

	onCloseModal() {
		this.unlink();
	}
}

// hot reload for vite:
if (import.meta.hot) {
	import.meta.hot.accept();
	app.hotReload(import.meta, SourceCodeActivity);
}
