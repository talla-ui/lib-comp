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
import { SourceCodeActivity } from "../source/SourceCodeActivity";
import { ColumnCardSample } from "./ColumnCard/ColumnCardSample";
import { HeaderPaneSample } from "./HeaderPane/HeaderPaneSample";
import { LabeledViewSample } from "./LabeledView/LabeledViewSample";
import { NavContainerSample } from "./NavContainer/NavContainerSample";
import { ScrollAreaSample } from "./ScrollArea/ScrollAreaSample";
import { ScrollPaneSample } from "./ScrollPane/ScrollPaneSample";
import { ScrollRowSample } from "./ScrollRow/ScrollRowSample";
import { SidebarSplitViewSample } from "./SidebarSplitView/SidebarSplitViewSample";
import { TableListSample } from "./TableList/TableListSample";

export class LayoutsActivity extends Activity {
	static readonly instance = new LayoutsActivity();

	constructor() {
		super();
		this.title = "Layouts";
		this.navigationPageId = "layouts";
		this.setRenderMode("screen", {
			background: ui.color.BACKGROUND.alpha(0.75),
			transform: { show: ui.animation.FADE_IN_LEFT },
		});
		this.samples = this.attach(
			new ActivityList().add(
				new ColumnCardSample(),
				new LabeledViewSample(),
				new TableListSample(),
				new ScrollAreaSample(),
				new ScrollRowSample(),
				new ScrollPaneSample(),
				new HeaderPaneSample(),
				new NavContainerSample(),
				new SidebarSplitViewSample()
			),
			{ delegate: this }
		);
	}

	samples: ActivityList;
	color = ui.color("#b6a").alpha(0.8);

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
