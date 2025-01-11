import {
	$list,
	$view,
	ConfigOptions,
	ManagedObject,
	StringConvertible,
	UICell,
	UIIconResource,
	UIListView,
	ViewComposite,
	ViewEvent,
	ui,
} from "talla-ui";
import { ScrollArea } from "./ScrollArea.js";
import { bindFormField } from "./util.js";

/**
 * Style configuration for a {@link ListBox} composite
 *
 * Objects of this type are passed to {@link ListBox} as the `styles` preset property.
 */
export class ListBoxStyles extends ConfigOptions {
	/** Default styles that are used when no other styles are specified */
	static default = new ListBoxStyles();

	/** The height of each row in the list box */
	rowHeight = 28;
	/** The inset of each row in the list box */
	rowInset = 12;
	/** The size of the icon in each row, if any */
	iconSize?: number;

	/** The style applied to each list cell */
	listCellStyle: UICell.StyleValue = ui.style.CELL.extend({
		css: { outlineOffset: "-2px" },
	});

	/** The style applied to the selected list cell */
	selectedListCellStyle: UICell.StyleValue = ui.style.CELL.extend({
		background: ui.color.PRIMARY_BG,
		textColor: ui.color.PRIMARY.text(),
		css: { outlineOffset: "-2px" },
	});

	/** The style applied to the outer container */
	containerStyle: UICell.StyleValue = ui.style.CELL.extend({
		background: ui.color.BACKGROUND,
		borderRadius: 4,
		borderColor: ui.color.TEXT.alpha(0.25),
		borderThickness: 1,
	});
}

/**
 * An object that describes an item in a {@link ListBox}
 *
 * Objects of this type are passed to {@link ListBox} as part of the `items` preset property.
 */
export interface ListBoxItem {
	/** The associated item value */
	value?: unknown;
	/** The item label */
	label: StringConvertible;
	/** The item icon, if any */
	icon?: UIIconResource;
}

/**
 * View composite for a list box
 *
 * A list box composite arranges a list of options within a scrollable cell, allowing the user to select one of the options.
 *
 * The currently selected list box option can also be set programmatically using its value.
 *
 * List box options are added using a list of objects, each containing a value, a label, and optionally an icon.
 *
 * > Note: A keyboard-friendly list box relies on visibility of focus outlines. By default, item focus outlines may be clipped by the surrounding (scrolling) list box, if they can't be controlled using CSS styles. Be sure to test keyboard focus, and set an explicit focus outline style at the start of your application.
 *
 * **Events**
 * - `Change` is emitted when the value has changed. The new value is included in the `value` property of the event data.
 * - `ItemSelected` is emitted from the item cell itself when selected. A `Change` event is still emitted afterwards.
 *
 * @see {@link ListBoxItem}+
 * @see {@link ListBoxStyles}+
 */
export class ListBox extends ViewComposite.define({
	/** The current value, one of the values from {@link items} */
	value: undefined as unknown,
	/** A list of available options, as an array of {@link ListBoxItem} objects */
	items: [] as Iterable<ListBoxItem>,
	/** The height of the list box */
	height: undefined as number | string | undefined,
	/** The width of the list box */
	width: undefined as number | string | undefined,
	/** True if an item should be selected when it receives focus */
	selectOnFocus: false,
	/** A form field ID, to add a two-way `FormContext` binding */
	formField: undefined as string | undefined,
	/** A set of styles that are applied to this composite, an instance of {@link ListBoxStyles} */
	styles: ListBoxStyles.default,
	/** UI component identifier */
	name: "ListBox",
	/** UI component accessible label */
	accessibleLabel: undefined as string | undefined,
}) {
	protected defineView() {
		return ui.use(
			ScrollArea,
			{
				height: $view.bind("height"),
				width: $view.bind("width"),
				cellStyle: this.styles.containerStyle,
				name: this.name,
			},
			ui.list(
				{ items: $view.list("items") },
				ui.cell(
					{
						accessibleRole: "option",
						allowFocus: true,
						style: this.styles.listCellStyle,
						onFocusIn: "+ItemFocused",
						onClick: "+ItemSelected",
						onEnterKeyPress: "+ItemSelected",
						onSpacebarPress: "+ItemSelected",
						onArrowDownKeyPress: "FocusNext",
						onArrowUpKeyPress: "FocusPrevious",
					},
					ui.row(
						{
							height: this.styles.rowHeight,
							padding: this.styles.rowInset,
						},
						ui.label({
							text: $list.string("item.label"),
							icon: $list.bind("item.icon"),
							iconSize: this.styles.iconSize,
						})
					)
				),
				ui.cell({
					style: { grow: 0 },
					accessibleRole: "listbox",
					accessibleLabel: this.accessibleLabel,
					allowKeyboardFocus: true,
					onRendered: "+ListRendered",
				})
			)
		);
	}

	protected beforeRender() {
		ManagedObject.observe(this, ["value"], (_, _p, value) => {
			this.selectItem(value);
		});
		bindFormField(this);
	}

	requestFocus() {
		this.findViewContent(UIListView)[0]?.requestFocus();
		return this;
	}

	/** Select the list box item with the specified value, if any */
	selectItem(value: unknown) {
		if (this._selectedValue === value) return;
		this._deselect();
		if (value === undefined) return;
		let content = this.findViewContent(UIListView)[0]?.getContent();
		if (!content) return;
		for (let it of content) {
			if (
				it instanceof UIListView.ItemControllerView &&
				it.item.value === value
			) {
				this._selectByController(it);
				break;
			}
		}
	}

	protected async onListRendered() {
		if (!this.value) return;
		await Promise.resolve();
		this.selectItem(this.value);
		return true;
	}

	protected onItemFocused(e: ViewEvent) {
		if (this.selectOnFocus) {
			this._deselect();
			this._selectByController(e.findDelegate(UIListView.ItemControllerView));
		}
		return true;
	}

	protected onItemSelected(e: ViewEvent) {
		this.requestFocus();
		let controller = e.findDelegate(UIListView.ItemControllerView);
		if (controller) {
			if (this._selectedValue === controller.item.value) return;
			this._deselect();
			this._selectByController(controller);
		}
	}

	private _selectByController(
		controller?: UIListView.ItemControllerView<ListBoxItem>
	) {
		if (controller?.body instanceof UICell) {
			let { value, label } = controller.item;
			controller.body.style = this.styles.selectedListCellStyle;
			this._selectedCell = controller.body;
			this._selectedValue = value;
			this.value = value;
			this.emit("Change", { value: value, label });
		}
		return true;
	}

	private _deselect() {
		if (this._selectedCell) {
			this._selectedCell.style = this.styles.listCellStyle;
		}
	}

	private _selectedCell?: UICell;
	private _selectedValue?: unknown;
}
