import {
	$view,
	StringConvertible,
	ui,
	UIComponent,
	UIIconResource,
	UIStyle,
} from "talla-ui";
import { ComboField, ComboFieldStyles } from "./ComboField.js";
import { ListBox, ListBoxItem, ListBoxStyles } from "./ListBox.js";

/**
 * Style configuration for a {@link ListComboField} composite
 *
 * Objects of this type are passed to {@link ListComboField} as the `styles` preset property.
 */
export class ListComboFieldStyles extends ComboFieldStyles {
	/** Default styles that are used when no other styles are specified */
	static default = new ListComboFieldStyles();

	/** The height of the list cell, defaults to 200 */
	listHeight = 200;

	/** Styles passed to the list box, defaults to appropriate combo box styles */
	comboListBoxStyles = ListBoxStyles.init({
		containerStyle: ui.style.CELL.extend({
			borderRadius: 4,
			padding: { y: 4 },
		}),
		selectedListCellStyle: ui.style(
			ListBoxStyles.default.selectedListCellStyle,
			{ cursor: "pointer" }
		),
		listCellStyle: ui.style.CELL.extend({
			[UIStyle.STATE_HOVERED]: true,
			background: ui.color.PRIMARY_BG,
			textColor: ui.color.PRIMARY_BG.text(),
			cursor: "pointer",
		}),
	});
}

/**
 * View composite for a combo field that reveals a list box on input
 *
 * A combo field composite consists of a text field, an optional disclosure button, and an overlay cell that appears when the user interacts with the combo field. The `ListComboField` class populates the cell with a {@link ListBox} composite, presenting a filtered set of options.
 *
 * To use the list combo field, ensure that the `Filter` event is handled to update the `items` list.
 *
 * **Events**
 * - `Change` is emitted when the value has changed. The new value is included in the `value` property of the event data.
 * - `Filter` is emitted when the list of items needs to be filtered.
 * - The text field emits events such as `Input`, `EnterKeyPress` and `EscapeKeyPress`.
 */
export class ListComboField extends UIComponent.define({
	/** The current value of the combo field */
	value: StringConvertible.EMPTY,
	/** A list of available options, as an array of {@link ListBoxItem} objects; must be filtered on `Filter` event */
	items: [] as Iterable<ListBoxItem>,
	/** A form field ID, to add a two-way `FormContext` binding */
	formField: undefined as string | undefined,
	/** The placeholder text for the text field */
	placeholder: StringConvertible.EMPTY,
	/** The icon to show in the combo field */
	icon: undefined as UIIconResource | undefined,
	/** The width of the combo field */
	width: undefined as number | undefined,
	/** True if the combo field should grow to fill the available space, defaults to false */
	grow: false,
	/** A set of styles that are applied to this composite, an instance of {@link ListComboFieldStyles} */
	styles: ListComboFieldStyles.default,
	/** UI component identifier */
	name: "ListComboField",
	/** UI component accessible label */
	accessibleLabel: undefined as string | undefined,
}) {
	protected defineView() {
		return ComboField.getViewBuilder(
			{
				formField: this.formField,
				value: $view("value"),
				placeholder: $view("placeholder"),
				icon: $view("icon"),
				width: $view("width"),
				grow: $view("grow"),
				styles: this.styles,
				name: this.name,
				accessibleLabel: this.accessibleLabel,
				openOnFocus: true,
				showClearButton: true,
				onInput: "Filter",
				onOpenOverlay: "Filter",
			},
			ListBox.getViewBuilder({
				items: $view("items"),
				selectOnFocus: true,
				onChange: "SetComboValue",
				onBackspaceKeyPress: "+CloseOverlay",
				onEnterKeyPress: "+CloseOverlay",
				onItemSelected: "+CloseOverlay",
				height: this.styles.listHeight,
				styles: this.styles.comboListBoxStyles,
			})
		);
	}
}
