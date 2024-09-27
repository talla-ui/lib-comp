# TimeInputField (base)

> Base type for `TimeInputField`.

<pre class="docgen_signature"><b>const</b> TimeInputField_base: ViewComposite.DefinedViewComposite&lt;{<br>    icon?: BindingOrValue&lt;UIIconResource | <b>undefined</b>&gt;;<br>    value?: BindingOrValue&lt;Date | <b>undefined</b>&gt;;<br>    readOnly?: BindingOrValue&lt;<b>boolean</b>&gt; | <b>undefined</b>;<br>    formField?: BindingOrValue&lt;<b>string</b> | <b>undefined</b>&gt;;<br>    locale?: ConfigOptions.Arg&lt;<a href="TimeInputLocale.md">TimeInputLocale</a>&gt; | <b>undefined</b>;<br>    styles?: ConfigOptions.Arg&lt;<a href="TimeInputFieldStyles.md">TimeInputFieldStyles</a>&gt; | <b>undefined</b>;<br>    accessibleLabels?: BindingOrValue&lt;<b>string</b>[]&gt; | <b>undefined</b>;<br>    name?: BindingOrValue&lt;<b>string</b>&gt; | <b>undefined</b>;<br>}, {<br>    icon: UIIconResource | <b>undefined</b>;<br>    value: Date | <b>undefined</b>;<br>    readOnly: <b>boolean</b>;<br>    formField: <b>string</b> | <b>undefined</b>;<br>    locale: <a href="TimeInputLocale.md">TimeInputLocale</a>;<br>    styles: <a href="TimeInputFieldStyles.md">TimeInputFieldStyles</a>;<br>    accessibleLabels: <b>string</b>[];<br>    name: <b>string</b>;<br>}&gt;;</pre>

## Instance members

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
- [<!--{ref:property}-->styles](TimeInputField_base_styles.md) \
    A set of styles that are applied to this composite, an instance of [TimeInputFieldStyles](TimeInputFieldStyles.md).
- [<!--{ref:property}-->accessibleLabels](TimeInputField_base_accessibleLabels.md) \
    Accessible labels for hour, minute, and AM/PM input fields (in that order).
- [<!--{ref:property}-->name](TimeInputField_base_name.md) \
    UI component identifier.