[UI components](../index.md)

# class CalendarView

> Component for a calendar view.

<pre class="docgen_signature"><b>class</b> CalendarView <b>extends</b> <a href="CalendarView_base.md">CalendarView_base</a>;</pre>

## Description

A calendar view component displays a monthly calendar, allowing the user to select a single date or a date range. The component is optimized for both keyboard and mouse or touch input.

The calendar can be localized to start weeks on different days, and to translate the labels for days and months.

**Events**
- `Change` is emitted when the selected date has changed. The new date is included in the `value` property of the event data.
- `DateSelected` is emitted when a date is explicitly selected by the user. The selected date is included in the `value` property of the event data.

## Instance members

- [<!--{ref:property}-->isoValue](CalendarView_isoValue.md) \
    The ISO string representation of the selected date.
- [<!--{ref:property}-->cursor](CalendarView_cursor.md) <!--{refchip:protected}-->\
    The date currently being displayed.
- [<!--{ref:property}-->monthDisplay](CalendarView_monthDisplay.md) <!--{refchip:protected}-->\
    The name of the month currently being displayed.
- [<!--{ref:property}-->yearDisplay](CalendarView_yearDisplay.md) <!--{refchip:protected}-->\
    The year currently being displayed.
- [<!--{ref:property}-->showMonths](CalendarView_showMonths.md) <!--{refchip:protected}-->\
    Whether the month selection view is currently shown.

## Inherited members

- [<!--{ref:property}-->value](CalendarView_base_value.md) \
    The currently selected date.
- [<!--{ref:property}-->readOnly](CalendarView_base_readOnly.md) \
    True if the user should not be able to change the value.
- [<!--{ref:property}-->range](CalendarView_base_range.md) \
    True if the calendar is in date range mode, selecting an end date from the preselected date(s).
- [<!--{ref:property}-->preselected](CalendarView_base_preselected.md) \
    A date or array of dates to be pre-selected.
- [<!--{ref:property}-->width](CalendarView_base_width.md) \
    The width of the calendar view, defaults to 224.
- [<!--{ref:property}-->height](CalendarView_base_height.md) \
    The height of the calendar view, defaults to 256.
- [<!--{ref:property}-->formField](CalendarView_base_formField.md) \
    A form field ID, to add a two-way `FormContext` binding.
- [<!--{ref:property}-->styles](CalendarView_base_styles.md) \
    A set of styles that are applied to this component, an instance of [CalendarViewStyles](CalendarViewStyles.md).
- [<!--{ref:property}-->locale](CalendarView_base_locale.md) \
    Localization settings for the calendar, an instance of [CalendarViewLocale](CalendarViewLocale.md).
- [<!--{ref:property}-->name](CalendarView_base_name.md) \
    UI component identifier.

## Related

- [<!--{ref:class}-->class CalendarViewStyles](CalendarViewStyles.md) \
    Style configuration for a [CalendarView](CalendarView.md) component.
- [<!--{ref:class}-->class CalendarViewLocale](CalendarViewLocale.md) \
    Localization configuration for a [CalendarView](CalendarView.md) component.