import {
	PropertyEditor,
	PropertyEditorItem,
	TableRow,
} from "@talla-ui/lib-comp";
import {
	Activity,
	app,
	FormContext,
	NavigationTarget,
	ObservedList,
	ObservedObject,
	ui,
	UIToggle,
	View,
	ViewEvent,
} from "talla-ui";
import { userCircleIcon } from "~/icons";
import COUNTRIES from "~/mock/COUNTRIES";
import sectionsView from "./sections.view";
import { SourceCodeActivity } from "../source/source";

// Helper function to create an observed object with a selected property
function o(obj: {}) {
	return Object.assign(new ObservedObject(), obj, { selected: false });
}

// Helper function to create an observed object for a property editor item
function p(obj: PropertyEditorItem) {
	return Object.assign(new ObservedObject(), obj);
}

export class SectionsActivity extends Activity {
	title = "Sections — Playground";
	navigationPageId = "sections";

	tabId = "properties";

	countries = COUNTRIES;

	selectable = COUNTRIES.map((a) => o(a));

	numSelected = 0;
	allSelected = false;

	serializedProperties = "";

	// NOTE: this could be an array with plain objects, but using a observed list
	// with observed objects means that change events cause updates in the second
	// (read only) property editor in the view
	properties: ObservedList<ObservedObject & PropertyEditorItem> =
		new ObservedList(
			p({
				name: "Name",
				id: "name",
				value: "John Doe",
				icon: userCircleIcon,
			}),
			p({
				name: "Age",
				id: "age",
				value: 42,
				integer: true,
				positive: true,
			}),
			p({
				name: "Status",
				id: "status",
				options: [
					{ label: "Employed", value: 1 },
					{ label: "Unemployed", value: 2 },
					{ label: "Retired", value: 3 },
				],
				value: 0,
			}),
			p({
				name: "Subscribed?",
				id: "sub",
				value: false,
			}),
			p({
				name: "Custom",
				id: "custom",
				action: "CustomAction",
				actionLabel: "Click to count",
				icon: ui.icon.PLUS,
				value: { count: 0 },
			})
		);

	formContext = new FormContext({
		name: { isString: { required: true, err: "Name is required" } },
		email: {
			isString: {
				required: true,
				match: /^\S+@\S+\.\S+$/,
				err: "Must be a valid email address",
			},
		},
		type: {
			isValue: { match: ["friend", "enemy"], err: "Type is required" },
		},
	});

	createView() {
		return sectionsView.create();
	}

	protected navigateAsync(target: NavigationTarget) {
		return app.navigation.navigateAsync(target, {
			replace: app.renderer?.viewport.col2
				? target.pageId === "sections"
				: true,
		});
	}

	onViewSource(e: ViewEvent) {
		let source: any;
		switch (e.data.id) {
			case "nav-tabs":
				source = import("./samples/nav-tabs.tsx?raw");
				break;
			case "nav-sidebar":
				source = import("./samples/nav-sidebar.tsx?raw");
				break;
			case "nav-list":
				source = import("./samples/nav-list.tsx?raw");
				break;
			case "cards":
				source = import("./samples/cards.tsx?raw");
				break;
			case "grid":
				source = import("./samples/grid.tsx?raw");
				break;
			case "empty-state":
				source = import("./samples/empty-state.tsx?raw");
				break;
			case "loading-state":
				source = import("./samples/loading-state.tsx?raw");
				break;
			case "tables":
				source = import("./samples/tables.tsx?raw");
				break;
			case "labeled-views":
				source = import("./samples/labeled-views.tsx?raw");
				break;
			case "property-editor":
				source = import("./samples/property-editor.tsx?raw");
				break;
			case "form-entry":
				source = import("./samples/form-entry.tsx?raw");
				break;
			case "form-sections":
				source = import("./samples/form-sections.tsx?raw");
				break;
		}
		if (!source) return;
		SourceCodeActivity.viewSource(source);
	}

	onLoadView() {
		// used by loading state sample: toggle attached view
		if (this.loadedView) {
			this.loadedView.unlink();
			this.loadedView = undefined;
		} else {
			this.loadedView = this.attach(
				ui
					.cell(
						{ style: ui.style.CELL_BG },
						ui.label("Loaded", { align: "center" })
					)
					.create()
			);
		}
	}

	loadedView?: View;

	onSetTabId(e: ViewEvent) {
		if (typeof e.data.value === "string") {
			this.tabId = e.data.value;
		}
	}

	// Event handler used for form entry sample
	onValidateForm() {
		this.formContext.validate();
	}

	// Event handlers used for selectable table list sample
	onCountryToggleAll(e: ViewEvent<UIToggle>) {
		for (let it of this.selectable) {
			it.selected = e.source.state;
		}
		this.numSelected = e.source.state ? this.selectable.length : 0;
		this.allSelected = !this.selectable.some((a) => !a.selected);
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
		this.allSelected = !this.selectable.some((a) => !a.selected);
	}

	onCustomAction(e: ViewEvent) {
		let count = ++(e.data.value as any).count;
		(e.data.item as PropertyEditorItem).actionLabel = "Count: " + count;
		(e.data.item as ObservedObject).emitChange();
	}

	onPropertiesChanged() {
		this.serializedProperties = JSON.stringify(
			this.findViewContent(PropertyEditor)[0]?.serialize(),
			null,
			2
		);
	}
}

// hot reload for vite
if (import.meta.hot) {
	import.meta.hot.accept();
	app.hotReload(import.meta, SectionsActivity);
}
