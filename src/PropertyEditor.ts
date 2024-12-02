import {
	$list,
	$view,
	bind,
	ConfigOptions,
	ManagedObject,
	StringConvertible,
	ui,
	UIStyle,
	UIToggle,
	View,
	ViewComposite,
	ViewEvent,
} from "talla-ui";
import { EditInPlace, EditInPlaceStyles } from "./EditInPlace.js";
import { SelectField, SelectFieldStyles } from "./SelectField.js";
import { TableList, TableListStyles, TableRow } from "./TableList.js";

/**
 * Describes a property item to be edited using a {@link PropertyEditor}
 */
export type PropertyEditorItem = {
	/** Property identifier (optional) */
	id?: string;
	/** Display name of the property */
	name: StringConvertible;
	/** Current value of the property */
	value?: unknown;
	/** List of options, for select fields */
	options?: Array<{ label: StringConvertible; value: unknown }>;
	/** Custom action event name */
	action?: string;
	/** Label to be displayed along with the action (if blank, uses value) */
	actionLabel?: StringConvertible;
	/** True if the property may not be edited by the user */
	readOnly?: boolean;
	/** True if the property value must be a number */
	number?: boolean;
	/** True if the property value must be an integer */
	integer?: boolean;
	/** True if the property value must be a positive number */
	positive?: boolean;
};

/**
 * Style configuration for a {@link PropertyEditor} composite
 *
 * Objects of this type are passed to {@link PropertyEditor} as the `styles` preset property.
 */
export class PropertyEditorStyles extends ConfigOptions {
	/** Default styles that are used when no other styles are specified */
	static default = new PropertyEditorStyles();

	/** Styles for edit-in-place (text or number) fields, of type {@link EditInPlaceStyles} */
	editStyles = new EditInPlaceStyles();

	/** The type of toggle used for boolean fields, defaults to checkbox */
	toggleType: UIToggle["type"] = "checkbox";

	/** Style for select field buttons, defaults to borderless design to match text input fields */
	selectFieldButtonStyle: ui.ButtonStyle = ui.style.BUTTON_PLAIN.extend(
		{
			width: "100%",
			minWidth: 0,
			height: "100%",
			padding: { x: 8, y: 4 },
			fontWeight: "normal",
			textAlign: "start",
			lineBreakMode: "normal",
			borderRadius: 0,
			borderThickness: 2,
			background: ui.color.BACKGROUND,
			borderColor: ui.color.CLEAR,
		},
		{
			[UIStyle.STATE_HOVERED]: true,
			[UIStyle.STATE_DISABLED]: false,
			[UIStyle.STATE_FOCUSED]: false,
			background: ui.color.BACKGROUND,
			borderColor: ui.color.CLEAR,
		},
		{
			[UIStyle.STATE_HOVERED]: true,
			[UIStyle.STATE_FOCUSED]: true,
			borderColor: ui.color.PRIMARY,
		},
		{
			[UIStyle.STATE_FOCUSED]: true,
			borderColor: ui.color.PRIMARY,
		}
	);

	/** Style for action cells (containing a label and button), including focus state */
	actionCellStyle: ui.CellStyle = ui.style.CELL.extend(
		{
			padding: { start: 8 },
			borderThickness: 2,
			borderColor: ui.color.CLEAR,
			grow: 1,
			shrink: 1,
			css: { cursor: "pointer" },
		},
		{
			[UIStyle.STATE_FOCUSED]: true,
			borderColor: ui.color.PRIMARY,
			borderThickness: 2,
		}
	);

	/** Style for the containing table list, defaults to solid background with subtle horizontal separators */
	tableListStyles = TableListStyles.init({
		rowSeparator: { lineThickness: 1, lineColor: ui.color.SEPARATOR },
		containerStyle: { background: ui.color.BACKGROUND },
	});
}

/**
 * View composite for a property editor
 *
 * A property editor composite displays a two-column table with property labels and input fields, allowing the user to inspect and edit several values using a keyboard-friendly grid.
 *
 * Property values may include text, numbers, booleans, and other values that may be selected from a list of options. Alternatively, a custom action event may be specified that is emitted when the user clicks a button next to a label that shows the current value.
 *
 * Properties are added to the editor composite using a list of objects, which include the property ID, name, value, and input or action options.
 *
 * > Note: If properties are added using a managed list (with property items that are described by `ManagedObject` instances), changes can be handled using an event listener on the list itself. When a field value is updated by the user, the property editor emits a change event. Otherwise, changes will have to be handled by listening for the `Change` event from the property editor view.
 *
 * **Events**
 * - `Change` is emitted when a property value has changed. The updated {@link PropertyEditorItem} and its new value are included in the event data as `item` and `value`, respectively.
 * - Custom action events are emitted with the {@link PropertyEditorItem} and current value included in the event data as `item` and `value`.
 * - Managed object change events are emitted on property items where possible (see above).
 *
 * @see {@link PropertyEditorStyles}+
 * @see {@link PropertyEditorItem}+
 */
export class PropertyEditor extends ViewComposite.define({
	/** The list of properties to display and edit, as an array or managed list of {@link PropertyEditorItem} objects */
	items: [] as Iterable<PropertyEditorItem>,
	/** The widths of the property name and value columns */
	widths: [] as (number | string | undefined)[],
	/** True if all properties should be read-only */
	readOnly: false,
	/** A set of styles that are applied to this composite, an instance of {@link PropertyEditorStyles} */
	styles: PropertyEditorStyles.default,
	/** UI component identifier */
	name: "PropertyEditor",
}) {
	protected defineView() {
		return ui.use(
			TableList,
			{
				items: bind("items"),
				styles: this.styles.tableListStyles,
				name: this.name,
			},
			ui.use(PropertyEditorRow, {
				widths: this.widths,
				item: $list.bind("item"),
				readOnly: this.readOnly,
				styles: this.styles,
			})
		);
	}

	/** Returns a plain object with all property values as described by {@link items} */
	serialize(): Record<string, unknown> {
		let result: any = {};
		for (let item of this.items) {
			result[String(item.id || item.name)] = item.value;
		}
		return result;
	}
}

/**
 * View composite for a property editor row
 *
 * This class is used internally by {@link PropertyEditor} to render individual property rows.
 */
class PropertyEditorRow extends ViewComposite.define({
	/** The property item to display and edit */
	item: undefined as PropertyEditorItem | undefined,
	/** The widths of the property name and value columns */
	widths: [] as (number | string | undefined)[],
	/** True if the property should be read-only */
	readOnly: false,
	/** A set of styles that are applied to this composite, an instance of {@link PropertyEditorStyles} */
	styles: PropertyEditorStyles.default,
}) {
	protected defineView() {
		return ui.use(
			TableRow,
			{
				widths: this.widths,
				style: ui.style.CELL,
			},
			ui.cell(
				{
					onClick: "FocusValue",
					onPress: "FocusValue",
					style: bind("focused").select(
						{
							shrink: 1,
							background: ui.color.PRIMARY_BG,
							textColor: ui.color.PRIMARY_BG.text(),
							padding: { x: 8 },
						},
						{
							shrink: 1,
							background: ui.color.BACKGROUND,
							padding: { x: 8 },
						}
					),
				},
				ui.row(ui.label(bind("item.name"), { bold: true }))
			),
			ui.renderView({ view: bind("editor") })
		);
	}

	/** True if the input element is currently focused */
	focused = false;

	/** The input editor view, rendered within the row view */
	editor?: View = undefined;

	protected beforeRender() {
		if (!this.item) return;
		let editor = this._createEditor();
		if (editor) {
			this.editor = this.attach(editor, { delegate: this });
		}
	}

	protected onChange(e: ViewEvent) {
		if (this.item) {
			this.item.value = e.data.state ?? e.data.value;
			if (this.item instanceof ManagedObject) this.item.emitChange();
			this.emit("Change", { item: this.item, value: this.item.value });
		}
		return true;
	}

	requestFocus() {
		this.editor?.requestFocus();
		return this;
	}

	protected onFocusValue() {
		this.requestFocus();
		return true;
	}

	protected onFocusIn() {
		this.focused = true;
	}

	protected onFocusOut() {
		this.focused = false;
	}

	protected onArrowDownKeyPress() {
		let table = (PropertyEditor as any).whence(this) as PropertyEditor;
		let rows = table.findViewContent(PropertyEditorRow);
		let idx = rows.indexOf(this);
		let nextRow = rows[idx + 1];
		nextRow?.requestFocus();
	}

	protected onArrowUpKeyPress() {
		let table = (PropertyEditor as any).whence(this) as PropertyEditor;
		let rows = table.findViewContent(PropertyEditorRow);
		let idx = rows.indexOf(this);
		let nextRow = rows[idx - 1];
		nextRow?.requestFocus();
	}

	protected onAction(e: ViewEvent) {
		let item = this.item;
		let eventName = item?.action;
		if (!item || !eventName || this.readOnly || item.readOnly) return;
		this.emit(eventName, { item, value: item.value });
		return true;
	}

	private _createEditor() {
		let item = this.item;
		if (!item) return;
		let readOnly = this.readOnly || !!item.readOnly;

		if (item.action) {
			let EditorView = ui.cell(
				{
					allowKeyboardFocus: true,
					style: this.styles.actionCellStyle,
					layout: { axis: "horizontal" },
					onClick: "Action",
					onEnterKeyPress: "Action",
					onSpacebarPress: "Action",
				},
				ui.label({
					text: $view.string("item.actionLabel").or("item.value"),
					dim: readOnly,
					width: "100%",
				}),
				ui.button({
					disableKeyboardFocus: true,
					icon: ui.icon.MORE,
					style: ui.style.BUTTON_ICON,
					position: { end: 2 },
				})
			);
			return new EditorView();
		}

		if (typeof item.value === "boolean") {
			let editor = new UIToggle(undefined, !!this.item?.value);
			editor.applyViewPreset({
				state: $view.boolean("item.value"),
				position: { left: 8 },
				disabled: readOnly,
				type: this.styles.toggleType,
			});
			return editor;
		}

		if (item.options) {
			return new SelectField({
				label:
					item.options.find((a) => a.value === this.item!.value)?.label || "",
				options: $view.bind("item.options"),
				value: $view.bind("item.value"),
				readOnly: readOnly,
				styles: SelectFieldStyles.init({
					buttonStyle: this.styles.selectFieldButtonStyle,
				}),
			});
		}

		return new EditInPlace({
			readOnly: readOnly,
			isNumber: typeof item.value === "number" || item.number,
			isPositive: item.positive,
			isInteger: item.integer,
			value: $view.string("item.value"),
			styles: this.styles.editStyles,
		});
	}
}
