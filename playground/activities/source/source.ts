import { showToastNotification } from "@talla-ui/lib-comp";
import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/typescript";
import xml from "highlight.js/lib/languages/xml";
import { Activity, app, ui } from "talla-ui";
import sourceView from "./source.view";

// Enable TS + JSX syntax highlighting:
hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("xml", xml);

export class SourceCodeActivity extends Activity {
	static viewSource(code: string | Promise<{ default: string }>) {
		(async () => {
			// TODO: use scheduler to be able to catch errors
			code = typeof code === "string" ? code : (await code).default;
			app.addActivity(new SourceCodeActivity(code), true);
		})();
	}

	constructor(source: string) {
		super();
		this.title = "Source code";
		this.source = source;
		this.code = hljs.highlight(source.replace(/\t/g, "  "), {
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

	source: string;
	code: string;

	protected createView() {
		let isWide = app.renderer?.viewport.col3;
		this.setRenderMode(isWide ? "modal" : "screen", {
			shade: true,
			transform: isWide
				? { show: ui.animation.FADE_IN_LEFT }
				: { show: ui.animation.FADE_IN_UP },
		});
		return sourceView.create();
	}

	onCopy() {
		// copy to clipboard using navigator.clipboard
		navigator.clipboard.writeText(this.source);
		showToastNotification("Copied to clipboard", {
			background: ui.color.SUCCESS_BG,
		});
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
