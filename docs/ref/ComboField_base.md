# ComboField (base)

> Base type for `ComboField`.

<pre class="docgen_signature"><b>const</b> ComboField_base: ViewComposite.DefinedViewComposite&lt;{<br>    value?: BindingOrValue&lt;StringConvertible&gt; | <b>undefined</b>;<br>    formField?: BindingOrValue&lt;<b>string</b> | <b>undefined</b>&gt;;<br>    placeholder?: BindingOrValue&lt;StringConvertible&gt; | <b>undefined</b>;<br>    icon?: BindingOrValue&lt;UIIconResource | <b>undefined</b>&gt;;<br>    width?: BindingOrValue&lt;<b>number</b> | <b>undefined</b>&gt;;<br>    styles?: ConfigOptions.Arg&lt;<a href="ComboFieldStyles.md">ComboFieldStyles</a>&gt; | <b>undefined</b>;<br>    openOnFocus?: BindingOrValue&lt;<b>boolean</b>&gt; | <b>undefined</b>;<br>    showClearButton?: BindingOrValue&lt;<b>boolean</b>&gt; | <b>undefined</b>;<br>    name?: BindingOrValue&lt;<b>string</b>&gt; | <b>undefined</b>;<br>    accessibleLabel?: BindingOrValue&lt;<b>string</b> | <b>undefined</b>&gt;;<br>}, {<br>    value: StringConvertible;<br>    formField: <b>string</b> | <b>undefined</b>;<br>    placeholder: StringConvertible;<br>    icon: UIIconResource | <b>undefined</b>;<br>    width: <b>number</b> | <b>undefined</b>;<br>    styles: <a href="ComboFieldStyles.md">ComboFieldStyles</a>;<br>    openOnFocus: <b>boolean</b>;<br>    showClearButton: <b>boolean</b>;<br>    name: <b>string</b>;<br>    accessibleLabel: <b>string</b> | <b>undefined</b>;<br>}&gt;;</pre>

## Instance members

- [<!--{ref:property}-->value](ComboField_base_value.md) \
    The current value of the combo field.
- [<!--{ref:property}-->formField](ComboField_base_formField.md) \
    A form field ID, to add a two-way `FormContext` binding.
- [<!--{ref:property}-->placeholder](ComboField_base_placeholder.md) \
    The placeholder text for the text field.
- [<!--{ref:property}-->icon](ComboField_base_icon.md) \
    The icon to show in the combo field.
- [<!--{ref:property}-->width](ComboField_base_width.md) \
    The width of the combo field.
- [<!--{ref:property}-->styles](ComboField_base_styles.md) \
    A set of styles that are applied to this composite, an instance of [ComboFieldStyles](ComboFieldStyles.md).
- [<!--{ref:property}-->openOnFocus](ComboField_base_openOnFocus.md) \
    True if the overlay should open when the text field gains focus.
- [<!--{ref:property}-->showClearButton](ComboField_base_showClearButton.md) \
    True if a clear button should be shown when the field has a value.
- [<!--{ref:property}-->name](ComboField_base_name.md) \
    UI component identifier.
- [<!--{ref:property}-->accessibleLabel](ComboField_base_accessibleLabel.md) \
    UI component accessible label.