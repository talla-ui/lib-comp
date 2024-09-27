# SelectField (base)

> Base type for `SelectField`.

<pre class="docgen_signature"><b>const</b> SelectField_base: ViewComposite.DefinedViewComposite&lt;{<br>    label?: BindingOrValue&lt;StringConvertible | <b>undefined</b>&gt;;<br>    icon?: BindingOrValue&lt;UIIconResource | <b>undefined</b>&gt;;<br>    width?: BindingOrValue&lt;<b>string</b> | <b>number</b> | <b>undefined</b>&gt;;<br>    options?: BindingOrValue&lt;<a href="SelectFieldOption.md">SelectFieldOption</a>[]&gt; | <b>undefined</b>;<br>    value?: <b>unknown</b>;<br>    readOnly?: BindingOrValue&lt;<b>boolean</b>&gt; | <b>undefined</b>;<br>    formField?: BindingOrValue&lt;<b>string</b> | <b>undefined</b>&gt;;<br>    styles?: ConfigOptions.Arg&lt;<a href="SelectFieldStyles.md">SelectFieldStyles</a>&gt; | <b>undefined</b>;<br>    name?: BindingOrValue&lt;<b>string</b>&gt; | <b>undefined</b>;<br>    accessibleLabel?: BindingOrValue&lt;<b>string</b> | <b>undefined</b>&gt;;<br>}, {<br>    label: StringConvertible | <b>undefined</b>;<br>    icon: UIIconResource | <b>undefined</b>;<br>    width: <b>string</b> | <b>number</b> | <b>undefined</b>;<br>    options: <a href="SelectFieldOption.md">SelectFieldOption</a>[];<br>    value: <b>unknown</b>;<br>    readOnly: <b>boolean</b>;<br>    formField: <b>string</b> | <b>undefined</b>;<br>    styles: <a href="SelectFieldStyles.md">SelectFieldStyles</a>;<br>    name: <b>string</b>;<br>    accessibleLabel: <b>string</b> | <b>undefined</b>;<br>}&gt;;</pre>

## Instance members

- [<!--{ref:property}-->label](SelectField_base_label.md) \
    The button label, updated automatically upon selection.
- [<!--{ref:property}-->icon](SelectField_base_icon.md) \
    The button icon, updated automatically upon selection.
- [<!--{ref:property}-->width](SelectField_base_width.md) \
    The width of the button element, defaults to undefined.
- [<!--{ref:property}-->options](SelectField_base_options.md) \
    A list of available options, as an array of [SelectFieldOption](SelectFieldOption.md) objects.
- [<!--{ref:property}-->value](SelectField_base_value.md) \
    The current value, one of the values from [options](SelectField_base_options.md).
- [<!--{ref:property}-->readOnly](SelectField_base_readOnly.md) \
    True if the user should not be able to change the value.
- [<!--{ref:property}-->formField](SelectField_base_formField.md) \
    A form field ID, to add a two-way `FormContext` binding.
- [<!--{ref:property}-->styles](SelectField_base_styles.md) \
    A set of styles that are applied to this composite, an instance of [SelectFieldStyles](SelectFieldStyles.md).
- [<!--{ref:property}-->name](SelectField_base_name.md) \
    UI component identifier.
- [<!--{ref:property}-->accessibleLabel](SelectField_base_accessibleLabel.md) \
    UI component accessible label.