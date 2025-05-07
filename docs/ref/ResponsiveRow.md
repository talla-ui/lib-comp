[UI components](../index.md)

# ResponsiveRow

> A responsive row component that changes to vertical layout on small viewports.

<pre class="docgen_signature"><b>const</b> ResponsiveRow: UIComponent.DefinedUIComponent&lt;{<br>    breakpoint?: BindingOrValue&lt;&quot;col2&quot; | &quot;col3&quot; | &quot;col4&quot; | &quot;col5&quot;&gt; | <b>undefined</b>;<br>    grow?: BindingOrValue&lt;<b>boolean</b>&gt; | <b>undefined</b>;<br>    reverse?: BindingOrValue&lt;<b>boolean</b>&gt; | <b>undefined</b>;<br>    axis?: BindingOrValue&lt;&quot;&quot; | &quot;horizontal&quot; | &quot;vertical&quot; | <b>undefined</b>&gt;;<br>    columnGravity?: BindingOrValue&lt;&quot;&quot; | &quot;center&quot; | &quot;end&quot; | &quot;start&quot; | &quot;stretch&quot; | &quot;baseline&quot; | <b>undefined</b>&gt;;<br>    rowGravity?: BindingOrValue&lt;&quot;&quot; | &quot;center&quot; | &quot;end&quot; | &quot;start&quot; | &quot;stretch&quot; | &quot;baseline&quot; | <b>undefined</b>&gt;;<br>    rowAlign?: BindingOrValue&lt;&quot;&quot; | &quot;center&quot; | &quot;end&quot; | &quot;start&quot; | &quot;stretch&quot; | &quot;baseline&quot; | <b>undefined</b>&gt;;<br>    spacing?: BindingOrValue&lt;<b>string</b> | <b>number</b> | <b>undefined</b>&gt;;<br>    padding?: BindingOrValue&lt;UIRenderable.Offsets | <b>undefined</b>&gt;;<br>    name?: BindingOrValue&lt;<b>string</b>&gt; | <b>undefined</b>;<br>}, {<br>    breakpoint: &quot;col2&quot; | &quot;col3&quot; | &quot;col4&quot; | &quot;col5&quot;;<br>    grow: <b>boolean</b>;<br>    reverse: <b>boolean</b>;<br>    axis: UIContainer.Layout[&quot;axis&quot;];<br>    columnGravity: UIContainer.Layout[&quot;gravity&quot;];<br>    rowGravity: UIContainer.Layout[&quot;gravity&quot;];<br>    rowAlign: UIContainer.Layout[&quot;gravity&quot;];<br>    spacing: <b>number</b> | <b>string</b> | <b>undefined</b>;<br>    padding: UIRenderable.Decoration[&quot;padding&quot;];<br>    name: <b>string</b>;<br>}&gt;;</pre>

## Description

The row will automatically adjust its layout based on the viewport size, based on the defined breakpoint.

## Instance members

- [<!--{ref:property}-->breakpoint](ResponsiveRow_breakpoint.md) \
    The breakpoint below which the row changes to vertical layout, defaults to `"col2"`.
- [<!--{ref:property}-->grow](ResponsiveRow_grow.md) \
    True if the row or column itself should grow to fill the available space, defaults to `false`.
- [<!--{ref:property}-->reverse](ResponsiveRow_reverse.md) \
    True if content should be displayed in reverse order (regardless of breakpoint, may be bound independently).
- [<!--{ref:property}-->axis](ResponsiveRow_axis.md) \
    The default axis for wider viewports, defaults to `"horizontal"`.
- [<!--{ref:property}-->columnGravity](ResponsiveRow_columnGravity.md) \
    Gravity of items in vertical layout, defaults to `"start"`.
- [<!--{ref:property}-->rowGravity](ResponsiveRow_rowGravity.md) \
    Gravity of items in horizontal layout, defaults to `"start"`.
- [<!--{ref:property}-->rowAlign](ResponsiveRow_rowAlign.md) \
    Alignment of items in horizontal layout, defaults to `"start"`.
- [<!--{ref:property}-->spacing](ResponsiveRow_spacing.md) \
    Space between items, same as `UIRow` and `UIColumn`.
- [<!--{ref:property}-->padding](ResponsiveRow_padding.md) \
    Padding around the row, same as `UIRow` and `UIColumn`, defaults to `0`.
- [<!--{ref:property}-->name](ResponsiveRow_name.md) \
    Name of the responsive row, defaults to `"ResponsiveRow"`.