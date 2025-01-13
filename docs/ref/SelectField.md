[View composites](../index.md)

# class SelectField

> View composite for a select field.

<pre class="docgen_signature"><b>class</b> SelectField <b>extends</b> <a href="SelectField_base.md">SelectField_base</a>;</pre>

## Description

A select field composite displays a dropdown button which reflects a chosen value (or a placeholder) and reveals a menu when pressed.

The current value of the select field can be set programmatically using [value](SelectField_base_value.md), and by the user.

Options are added using a list of [SelectFieldOption](SelectFieldOption.md) objects, each containing a value, a label, and optionally an icon. The list may be preset, bound, or updated right before opening the menu, e.g. using the `BeforeSelect` event.

**Events**
- `Change` is emitted when the value has changed. The new value is included in the `value` property of the event data.
- `BeforeSelect` is emitted immediately before opening the menu, to allow updating of menu options in [options](SelectField_base_options.md) (synchronously).

## Instance members

- [<!--{ref:property}-->itemIcon](SelectField_itemIcon.md) <!--{refchip:protected}-->\
    The selected item's icon, if any.

## Inherited members

- [<!--{ref:property}-->label](SelectField_base_label.md) \
    The button label, updated automatically upon selection.
- [<!--{ref:property}-->icon](SelectField_base_icon.md) \
    The button icon, until an option with an icon is selected.
- [<!--{ref:property}-->chevron](SelectField_base_chevron.md) \
    The button chevron icon, defaults to "down".
- [<!--{ref:property}-->width](SelectField_base_width.md) \
    The width of the button element, defaults to undefined.
- [<!--{ref:property}-->options](SelectField_base_options.md) \
    A list of available options, as an array of [SelectFieldOption](SelectFieldOption.md) objects.
- [<!--{ref:property}-->value](SelectField_base_value.md) \
    The current value, one of the values from [options](SelectField_base_options.md).
- [<!--{ref:property}-->readOnly](SelectField_base_readOnly.md) \
    True if the user should not be able to change the value.
- [<!--{ref:property}-->formField](SelectField_base_formField.md) \
    A form field ID, to add a two-way `FormContext` binding.
- [<!--{ref:property}-->styles](SelectField_base_styles.md) \
    A set of styles that are applied to this composite, an instance of [SelectFieldStyles](SelectFieldStyles.md).
- [<!--{ref:property}-->name](SelectField_base_name.md) \
    UI component identifier.
- [<!--{ref:property}-->accessibleLabel](SelectField_base_accessibleLabel.md) \
    UI component accessible label.

## Related

- [<!--{ref:interface}-->interface SelectFieldOption](SelectFieldOption.md) \
    An object that describes a button that's displayed within a [ButtonSwitch](ButtonSwitch.md) composite.
- [<!--{ref:class}-->class SelectFieldStyles](SelectFieldStyles.md) \
    Style configuration for a [SelectField](SelectField.md) composite.