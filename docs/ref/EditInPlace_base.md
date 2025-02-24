# EditInPlace (base)

> Base type for `EditInPlace`.

<pre class="docgen_signature"><b>const</b> EditInPlace_base: UIComponent.DefinedUIComponent&lt;{<br>    value?: BindingOrValue&lt;<b>string</b> | <b>number</b> | <b>undefined</b>&gt;;<br>    placeholder?: BindingOrValue&lt;StringConvertible&gt; | <b>undefined</b>;<br>    icon?: BindingOrValue&lt;UIIconResource | <b>undefined</b>&gt;;<br>    readOnly?: BindingOrValue&lt;<b>boolean</b>&gt; | <b>undefined</b>;<br>    isNumber?: BindingOrValue&lt;<b>boolean</b>&gt; | <b>undefined</b>;<br>    isInteger?: BindingOrValue&lt;<b>boolean</b>&gt; | <b>undefined</b>;<br>    isPositive?: BindingOrValue&lt;<b>boolean</b>&gt; | <b>undefined</b>;<br>    width?: BindingOrValue&lt;<b>string</b> | <b>number</b>&gt; | <b>undefined</b>;<br>    height?: BindingOrValue&lt;<b>string</b> | <b>number</b>&gt; | <b>undefined</b>;<br>    formField?: BindingOrValue&lt;<b>string</b> | <b>undefined</b>&gt;;<br>    styles?: ConfigOptions.Arg&lt;<a href="EditInPlaceStyles.md">EditInPlaceStyles</a>&gt; | <b>undefined</b>;<br>    name?: BindingOrValue&lt;<b>string</b>&gt; | <b>undefined</b>;<br>    accessibleLabel?: BindingOrValue&lt;<b>string</b> | <b>undefined</b>&gt;;<br>}, {<br>    value: <b>string</b> | <b>number</b> | <b>undefined</b>;<br>    placeholder: StringConvertible;<br>    icon: UIIconResource | <b>undefined</b>;<br>    readOnly: <b>boolean</b>;<br>    isNumber: <b>boolean</b>;<br>    isInteger: <b>boolean</b>;<br>    isPositive: <b>boolean</b>;<br>    width: <b>number</b> | <b>string</b>;<br>    height: <b>number</b> | <b>string</b>;<br>    formField: <b>string</b> | <b>undefined</b>;<br>    styles: <a href="EditInPlaceStyles.md">EditInPlaceStyles</a>;<br>    name: <b>string</b>;<br>    accessibleLabel: <b>string</b> | <b>undefined</b>;<br>}&gt;;</pre>

## Instance members

- [<!--{ref:property}-->value](EditInPlace_base_value.md) \
    The current value of the edit-in-place field.
- [<!--{ref:property}-->placeholder](EditInPlace_base_placeholder.md) \
    Placeholder text that's displayed if the value is an empty string.
- [<!--{ref:property}-->icon](EditInPlace_base_icon.md) \
    An icon to be displayed in front of the field value.
- [<!--{ref:property}-->readOnly](EditInPlace_base_readOnly.md) \
    True if the user should not be able to change the value.
- [<!--{ref:property}-->isNumber](EditInPlace_base_isNumber.md) \
    True if the field should accept numeric input.
- [<!--{ref:property}-->isInteger](EditInPlace_base_isInteger.md) \
    True if the field should only accept integer values (only applies if [isNumber](EditInPlace_base_isNumber.md) is true).
- [<!--{ref:property}-->isPositive](EditInPlace_base_isPositive.md) \
    True if the field should only accept positive values (only applies if [isNumber](EditInPlace_base_isNumber.md) is true).
- [<!--{ref:property}-->width](EditInPlace_base_width.md) \
    The width of the edit-in-place field.
- [<!--{ref:property}-->height](EditInPlace_base_height.md) \
    The height of the edit-in-place field.
- [<!--{ref:property}-->formField](EditInPlace_base_formField.md) \
    A form field ID, to add a two-way `FormContext` binding.
- [<!--{ref:property}-->styles](EditInPlace_base_styles.md) \
    A set of styles that are applied to this composite, an instance of [EditInPlaceStyles](EditInPlaceStyles.md).
- [<!--{ref:property}-->name](EditInPlace_base_name.md) \
    UI component identifier.
- [<!--{ref:property}-->accessibleLabel](EditInPlace_base_accessibleLabel.md) \
    UI component accessible label.