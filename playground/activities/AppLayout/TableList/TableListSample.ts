import { Activity, app, ManagedObject, UIToggle, ViewEvent } from "talla-ui";
import view from "./view";
import code from "./view?raw";
import COUNTRIES from "~/data/COUNTRIES";
import { TableRow } from "@talla-ui/lib-comp";

function o(obj: {}) {
	return Object.assign(new ManagedObject(), obj, { selected: false });
}

export class TableListSample extends Activity {
	constructor() {
		super();
		this.title = "TableList";
		this.setRenderMode("none");
	}

	sourceCode = code;

	countries = COUNTRIES;

	selectable = COUNTRIES.map((a) => o(a));

	numSelected = 0;
	allSelected = false;

	protected createView() {
		return view.create();
	}

	onCountryToggleAll(e: ViewEvent<UIToggle>) {
		for (let it of this.selectable) {
			it.selected = e.source.state;
		}
		this.numSelected = e.source.state ? this.selectable.length : 0;
	}

	onCountryToggle(e: ViewEvent<UIToggle | TableRow>) {
		let state =
			e.source instanceof UIToggle
				? e.source.state
				: !e.source.findViewContent(UIToggle)[0]?.state;
		let item =
			e.source instanceof TableRow
				? e.source.item
				: (TableRow.whence(e.source)?.item as any);
		item.selected = state;
		this.numSelected = this.selectable.filter((a) => a.selected).length;
	}
}

// hot reload for vite:
if (import.meta.hot) {
	import.meta.hot.accept();
	app.hotReload(import.meta, TableListSample);
}
