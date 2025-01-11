import {
	$activity,
	Activity,
	ActivityList,
	app,
	NavigationTarget,
	ui,
	ViewEvent,
} from "talla-ui";
import CategoryScreen from "~/views/CategoryScreen";
import { EmptyStateViewSample } from "./EmptyStateView/EmptyStateViewSample";
import { ModalInputDialogSample } from "./ModalInputDialog/ModalInputDialogSample";
import { ProgressDialogSample } from "./ProgressDialog/ProgressDialogSample";
import { ToastNotificationSample } from "./ToastNotification/ToastNotificationSample";
import { SourceCodeActivity } from "../SourceCode/SourceCodeActivity";

export class ViewPatternsActivity extends Activity {
	static readonly instance = new ViewPatternsActivity();

	constructor() {
		super();
		this.title = "View patterns";
		this.navigationPageId = "patterns";
		this.setRenderMode("screen", {
			background: ui.color.BACKGROUND.alpha(0.75),
			transform: { show: ui.animation.FADE_IN_LEFT },
		});
		this.samples = this.attach(
			new ActivityList().add(
				new EmptyStateViewSample(),
				new ProgressDialogSample(),
				new ModalInputDialogSample(),
				new ToastNotificationSample()
			),
			{ delegate: this }
		);
	}

	samples: ActivityList;
	color = ui.color("#c50").alpha(0.8);

	protected createView() {
		return new CategoryScreen({
			title: this.title,
			samples: this.samples,
			current: $activity.bind("samples.activated.view"),
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
