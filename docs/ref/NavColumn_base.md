# NavColumn (base)

> Base type for `NavColumn`.

<pre class="docgen_signature"><b>const</b> NavColumn_base: UIComponent.DefinedUIComponent&lt;{<br>    width?: BindingOrValue&lt;<b>string</b> | <b>number</b> | <b>undefined</b>&gt;;<br>    margin?: BindingOrValue&lt;UIRenderable.Offsets&gt; | <b>undefined</b>;<br>    grow?: BindingOrValue&lt;<b>boolean</b>&gt; | <b>undefined</b>;<br>    styles?: ConfigOptions.Arg&lt;<a href="NavContainerStyles.md">NavContainerStyles</a>&gt; | <b>undefined</b>;<br>}, {<br>    width: <b>string</b> | <b>number</b> | <b>undefined</b>;<br>    margin: UIRenderable.Offsets;<br>    grow: <b>boolean</b>;<br>    styles: <a href="NavContainerStyles.md">NavContainerStyles</a>;<br>}&gt;;</pre>

## Instance members

- [<!--{ref:property}-->width](NavColumn_base_width.md) \
    The width of the outer container, defaults to undefined (auto).
- [<!--{ref:property}-->margin](NavColumn_base_margin.md) \
    The margin around the outer container, defaults to 0.
- [<!--{ref:property}-->grow](NavColumn_base_grow.md) \
    True if the container should grow to fill the available space, defaults to false.
- [<!--{ref:property}-->styles](NavColumn_base_styles.md) \
    A set of styles that are applied to this component, an instance of [NavContainerStyles](NavContainerStyles.md).