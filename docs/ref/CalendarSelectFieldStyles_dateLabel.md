[class CalendarSelectFieldStyles](CalendarSelectFieldStyles.md)

# dateLabel

> A lazily-evaluated string for displaying the date value, defaults to `strf("%[value:local|date]")`.

<pre class="docgen_signature">dateLabel?: LazyString;</pre>

## Description

> **Note**\
> The default value depends on `app.i18n` to format the date value. You must define an `I18nProvider` for this to work, or use another format that doesn't use 'local', e.g. `strf("%[m:02i]-%[d:02i]-%[y:04i]")`.

The following fields are available in the format string.
- `value` is the `Date` value itself
- `d` is the date of the month as a number (1-31)
- `m` is the month of the year as a number (1-12)
- `y` is the year as a number

## Related

- [<!--{ref:class}-->class CalendarSelectFieldStyles](CalendarSelectFieldStyles.md) \
    Style configuration for a [CalendarSelectField](CalendarSelectField.md) component.
