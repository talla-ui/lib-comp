import { ui } from "talla-ui";
import { CategoryActivity } from "../Category/CategoryActivity";
import { FormEntrySample } from "./FormEntry/FormEntrySample";
import { FormSectionSample } from "./FormSection/FormSectionSample";
import { PropertyEditorSample } from "./PropertyEditor/PropertyEditorSample";

export class FormLayoutActivity extends CategoryActivity {
	static readonly instance = new FormLayoutActivity();

	constructor() {
		super([FormEntrySample, FormSectionSample, PropertyEditorSample]);
		this.title = "Form layout";
		this.navigationPageId = "form-layout";
	}

	color = ui.color("#41b").alpha(0.8);
}
