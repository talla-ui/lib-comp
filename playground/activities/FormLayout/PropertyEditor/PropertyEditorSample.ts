import { Activity, app, ManagedList, ManagedObject, ViewEvent } from "talla-ui";
import view from "./view";
import code from "./view?raw";
import { PropertyEditor, PropertyEditorItem } from "@talla-ui/lib-comp";

function o(obj: PropertyEditorItem) {
	return Object.assign(new ManagedObject(), obj);
}

export class PropertyEditorSample extends Activity {
	constructor() {
		super();
		this.title = "PropertyEditor";
		this.renderOptions = {};
	}

	sourceCode = code;

	serialized = "";

	// NOTE: this could be an array with plain objects, but using a managed list
	// with managed objects means that change events cause updates in the second
	// (read only) property editor in the view
	properties: ManagedList<ManagedObject & PropertyEditorItem> = new ManagedList(
		o({
			name: "Name",
			id: "name",
			value: "",
		}),
		o({
			name: "Age",
			id: "age",
			value: 42,
			integer: true,
			positive: true,
		}),
		o({
			name: "Status",
			id: "status",
			options: [
				{ label: "Employed", value: 1 },
				{ label: "Unemployed", value: 2 },
				{ label: "Retired", value: 3 },
			],
			value: 0,
		}),
		o({
			name: "Subscribed?",
			id: "sub",
			value: false,
		}),
		o({
			name: "Custom",
			id: "custom",
			action: "CustomAction",
			actionLabel: "Click to count",
			value: { count: 0 },
		})
	);

	protected createView() {
		return view.create();
	}

	onPropertiesChanged() {
		if (this.serialized) this.onSerialize();
	}

	onCustomAction(e: ViewEvent) {
		let count = ++(e.data.value as any).count;
		(e.data.item as PropertyEditorItem).actionLabel = "Count: " + count;
		(e.data.item as ManagedObject).emitChange();
	}

	onSerialize() {
		this.serialized = JSON.stringify(
			this.findViewContent(PropertyEditor)[0]?.serialize(),
			undefined,
			"  "
		);
	}
}

// hot reload for vite:
if (import.meta.hot) {
	import.meta.hot.accept();
	app.hotReload(import.meta, PropertyEditorSample);
}