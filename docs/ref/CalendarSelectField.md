[UI components](../index.md)

# class CalendarSelectField

> Component for a calendar select field.

<pre class="docgen_signature"><b>class</b> CalendarSelectField <b>extends</b> <a href="CalendarSelectField_base.md">CalendarSelectField_base</a>;</pre>

## Description

A calendar select field consists of a dropdown button that discloses a modal calendar view overlay when pressed, allowing the user to select a date.

The calendar overlay view can be localized in the same way as a standalone calendar view.

> **Note**\
> The button label is formatted using the `I18nProvider` in `app.i18n` by default. You must define the i18n provider for this to work, or change the date label format using [CalendarSelectFieldStyles.dateLabel](CalendarSelectFieldStyles_dateLabel.md).

For a more keyboard-friendly option, consider using the DateInputField component instead.

**Events**
- `Change` is emitted when the selected date has changed. The new date is included in the `value` property of the event data.

## Inherited members

- [<!--{ref:property}-->value](CalendarSelectField_base_value.md) \
    The current selected date.
- [<!--{ref:property}-->label](CalendarSelectField_base_label.md) \
    The label displayed on the dropdown button.
- [<!--{ref:property}-->range](CalendarSelectField_base_range.md) \
    True if the calendar is in date range mode, selecting an end date from the preselected date(s).
- [<!--{ref:property}-->preselected](CalendarSelectField_base_preselected.md) \
    A date or array of dates to be pre-selected.
- [<!--{ref:property}-->width](CalendarSelectField_base_width.md) \
    The width of the dropdown button.
- [<!--{ref:property}-->grow](CalendarSelectField_base_grow.md) \
    True if the button should grow to fill the available space, defaults to false.
- [<!--{ref:property}-->icon](CalendarSelectField_base_icon.md) \
    The icon displayed on the dropdown button.
- [<!--{ref:property}-->readOnly](CalendarSelectField_base_readOnly.md) \
    True if the user should not be able to change the value.
- [<!--{ref:property}-->formField](CalendarSelectField_base_formField.md) \
    A form field ID, to add a two-way `FormContext` binding.
- [<!--{ref:property}-->name](CalendarSelectField_base_name.md) \
    UI component identifier.
- [<!--{ref:property}-->accessibleLabel](CalendarSelectField_base_accessibleLabel.md) \
    UI component accessible label.
- [<!--{ref:property}-->locale](CalendarSelectField_base_locale.md) \
    Localization settings for the calendar, an instance of [CalendarViewLocale](CalendarViewLocale.md).
- [<!--{ref:property}-->styles](CalendarSelectField_base_styles.md) \
    A set of styles that are applied to this component, an instance of [CalendarSelectFieldStyles](CalendarSelectFieldStyles.md).
- [<!--{ref:property}-->calendarViewStyles](CalendarSelectField_base_calendarViewStyles.md) \
    Styles for the calendar view, an instance of [CalendarViewStyles](CalendarViewStyles.md).

## Related

- [<!--{ref:class}-->class CalendarSelectFieldStyles](CalendarSelectFieldStyles.md) \
    Style configuration for a [CalendarSelectField](CalendarSelectField.md) component.
- [<!--{ref:class}-->class CalendarViewLocale](CalendarViewLocale.md) \
    Localization configuration for a [CalendarView](CalendarView.md) component.
- [<!--{ref:class}-->class CalendarViewStyles](CalendarViewStyles.md) \
    Style configuration for a [CalendarView](CalendarView.md) component.