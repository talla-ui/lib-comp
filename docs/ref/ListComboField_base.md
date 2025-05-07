# ListComboField (base)

> Base type for `ListComboField`.

<pre class="docgen_signature"><b>const</b> ListComboField_base: UIComponent.DefinedUIComponent&lt;{<br>    value?: BindingOrValue&lt;StringConvertible&gt; | <b>undefined</b>;<br>    items?: BindingOrValue&lt;Iterable&lt;<a href="ListBoxItem.md">ListBoxItem</a>&gt;&gt; | <b>undefined</b>;<br>    formField?: BindingOrValue&lt;<b>string</b> | <b>undefined</b>&gt;;<br>    placeholder?: BindingOrValue&lt;StringConvertible&gt; | <b>undefined</b>;<br>    icon?: BindingOrValue&lt;UIIconResource | <b>undefined</b>&gt;;<br>    width?: BindingOrValue&lt;<b>number</b> | <b>undefined</b>&gt;;<br>    grow?: BindingOrValue&lt;<b>boolean</b>&gt; | <b>undefined</b>;<br>    styles?: ConfigOptions.Arg&lt;<a href="ListComboFieldStyles.md">ListComboFieldStyles</a>&gt; | <b>undefined</b>;<br>    name?: BindingOrValue&lt;<b>string</b>&gt; | <b>undefined</b>;<br>    accessibleLabel?: BindingOrValue&lt;<b>string</b> | <b>undefined</b>&gt;;<br>}, {<br>    value: StringConvertible;<br>    items: Iterable&lt;<a href="ListBoxItem.md">ListBoxItem</a>&gt;;<br>    formField: <b>string</b> | <b>undefined</b>;<br>    placeholder: StringConvertible;<br>    icon: UIIconResource | <b>undefined</b>;<br>    width: <b>number</b> | <b>undefined</b>;<br>    grow: <b>boolean</b>;<br>    styles: <a href="ListComboFieldStyles.md">ListComboFieldStyles</a>;<br>    name: <b>string</b>;<br>    accessibleLabel: <b>string</b> | <b>undefined</b>;<br>}&gt;;</pre>

## Instance members

- [<!--{ref:property}-->value](ListComboField_base_value.md) \
    The current value of the combo field.
- [<!--{ref:property}-->items](ListComboField_base_items.md) \
    A list of available options, as an array of [ListBoxItem](ListBoxItem.md) objects; must be filtered on `Filter` event.
- [<!--{ref:property}-->formField](ListComboField_base_formField.md) \
    A form field ID, to add a two-way `FormContext` binding.
- [<!--{ref:property}-->placeholder](ListComboField_base_placeholder.md) \
    The placeholder text for the text field.
- [<!--{ref:property}-->icon](ListComboField_base_icon.md) \
    The icon to show in the combo field.
- [<!--{ref:property}-->width](ListComboField_base_width.md) \
    The width of the combo field.
- [<!--{ref:property}-->grow](ListComboField_base_grow.md) \
    True if the combo field should grow to fill the available space, defaults to false.
- [<!--{ref:property}-->styles](ListComboField_base_styles.md) \
    A set of styles that are applied to this component, an instance of [ListComboFieldStyles](ListComboFieldStyles.md).
- [<!--{ref:property}-->name](ListComboField_base_name.md) \
    UI component identifier.
- [<!--{ref:property}-->accessibleLabel](ListComboField_base_accessibleLabel.md) \
    UI component accessible label.