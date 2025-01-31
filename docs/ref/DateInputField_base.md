# DateInputField (base)

> Base type for `DateInputField`.

<pre class="docgen_signature"><b>const</b> DateInputField_base: ViewComposite.DefinedViewComposite&lt;{<br>    icon?: BindingOrValue&lt;UIIconResource | <b>undefined</b>&gt;;<br>    value?: BindingOrValue&lt;Date | <b>undefined</b>&gt;;<br>    readOnly?: BindingOrValue&lt;<b>boolean</b>&gt; | <b>undefined</b>;<br>    range?: BindingOrValue&lt;<b>boolean</b>&gt; | <b>undefined</b>;<br>    preselected?: BindingOrValue&lt;Date | Date[] | <b>undefined</b>&gt;;<br>    formField?: BindingOrValue&lt;<b>string</b> | <b>undefined</b>&gt;;<br>    locale?: ConfigOptions.Arg&lt;<a href="DateInputLocale.md">DateInputLocale</a>&gt; | <b>undefined</b>;<br>    width?: BindingOrValue&lt;<b>number</b> | <b>undefined</b>&gt;;<br>    grow?: BindingOrValue&lt;<b>boolean</b>&gt; | <b>undefined</b>;<br>    styles?: ConfigOptions.Arg&lt;<a href="DateInputFieldStyles.md">DateInputFieldStyles</a>&gt; | <b>undefined</b>;<br>    calendarViewStyles?: ConfigOptions.Arg&lt;<a href="CalendarViewStyles.md">CalendarViewStyles</a>&gt; | <b>undefined</b>;<br>    accessibleLabels?: BindingOrValue&lt;<b>string</b>[]&gt; | <b>undefined</b>;<br>    name?: BindingOrValue&lt;<b>string</b>&gt; | <b>undefined</b>;<br>}, {<br>    icon: UIIconResource | <b>undefined</b>;<br>    value: Date | <b>undefined</b>;<br>    readOnly: <b>boolean</b>;<br>    range: <b>boolean</b>;<br>    preselected: Date | Date[] | <b>undefined</b>;<br>    formField: <b>string</b> | <b>undefined</b>;<br>    locale: <a href="DateInputLocale.md">DateInputLocale</a>;<br>    width: <b>number</b> | <b>undefined</b>;<br>    grow: <b>boolean</b>;<br>    styles: <a href="DateInputFieldStyles.md">DateInputFieldStyles</a>;<br>    calendarViewStyles: <a href="CalendarViewStyles.md">CalendarViewStyles</a>;<br>    accessibleLabels: <b>string</b>[];<br>    name: <b>string</b>;<br>}&gt;;</pre>

## Instance members

- [<!--{ref:property}-->icon](DateInputField_base_icon.md) \
    The icon displayed on the date input field.
- [<!--{ref:property}-->value](DateInputField_base_value.md) \
    The currently selected date.
- [<!--{ref:property}-->readOnly](DateInputField_base_readOnly.md) \
    True if the user should not be able to change the value.
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
    A set of styles that are applied to this composite, an instance of [DateInputFieldStyles](DateInputFieldStyles.md).
- [<!--{ref:property}-->calendarViewStyles](DateInputField_base_calendarViewStyles.md) \
    Styles for the calendar view, an instance of [CalendarViewStyles](CalendarViewStyles.md).
- [<!--{ref:property}-->accessibleLabels](DateInputField_base_accessibleLabels.md) \
    Accessible labels for day, month, and year input fields (in that order).
- [<!--{ref:property}-->name](DateInputField_base_name.md) \
    UI component identifier.