import {
	Activity,
	app,
	ObservedList,
	ObservedObject,
	ui,
	ViewEvent,
} from "talla-ui";
import view from "./view";
import code from "./view?raw";
import { PropertyEditor, PropertyEditorItem } from "@talla-ui/lib-comp";
import icons from "~/icons/icons";

function o(obj: PropertyEditorItem) {
	return Object.assign(new ObservedObject(), obj);
}

export class PropertyEditorSample extends Activity {
	constructor() {
		super();
		this.title = "PropertyEditor";
		this.setRenderMode("none");
	}

	sourceCode = code;

	serialized = "";

	// NOTE: this could be an array with plain objects, but using a observed list
	// with observed objects means that change events cause updates in the second
	// (read only) property editor in the view
	properties: ObservedList<ObservedObject & PropertyEditorItem> =
		new ObservedList(
			o({
				name: "Name",
				id: "name",
				value: "John Doe",
				icon: icons.person,
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
				icon: ui.icon.PLUS,
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
		(e.data.item as ObservedObject).emitChange();
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
