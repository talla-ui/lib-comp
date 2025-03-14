import { Activity, app, FormContext } from "talla-ui";
import view from "./view";
import code from "./view?raw";

export class EditInPlaceSample extends Activity {
	constructor() {
		super();
		this.title = "EditInPlace";
		this.setRenderMode("none");
		this.formContext = new FormContext(
			{
				quantity: { isNumber: { positive: true } },
				overhead: { isNumber: { positive: true } },
			},
			{ quantity: 0, overhead: 10 }
		);
		this.formContext!.listen(() => {
			let values = this.formContext!.validate();
			if (values) {
				this.total = values.quantity + values.overhead;
			}
		});
	}

	sourceCode = code;

	total = 10;

	protected createView() {
		return view.create();
	}
}

// hot reload for vite:
if (import.meta.hot) {
	import.meta.hot.accept();
	app.hotReload(import.meta, EditInPlaceSample);
}
