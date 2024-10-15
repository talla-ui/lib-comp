import { Activity, app, ui } from "talla-ui";
import screen from "./screen";
import { InputFieldsActivity } from "../InputFields/InputFieldsActivity";
import { ViewPatternsActivity } from "../ViewPatterns/ViewPatternsActivity";
import { FormLayoutActivity } from "../FormLayout/FormLayoutActivity";
import { AppLayoutActivity } from "../AppLayout/AppLayoutActivity.";

const GITHUB_URL = "https://github.com/talla-ui";
const WEBSITE_URL = "https://talla-ui.dev";

export class HomeActivity extends Activity {
	constructor() {
		super();
		this.navigationPageId = "";
		this.title = "Playground";
		this.renderOptions.place = {
			mode: "screen",
			background: ui.color.BACKGROUND.alpha(0.75),
		};
		let mode = app.localData.read("settings", {
			colorScheme: { value: { match: ["light", "dark"] as const } },
		})[0]?.colorScheme;
		if (mode) this.setMode(mode);
		else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
			this.setMode("light");
		}
	}

	categories = [
		InputFieldsActivity.instance,
		FormLayoutActivity.instance,
		AppLayoutActivity.instance,
		ViewPatternsActivity.instance,
	];

	nActivation = 0;
	firstActivation = true;

	mode: "light" | "dark" = "dark";

	createView() {
		return screen.create();
	}

	protected async afterActiveAsync() {
		this.firstActivation = !this.nActivation++;
	}

	onLightMode() {
		this.setMode("light");
		app.localData.write("settings", { colorScheme: "light" });
	}

	onDarkMode() {
		this.setMode("dark");
		app.localData.write("settings", { colorScheme: "dark" });
	}

	setMode(mode: "light" | "dark") {
		let theme = app.theme!.clone();
		theme.colors.set("Background", ui.color(mode === "dark" ? "#111" : "#fff"));
		app.theme = theme;
		this.mode = mode;
	}

	onGoGitHub() {
		window.open(GITHUB_URL, "_blank");
	}

	onGoWebsite() {
		window.open(WEBSITE_URL, "_blank");
	}
}
