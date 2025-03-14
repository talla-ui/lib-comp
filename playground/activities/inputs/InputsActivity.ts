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
import { ButtonSwitchSample } from "./ButtonSwitch/ButtonSwitchSample";
import { CalendarSelectFieldSample } from "./CalendarSelectField/CalendarSelectFieldSample";
import { CalendarViewSample } from "./CalendarView/CalendarViewSample";
import { ComboFieldSample } from "./ComboField/ComboFieldSample";
import { DateInputFieldSample } from "./DateInputField/DateInputFieldSample";
import { EditInPlaceSample } from "./EditInPlace/EditInPlaceSample";
import { ListBoxSample } from "./ListBox/ListBoxSample";
import { SelectFieldSample } from "./SelectField/SelectFieldSample";
import { TimeInputFieldSample } from "./TimeInputField/TimeInputFieldSample";
import { SourceCodeActivity } from "../source/SourceCodeActivity";

export class InputsActivity extends Activity {
	static readonly instance = new InputsActivity();

	constructor() {
		super();
		this.title = "Inputs";
		this.navigationPageId = "inputs";
		this.setRenderMode("screen", {
			background: ui.color.BACKGROUND.alpha(0.75),
			transform: { show: ui.animation.FADE_IN_LEFT },
		});
		this.samples = this.attach(
			new ActivityList().add(
				new ButtonSwitchSample(),
				new SelectFieldSample(),
				new ComboFieldSample(),
				new ListBoxSample(),
				new EditInPlaceSample(),
				new CalendarViewSample(),
				new CalendarSelectFieldSample(),
				new DateInputFieldSample(),
				new TimeInputFieldSample()
			),
			{ delegate: this }
		);
	}

	samples: ActivityList;
	color = ui.color("#07f").alpha(0.8);

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
