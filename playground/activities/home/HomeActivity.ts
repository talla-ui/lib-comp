import { Activity, app, ui } from "talla-ui";
import screen from "./screen";

const GITHUB_URL = "https://github.com/talla-ui";
const WEBSITE_URL = "https://talla-ui.dev";

type ColorScheme = "light" | "dark";

export class HomeActivity extends Activity {
	constructor() {
		super();
		this.navigationPageId = "";
		this.title = "Playground";
		this.setRenderMode("screen", {
			background: ui.color.BACKGROUND.alpha(0.75),
		});
		app.renderer?.schedule(async () => {
			let viewport = app.renderer!.viewport;
			let [settings] = await app.localData.readAsync("settings", {
				colorScheme: { isValue: { match: ["light", "dark"] as const } },
			});

			// Set initial color scheme from settings or from viewport
			if (settings?.colorScheme) this.overrideMode(settings.colorScheme);
			else this.setMode(viewport.prefersDark ? "dark" : "light");

			// Watch for changes in viewport and update color scheme if needed
			this.watch(viewport, () => {
				if (!this.modeOverride) {
					let mode: ColorScheme = viewport.prefersDark ? "dark" : "light";
					if (mode !== this.mode) this.setMode(mode);
				}
			});
		});
	}

	categories: Activity[] = [];

	nActivation = 0;
	firstActivation = true;

	mode: ColorScheme = "dark";
	modeOverride?: ColorScheme = undefined;

	protected async beforeActiveAsync() {
		this.categories = [...app.activities].filter((a) => a !== this);
	}

	createView() {
		return screen.create();
	}

	protected async afterActiveAsync() {
		this.firstActivation = !this.nActivation++;
	}

	async onLightMode() {
		await this.overrideMode("light");
	}

	async onDarkMode() {
		await this.overrideMode("dark");
	}

	async overrideMode(mode: ColorScheme) {
		this.modeOverride = mode;
		let preferedMode = app.renderer?.viewport.prefersDark ? "dark" : "light";
		await app.localData.writeAsync(
			"settings",
			preferedMode !== mode ? { colorScheme: mode } : {}
		);
		this.setMode(mode);
	}

	setMode(mode: ColorScheme) {
		this.mode = mode;
		let theme = app.theme!.clone();
		theme.colors.set("Background", ui.color(mode === "dark" ? "#111" : "#fff"));
		app.theme = theme;
	}

	onGoGitHub() {
		window.open(GITHUB_URL, "_blank");
	}

	onGoWebsite() {
		window.open(WEBSITE_URL, "_blank");
	}
}
