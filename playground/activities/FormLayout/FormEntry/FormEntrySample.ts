import {
	FormEntry,
	SelectField,
	showToastNotification,
} from "@talla-ui/lib-comp";
import { Activity, app, ui, UIColumn, FormContext, ViewEvent } from "talla-ui";
import view from "./view";
import code from "./view?raw";

export class FormEntrySample extends Activity {
	constructor() {
		super();
		this.title = "FormEntry";
		this.setRenderMode("none");
		this.formContext = new FormContext({
			fullName: {
				isString: { required: true, err: "This field is required" },
			},
			age: {
				isNumber: {
					integer: true,
					positive: true,
					err: "Must be a valid number",
				},
			},
		});
	}

	sourceCode = code;

	protected createView() {
		return view.create();
	}

	onFormSubmit() {
		let result = this.formContext!.validate();
		if (result) {
			showToastNotification({
				message: "Data submitted",
				icon: ui.icon.CHECK,
			});
		} else {
			showToastNotification({
				message: "Please correct your inputs",
				icon: ui.icon("!"),
			});
		}
	}

	onSelectCategory(e: ViewEvent) {
		let parent = UIColumn.whence(e.source);
		let selectField = parent?.findViewContent(SelectField)[0];
		let hasValue = !!selectField?.value;
		let formEntry = parent?.findViewContent(FormEntry)[0];
		if (formEntry) {
			formEntry.errorText = hasValue ? "" : "Please select a category";
		}
	}
}

// hot reload for vite:
if (import.meta.hot) {
	import.meta.hot.accept();
	app.hotReload(import.meta, FormEntrySample);
}
