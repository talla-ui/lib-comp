import { Activity, app, NavigationTarget, ui, ViewEvent } from "talla-ui";
import screen from "./screen";
import { SourceCodeActivity } from "../SourceCode/SourceCodeActivity";

export class CategoryActivity extends Activity {
	constructor(SampleActivities: Array<new () => Activity>) {
		super();
		this.samples = SampleActivities.map((C) =>
			this.attach(new C(), { delegate: this })
		);
		this.renderOptions = {
			place: {
				mode: "screen",
				background: ui.color.BACKGROUND.alpha(0.75),
				transform: { show: ui.animation.FADE_IN_LEFT },
			},
		};
	}

	protected createView() {
		return screen.create();
	}

	samples: Activity[];
	active?: Activity = undefined;

	onViewCode(e: ViewEvent) {
		SourceCodeActivity.showForActivity(Activity.whence(e.source));
	}

	protected async navigateAsync(target: NavigationTarget) {
		app.navigate(target, {
			replace: app.renderer?.viewport.col3 || !!this.active,
		});
	}

	async handleNavigationDetailAsync(detail: string) {
		let sample = this.samples.filter((s) => s.title === detail)[0];
		if (this.active === sample) return;
		if (this.active) await this.active.deactivateAsync();
		if (sample) await sample.activateAsync();
		this.active = sample;
	}
}
