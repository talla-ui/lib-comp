# CalendarSelectField (base)

> Base type for `CalendarSelectField`.

<pre class="docgen_signature"><b>const</b> CalendarSelectField_base: UIComponent.DefinedUIComponent&lt;{<br>    value?: BindingOrValue&lt;Date | <b>undefined</b>&gt;;<br>    label?: BindingOrValue&lt;StringConvertible | <b>undefined</b>&gt;;<br>    range?: BindingOrValue&lt;<b>boolean</b>&gt; | <b>undefined</b>;<br>    preselected?: BindingOrValue&lt;Date | Date[] | <b>undefined</b>&gt;;<br>    width?: BindingOrValue&lt;<b>string</b> | <b>number</b> | <b>undefined</b>&gt;;<br>    grow?: BindingOrValue&lt;<b>boolean</b>&gt; | <b>undefined</b>;<br>    icon?: BindingOrValue&lt;UIIconResource | <b>undefined</b>&gt;;<br>    readOnly?: BindingOrValue&lt;<b>boolean</b>&gt; | <b>undefined</b>;<br>    formField?: BindingOrValue&lt;<b>string</b> | <b>undefined</b>&gt;;<br>    name?: BindingOrValue&lt;<b>string</b>&gt; | <b>undefined</b>;<br>    accessibleLabel?: BindingOrValue&lt;<b>string</b> | <b>undefined</b>&gt;;<br>    locale?: ConfigOptions.Arg&lt;<a href="CalendarViewLocale.md">CalendarViewLocale</a>&gt; | <b>undefined</b>;<br>    styles?: ConfigOptions.Arg&lt;<a href="CalendarSelectFieldStyles.md">CalendarSelectFieldStyles</a>&gt; | <b>undefined</b>;<br>    calendarViewStyles?: ConfigOptions.Arg&lt;<a href="CalendarViewStyles.md">CalendarViewStyles</a>&gt; | <b>undefined</b>;<br>}, {<br>    value: Date | <b>undefined</b>;<br>    label: StringConvertible | <b>undefined</b>;<br>    range: <b>boolean</b>;<br>    preselected: Date | Date[] | <b>undefined</b>;<br>    width: <b>string</b> | <b>number</b> | <b>undefined</b>;<br>    grow: <b>boolean</b>;<br>    icon: UIIconResource | <b>undefined</b>;<br>    readOnly: <b>boolean</b>;<br>    formField: <b>string</b> | <b>undefined</b>;<br>    name: <b>string</b>;<br>    accessibleLabel: <b>string</b> | <b>undefined</b>;<br>    locale: <a href="CalendarViewLocale.md">CalendarViewLocale</a>;<br>    styles: <a href="CalendarSelectFieldStyles.md">CalendarSelectFieldStyles</a>;<br>    calendarViewStyles: <a href="CalendarViewStyles.md">CalendarViewStyles</a>;<br>}&gt;;</pre>

## Instance members

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