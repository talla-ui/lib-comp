[UI components](../index.md)

# class DateInputField

> Component for a date input field.

<pre class="docgen_signature"><b>class</b> DateInputField <b>extends</b> <a href="DateInputField_base.md">DateInputField_base</a>;</pre>

## Description

A date input field component groups together a series of text fields for year, month, and date input, and a button that discloses a modal calendar view overlay when pressed.

The date input field component is a more text-focused alternative to the CalendarSelectField component.

The date separator and order of input fields (i.e. DMY, MDY, or YMD) can be localized. The calendar overlay view can also be localized in the same way as a standalone calendar view.

**Events**
- `Change` is emitted when the selected date has changed. The new date is included in the `value` property of the event data.

## Inherited members

- [<!--{ref:property}-->icon](DateInputField_base_icon.md) \
    The icon displayed on the date input field.
- [<!--{ref:property}-->value](DateInputField_base_value.md) \
    The currently selected date.
- [<!--{ref:property}-->readOnly](DateInputField_base_readOnly.md) \
    True if the user should not be able to change the value.
- [<!--{ref:property}-->hideCalendar](DateInputField_base_hideCalendar.md) \
    True if the calendar dropdown should be hidden.
- [<!--{ref:property}-->range](DateInputField_base_range.md) \
    True if the calendar is in date range mode, selecting an end date from the preselected date(s).
- [<!--{ref:property}-->preselected](DateInputField_base_preselected.md) \
    A date or array of dates to be pre-selected.
- [<!--{ref:property}-->formField](DateInputField_base_formField.md) \
    A form field ID, to add a two-way `FormContext` binding.
- [<!--{ref:property}-->locale](DateInputField_base_locale.md) \
    Localization settings for the date input, an instance of [DateInputLocale](DateInputLocale.md).
- [<!--{ref:property}-->width](DateInputField_base_width.md) \
    Width of the date input field, defaults to undefined (auto).
- [<!--{ref:property}-->grow](DateInputField_base_grow.md) \
    True if the date input field should grow to fill the available space, defaults to false.
- [<!--{ref:property}-->styles](DateInputField_base_styles.md) \
    A set of styles that are applied to this component, an instance of [DateInputFieldStyles](DateInputFieldStyles.md).
- [<!--{ref:property}-->calendarViewStyles](DateInputField_base_calendarViewStyles.md) \
    Styles for the calendar view, an instance of [CalendarViewStyles](CalendarViewStyles.md).
- [<!--{ref:property}-->accessibleLabels](DateInputField_base_accessibleLabels.md) \
    Accessible labels for day, month, and year input fields (in that order).
- [<!--{ref:property}-->name](DateInputField_base_name.md) \
    UI component identifier.

## Related

- [<!--{ref:class}-->class DateInputFieldStyles](DateInputFieldStyles.md) \
    Style configuration for a [DateInputField](DateInputField.md) component.
- [<!--{ref:class}-->class DateInputLocale](DateInputLocale.md) \
    Localization configuration for a [DateInputField](DateInputField.md) component.
- [<!--{ref:class}-->class CalendarViewStyles](CalendarViewStyles.md) \
    Style configuration for a [CalendarView](CalendarView.md) component.