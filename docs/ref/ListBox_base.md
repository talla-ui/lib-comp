# ListBox (base)

> Base type for `ListBox`.

<pre class="docgen_signature"><b>const</b> ListBox_base: UIComponent.DefinedUIComponent&lt;{<br>    value?: <b>unknown</b>;<br>    items?: BindingOrValue&lt;Iterable&lt;<a href="ListBoxItem.md">ListBoxItem</a>&gt;&gt; | <b>undefined</b>;<br>    height?: BindingOrValue&lt;<b>string</b> | <b>number</b> | <b>undefined</b>&gt;;<br>    width?: BindingOrValue&lt;<b>string</b> | <b>number</b> | <b>undefined</b>&gt;;<br>    selectOnFocus?: BindingOrValue&lt;<b>boolean</b>&gt; | <b>undefined</b>;<br>    formField?: BindingOrValue&lt;<b>string</b> | <b>undefined</b>&gt;;<br>    styles?: ConfigOptions.Arg&lt;<a href="ListBoxStyles.md">ListBoxStyles</a>&gt; | <b>undefined</b>;<br>    name?: BindingOrValue&lt;<b>string</b>&gt; | <b>undefined</b>;<br>    accessibleLabel?: BindingOrValue&lt;<b>string</b> | <b>undefined</b>&gt;;<br>}, {<br>    value: <b>unknown</b>;<br>    items: Iterable&lt;<a href="ListBoxItem.md">ListBoxItem</a>&gt;;<br>    height: <b>number</b> | <b>string</b> | <b>undefined</b>;<br>    width: <b>number</b> | <b>string</b> | <b>undefined</b>;<br>    selectOnFocus: <b>boolean</b>;<br>    formField: <b>string</b> | <b>undefined</b>;<br>    styles: <a href="ListBoxStyles.md">ListBoxStyles</a>;<br>    name: <b>string</b>;<br>    accessibleLabel: <b>string</b> | <b>undefined</b>;<br>}&gt;;</pre>

## Instance members

- [<!--{ref:property}-->value](ListBox_base_value.md) \
    The current value, one of the values from [items](ListBox_base_items.md).
- [<!--{ref:property}-->items](ListBox_base_items.md) \
    A list of available options, as an array of [ListBoxItem](ListBoxItem.md) objects.
- [<!--{ref:property}-->height](ListBox_base_height.md) \
    The height of the list box.
- [<!--{ref:property}-->width](ListBox_base_width.md) \
    The width of the list box.
- [<!--{ref:property}-->selectOnFocus](ListBox_base_selectOnFocus.md) \
    True if an item should be selected when it receives focus.
- [<!--{ref:property}-->formField](ListBox_base_formField.md) \
    A form field ID, to add a two-way `FormContext` binding.
- [<!--{ref:property}-->styles](ListBox_base_styles.md) \
    A set of styles that are applied to this component, an instance of [ListBoxStyles](ListBoxStyles.md).
- [<!--{ref:property}-->name](ListBox_base_name.md) \
    UI component identifier.
- [<!--{ref:property}-->accessibleLabel](ListBox_base_accessibleLabel.md) \
    UI component accessible label.