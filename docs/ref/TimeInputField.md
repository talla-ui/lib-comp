[UI components](../index.md)

# class TimeInputField

> Component for a time input field.

<pre class="docgen_signature"><b>class</b> TimeInputField <b>extends</b> <a href="TimeInputField_base.md">TimeInputField_base</a>;</pre>

## Description

A time input field component groups together a series of text fields for time-of-day input.

This component can be combined with a DateInputField component for a complete date/time input option (i.e. year, month, date, hours, and minutes), when bound to the same `Date` value.

The time input field can be localized to display 24-hour or 12-hour time.

**Events**
- `Change` is emitted when the selected time has changed. The new date is included in the `value` property of the event data.

## Inherited members

- [<!--{ref:property}-->icon](TimeInputField_base_icon.md) \
    The icon displayed on the time input field.
- [<!--{ref:property}-->value](TimeInputField_base_value.md) \
    The currently selected time (as hours, minutes within a `Date` value).
- [<!--{ref:property}-->readOnly](TimeInputField_base_readOnly.md) \
    True if the user should not be able to change the value.
- [<!--{ref:property}-->formField](TimeInputField_base_formField.md) \
    A form field ID, to add a two-way `FormContext` binding.
- [<!--{ref:property}-->locale](TimeInputField_base_locale.md) \
    Localization settings for the time input, an instance of [TimeInputLocale](TimeInputLocale.md).
- [<!--{ref:property}-->width](TimeInputField_base_width.md) \
    Width of the time input field, defaults to undefined (auto).
- [<!--{ref:property}-->grow](TimeInputField_base_grow.md) \
    True if the time input field should grow to fill the available space, defaults to false.
- [<!--{ref:property}-->styles](TimeInputField_base_styles.md) \
    A set of styles that are applied to this component, an instance of [TimeInputFieldStyles](TimeInputFieldStyles.md).
- [<!--{ref:property}-->accessibleLabels](TimeInputField_base_accessibleLabels.md) \
    Accessible labels for hour, minute, and AM/PM input fields (in that order).
- [<!--{ref:property}-->name](TimeInputField_base_name.md) \
    UI component identifier.

## Related

- [<!--{ref:class}-->class TimeInputFieldStyles](TimeInputFieldStyles.md) \
    Style configuration for a [TimeInputField](TimeInputField.md) component.
- [<!--{ref:class}-->class TimeInputLocale](TimeInputLocale.md) \
    Localization configuration for a [TimeInputField](TimeInputField.md) component.