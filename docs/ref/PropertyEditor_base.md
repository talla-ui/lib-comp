# PropertyEditor (base)

> Base type for `PropertyEditor`.

<pre class="docgen_signature"><b>const</b> PropertyEditor_base: ViewComposite.DefinedViewComposite&lt;{<br>    items?: BindingOrValue&lt;Iterable&lt;<a href="PropertyEditorItem.md">PropertyEditorItem</a>&gt;&gt; | <b>undefined</b>;<br>    widths?: BindingOrValue&lt;(<b>string</b> | <b>number</b> | <b>undefined</b>)[]&gt; | <b>undefined</b>;<br>    readOnly?: BindingOrValue&lt;<b>boolean</b>&gt; | <b>undefined</b>;<br>    styles?: ConfigOptions.Arg&lt;<a href="PropertyEditorStyles.md">PropertyEditorStyles</a>&gt; | <b>undefined</b>;<br>    name?: BindingOrValue&lt;<b>string</b>&gt; | <b>undefined</b>;<br>}, {<br>    items: Iterable&lt;<a href="PropertyEditorItem.md">PropertyEditorItem</a>&gt;;<br>    widths: (<b>number</b> | <b>string</b> | <b>undefined</b>)[];<br>    readOnly: <b>boolean</b>;<br>    styles: <a href="PropertyEditorStyles.md">PropertyEditorStyles</a>;<br>    name: <b>string</b>;<br>}&gt;;</pre>

## Instance members

- [<!--{ref:property}-->items](PropertyEditor_base_items.md) \
    The list of properties to display and edit, as an array or managed list of [PropertyEditorItem](PropertyEditorItem.md) objects.
- [<!--{ref:property}-->widths](PropertyEditor_base_widths.md) \
    The widths of the property name and value columns.
- [<!--{ref:property}-->readOnly](PropertyEditor_base_readOnly.md) \
    True if all properties should be read-only.
- [<!--{ref:property}-->styles](PropertyEditor_base_styles.md) \
    A set of styles that are applied to this composite, an instance of [PropertyEditorStyles](PropertyEditorStyles.md).
- [<!--{ref:property}-->name](PropertyEditor_base_name.md) \
    UI component identifier.