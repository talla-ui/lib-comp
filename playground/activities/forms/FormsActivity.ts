import {
	$activity,
	Activity,
	ActivityList,
	app,
	NavigationTarget,
	ui,
	ViewEvent,
} from "talla-ui";
import CategoryScreen from "~/components/CategoryScreen";
import { FormEntrySample } from "./FormEntry/FormEntrySample";
import { FormSectionSample } from "./FormSection/FormSectionSample";
import { PropertyEditorSample } from "./PropertyEditor/PropertyEditorSample";
import { SourceCodeActivity } from "../source/SourceCodeActivity";

export class FormsActivity extends Activity {
	static readonly instance = new FormsActivity();

	constructor() {
		super();
		this.title = "Forms";
		this.navigationPageId = "forms";
		this.setRenderMode("screen", {
			background: ui.color.BACKGROUND.alpha(0.75),
			transform: { show: ui.animation.FADE_IN_LEFT },
		});
		this.samples = this.attach(
			new ActivityList().add(
				new FormEntrySample(),
				new FormSectionSample(),
				new PropertyEditorSample()
			),
			{ delegate: this }
		);
	}

	samples: ActivityList;
	color = ui.color("#41b").alpha(0.8);

	protected createView() {
		return new CategoryScreen({
			title: this.title,
			samples: this.samples,
			current: $activity("samples.activated.view"),
		});
	}

	protected async navigateAsync(target: NavigationTarget) {
		let isLargeViewport = app.renderer?.viewport.col3;
		let hasView = !!this.samples.activated?.view;
		app.navigate(target, { replace: isLargeViewport || hasView });
	}

	async handleNavigationDetailAsync(detail: string) {
		for (let s of this.samples) {
			if (s.title === detail) await s.activateAsync();
			else if (s.isActive()) await s.deactivateAsync();
		}
	}

	onViewCode(e: ViewEvent) {
		SourceCodeActivity.showForActivity(Activity.whence(e.source));
	}
}
