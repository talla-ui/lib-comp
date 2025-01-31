[View composites](../index.md)

# class ComboField

> View composite for a combo field.

<pre class="docgen_signature"><b>class</b> ComboField <b>extends</b> <a href="ComboField_base.md">ComboField_base</a>;</pre>

## Description

A combo field composite consists of a text field, an optional disclosure button, and an overlay cell that appears when the user interacts with the combo field. The overlay is initially hidden, and disappears automatically when the text field is no longer focused.

The overlay content is preset on the combo field, and instantiated when needed. Events emitted by the overlay content are handled by the combo field, and may be used to set the combo field value, or close the overlay.

Typically, the overlay cell presents a list of options, which gets filtered as the user types in the text field. A list box composite works well for this, emitting a suitable change event that sets the combo field value in turn.

**Events**
- `Change` is emitted when the value has changed. The new value is included in the `value` property of the event data.
- `OpenOverlay` is emitted just before the overlay is revealed.
- The text field emits events such as `Input`, `EnterKeyPress` and `EscapeKeyPress`.

The combo field also **handles** the following events from the overlay cell.

- `CloseOverlay`, `EscapeKeyPress` and `TabKeyPress` to close the overlay.
- `Clear` to clear the current value and text field.
- `SetComboValue` to set the current value to the value of the `label`, `text`, or `value` property of the event data (in that order).

## Inherited members

- [<!--{ref:property}-->value](ComboField_base_value.md) \
    The current value of the combo field.
- [<!--{ref:property}-->formField](ComboField_base_formField.md) \
    A form field ID, to add a two-way `FormContext` binding.
- [<!--{ref:property}-->placeholder](ComboField_base_placeholder.md) \
    The placeholder text for the text field.
- [<!--{ref:property}-->icon](ComboField_base_icon.md) \
    The icon to show in the combo field.
- [<!--{ref:property}-->width](ComboField_base_width.md) \
    The width of the combo field.
- [<!--{ref:property}-->grow](ComboField_base_grow.md) \
    True if the combo field should grow to fill the available space, defaults to false.
- [<!--{ref:property}-->styles](ComboField_base_styles.md) \
    A set of styles that are applied to this composite, an instance of [ComboFieldStyles](ComboFieldStyles.md).
- [<!--{ref:property}-->openOnFocus](ComboField_base_openOnFocus.md) \
    True if the overlay should open when the text field gains focus.
- [<!--{ref:property}-->showClearButton](ComboField_base_showClearButton.md) \
    True if a clear button should be shown when the field has a value.
- [<!--{ref:property}-->name](ComboField_base_name.md) \
    UI component identifier.
- [<!--{ref:property}-->accessibleLabel](ComboField_base_accessibleLabel.md) \
    UI component accessible label.

## Related

- [<!--{ref:class}-->class ComboFieldStyles](ComboFieldStyles.md) \
    Style configuration for a [ComboField](ComboField.md) composite.