[class CalendarSelectField](CalendarSelectField.md)

# class CalendarSelectFieldStyles

> Style configuration for a [CalendarSelectField](CalendarSelectField.md) composite.

<pre class="docgen_signature"><b>class</b> CalendarSelectFieldStyles <b>extends</b> ConfigOptions;</pre>

## Description

Objects of this type are passed to [CalendarSelectField](CalendarSelectField.md) as the `styles` preset property.

## Static members

- [<!--{ref:property}-->CalendarSelectFieldStyles.default](CalendarSelectFieldStyles_default.md) <!--{refchip:static}-->\
    Default styles that are used when no other styles are specified.

## Instance members

- [<!--{ref:property}-->chevron](CalendarSelectFieldStyles_chevron.md) \
    The direction of the button chevron icon.
- [<!--{ref:property}-->iconSize](CalendarSelectFieldStyles_iconSize.md) \
    The size of the button icon, if any.
- [<!--{ref:property}-->dateLabel](CalendarSelectFieldStyles_dateLabel.md) \
    A lazily-evaluated string for displaying the date value, defaults to `strf("%[value:local|date]")`.
- [<!--{ref:property}-->buttonStyle](CalendarSelectFieldStyles_buttonStyle.md) \
    The style applied to the dropdown button.