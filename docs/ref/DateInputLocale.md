[class DateInputField](DateInputField.md)

# class DateInputLocale

> Localization configuration for a [DateInputField](DateInputField.md) composite.

<pre class="docgen_signature"><b>class</b> DateInputLocale <b>extends</b> <a href="CalendarViewLocale.md">CalendarViewLocale</a>;</pre>

## Description

Objects of this type are passed to [DateInputField](DateInputField.md) as the `locale` preset property.

## Static members

- [<!--{ref:property}-->DateInputLocale.default](DateInputLocale_default.md) <!--{refchip:static}-->\
    Default locale that is used when no other locale is specified.

## Instance members

- [<!--{ref:property}-->dateFormat](DateInputLocale_dateFormat.md) \
    The order of date components (either DMY, MDY, or YMD).
- [<!--{ref:property}-->dateSeparator](DateInputLocale_dateSeparator.md) \
    The separator used between date components.

## Inherited members

- [<!--{ref:property}-->weekStart](CalendarViewLocale_weekStart.md) \
    The day of the week to start on (0 = Sunday, 1 = Monday, etc.).
- [<!--{ref:property}-->dayHeadings](CalendarViewLocale_dayHeadings.md) \
    Short labels for days of the week, always starting from Sunday.
- [<!--{ref:property}-->monthLabels](CalendarViewLocale_monthLabels.md) \
    Short labels for months of the year.