# CalendarView (base)

> Base type for `CalendarView`.

<pre class="docgen_signature"><b>const</b> CalendarView_base: ViewComposite.DefinedViewComposite&lt;{<br>    value?: BindingOrValue&lt;Date | <b>undefined</b>&gt;;<br>    readOnly?: BindingOrValue&lt;<b>boolean</b>&gt; | <b>undefined</b>;<br>    range?: BindingOrValue&lt;<b>boolean</b>&gt; | <b>undefined</b>;<br>    preselected?: BindingOrValue&lt;Date | Date[] | <b>undefined</b>&gt;;<br>    width?: BindingOrValue&lt;<b>number</b>&gt; | <b>undefined</b>;<br>    height?: BindingOrValue&lt;<b>number</b>&gt; | <b>undefined</b>;<br>    formField?: BindingOrValue&lt;<b>string</b> | <b>undefined</b>&gt;;<br>    styles?: ConfigOptions.Arg&lt;<a href="CalendarViewStyles.md">CalendarViewStyles</a>&gt; | <b>undefined</b>;<br>    locale?: ConfigOptions.Arg&lt;<a href="CalendarViewLocale.md">CalendarViewLocale</a>&gt; | <b>undefined</b>;<br>    name?: BindingOrValue&lt;<b>string</b>&gt; | <b>undefined</b>;<br>}, {<br>    value: Date | <b>undefined</b>;<br>    readOnly: <b>boolean</b>;<br>    range: <b>boolean</b>;<br>    preselected: Date | Date[] | <b>undefined</b>;<br>    width: <b>number</b>;<br>    height: <b>number</b>;<br>    formField: <b>string</b> | <b>undefined</b>;<br>    styles: <a href="CalendarViewStyles.md">CalendarViewStyles</a>;<br>    locale: <a href="CalendarViewLocale.md">CalendarViewLocale</a>;<br>    name: <b>string</b>;<br>}&gt;;</pre>

## Instance members

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
    A set of styles that are applied to this composite, an instance of [CalendarViewStyles](CalendarViewStyles.md).
- [<!--{ref:property}-->locale](CalendarView_base_locale.md) \
    Localization settings for the calendar, an instance of [CalendarViewLocale](CalendarViewLocale.md).
- [<!--{ref:property}-->name](CalendarView_base_name.md) \
    UI component identifier.