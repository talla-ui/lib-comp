# ButtonSwitch (base)

> Base type for `ButtonSwitch`.

<pre class="docgen_signature"><b>const</b> ButtonSwitch_base: ViewComposite.DefinedViewComposite&lt;{<br>    buttons?: BindingOrValue&lt;<a href="ButtonSwitchItem.md">ButtonSwitchItem</a>[]&gt; | <b>undefined</b>;<br>    value?: <b>unknown</b>;<br>    formField?: BindingOrValue&lt;<b>string</b> | <b>undefined</b>&gt;;<br>    styles?: ConfigOptions.Arg&lt;<a href="ButtonSwitchStyles.md">ButtonSwitchStyles</a>&gt; | <b>undefined</b>;<br>    name?: BindingOrValue&lt;<b>string</b>&gt; | <b>undefined</b>;<br>    accessibleLabel?: BindingOrValue&lt;<b>string</b> | <b>undefined</b>&gt;;<br>}, {<br>    buttons: <a href="ButtonSwitchItem.md">ButtonSwitchItem</a>[];<br>    value: <b>unknown</b>;<br>    formField: <b>string</b> | <b>undefined</b>;<br>    styles: <a href="ButtonSwitchStyles.md">ButtonSwitchStyles</a>;<br>    name: <b>string</b>;<br>    accessibleLabel: <b>string</b> | <b>undefined</b>;<br>}&gt;;</pre>

## Instance members

- [<!--{ref:property}-->buttons](ButtonSwitch_base_buttons.md) \
    The list of buttons to show, as an array of [ButtonSwitchItem](ButtonSwitchItem.md) objects.
- [<!--{ref:property}-->value](ButtonSwitch_base_value.md) \
    The current value, one of the values from [buttons](ButtonSwitch_base_buttons.md).
- [<!--{ref:property}-->formField](ButtonSwitch_base_formField.md) \
    A form field ID, to add a two-way `FormContext` binding.
- [<!--{ref:property}-->styles](ButtonSwitch_base_styles.md) \
    A set of styles that are applied to this composite, an instance of [ButtonSwitchStyles](ButtonSwitchStyles.md).
- [<!--{ref:property}-->name](ButtonSwitch_base_name.md) \
    UI component identifier.
- [<!--{ref:property}-->accessibleLabel](ButtonSwitch_base_accessibleLabel.md) \
    UI component accessible label.