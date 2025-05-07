[UI components](../index.md)

# class EditInPlace

> Component for an edit-in-place field.

<pre class="docgen_signature"><b>class</b> EditInPlace <b>extends</b> <a href="EditInPlace_base.md">EditInPlace_base</a>;</pre>

## Description

An edit-in-place component contains both a plain label and a text field, swapping between them as needed. The text field is displayed when the component receives input focus, and the label is displayed otherwise.

The label text is kept in sync with the text field value automatically. The value can also be set programmatically at any time.

**Events**
- `Change` is emitted when the value has changed. The new value is included in the `value` property of the event data.
- The text field emits events such as `Input`, `EnterKeyPress` and `EscapeKeyPress`.

## Instance members

- [<!--{ref:property}-->editing](EditInPlace_editing.md) \
    True if the field is currently in edit mode.

## Inherited members

- [<!--{ref:property}-->value](EditInPlace_base_value.md) \
    The current value of the edit-in-place field.
- [<!--{ref:property}-->placeholder](EditInPlace_base_placeholder.md) \
    Placeholder text that's displayed if the value is an empty string.
- [<!--{ref:property}-->icon](EditInPlace_base_icon.md) \
    An icon to be displayed in front of the field value.
- [<!--{ref:property}-->readOnly](EditInPlace_base_readOnly.md) \
    True if the user should not be able to change the value.
- [<!--{ref:property}-->isNumber](EditInPlace_base_isNumber.md) \
    True if the field should accept numeric input.
- [<!--{ref:property}-->isInteger](EditInPlace_base_isInteger.md) \
    True if the field should only accept integer values (only applies if [isNumber](EditInPlace_base_isNumber.md) is true).
- [<!--{ref:property}-->isPositive](EditInPlace_base_isPositive.md) \
    True if the field should only accept positive values (only applies if [isNumber](EditInPlace_base_isNumber.md) is true).
- [<!--{ref:property}-->width](EditInPlace_base_width.md) \
    The width of the edit-in-place field.
- [<!--{ref:property}-->height](EditInPlace_base_height.md) \
    The height of the edit-in-place field.
- [<!--{ref:property}-->formField](EditInPlace_base_formField.md) \
    A form field ID, to add a two-way `FormContext` binding.
- [<!--{ref:property}-->styles](EditInPlace_base_styles.md) \
    A set of styles that are applied to this component, an instance of [EditInPlaceStyles](EditInPlaceStyles.md).
- [<!--{ref:property}-->name](EditInPlace_base_name.md) \
    UI component identifier.
- [<!--{ref:property}-->accessibleLabel](EditInPlace_base_accessibleLabel.md) \
    UI component accessible label.

## Related

- [<!--{ref:class}-->class EditInPlaceStyles](EditInPlaceStyles.md) \
    Style configuration for an [EditInPlace](EditInPlace.md) component.