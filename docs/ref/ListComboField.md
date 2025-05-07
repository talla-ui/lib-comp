[UI components](../index.md)

# class ListComboField

> Component for a combo field that reveals a list box on input.

<pre class="docgen_signature"><b>class</b> ListComboField <b>extends</b> <a href="ListComboField_base.md">ListComboField_base</a>;</pre>

## Description

A combo field component consists of a text field, an optional disclosure button, and an overlay cell that appears when the user interacts with the combo field. The `ListComboField` class populates the cell with a [ListBox](ListBox.md) component, presenting a filtered set of options.

To use the list combo field, ensure that the `Filter` event is handled to update the `items` list.

**Events**
- `Change` is emitted when the value has changed. The new value is included in the `value` property of the event data.
- `Filter` is emitted when the list of items needs to be filtered.
- The text field emits events such as `Input`, `EnterKeyPress` and `EscapeKeyPress`.

## Inherited members

- [<!--{ref:property}-->value](ListComboField_base_value.md) \
    The current value of the combo field.
- [<!--{ref:property}-->items](ListComboField_base_items.md) \
    A list of available options, as an array of [ListBoxItem](ListBoxItem.md) objects; must be filtered on `Filter` event.
- [<!--{ref:property}-->formField](ListComboField_base_formField.md) \
    A form field ID, to add a two-way `FormContext` binding.
- [<!--{ref:property}-->placeholder](ListComboField_base_placeholder.md) \
    The placeholder text for the text field.
- [<!--{ref:property}-->icon](ListComboField_base_icon.md) \
    The icon to show in the combo field.
- [<!--{ref:property}-->width](ListComboField_base_width.md) \
    The width of the combo field.
- [<!--{ref:property}-->grow](ListComboField_base_grow.md) \
    True if the combo field should grow to fill the available space, defaults to false.
- [<!--{ref:property}-->styles](ListComboField_base_styles.md) \
    A set of styles that are applied to this component, an instance of [ListComboFieldStyles](ListComboFieldStyles.md).
- [<!--{ref:property}-->name](ListComboField_base_name.md) \
    UI component identifier.
- [<!--{ref:property}-->accessibleLabel](ListComboField_base_accessibleLabel.md) \
    UI component accessible label.