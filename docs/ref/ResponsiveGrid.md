[View composites](../index.md)

# ResponsiveGrid

> A responsive grid that adjusts the width of its items based on the viewport size.

<pre class="docgen_signature"><b>const</b> ResponsiveGrid: UIComponent.DefinedUIComponent&lt;{<br>    gap?: BindingOrValue&lt;<b>number</b>&gt; | <b>undefined</b>;<br>    maxItemWidth?: BindingOrValue&lt;<b>number</b>&gt; | <b>undefined</b>;<br>    itemWidths?: BindingOrValue&lt;(<b>string</b> | <b>number</b>)[]&gt; | <b>undefined</b>;<br>    listItems?: BindingOrValue&lt;Iterable&lt;<b>any</b>&gt; | <b>undefined</b>&gt;;<br>    listFirstIndex?: BindingOrValue&lt;<b>number</b> | <b>undefined</b>&gt;;<br>    listMaxItems?: BindingOrValue&lt;<b>number</b> | <b>undefined</b>&gt;;<br>    listRenderOptions?: BindingOrValue&lt;UIListView.RenderOptions | <b>undefined</b>&gt;;<br>}, {<br>    gap: <b>number</b>;<br>    maxItemWidth: <b>number</b>;<br>    itemWidths: (<b>string</b> | <b>number</b>)[];<br>    listItems: Iterable&lt;<b>any</b>&gt; | <b>undefined</b>;<br>    listFirstIndex: <b>number</b> | <b>undefined</b>;<br>    listMaxItems: <b>number</b> | <b>undefined</b>;<br>    listRenderOptions: UIListView.RenderOptions | <b>undefined</b>;<br>}&gt;;</pre>

## Description

The grid will automatically adjust the width of its items based on the viewport size, using the `itemWidths` property to determine the width of each item at different viewport sizes. Items are therefore displayed in rows of 1, 2, or 3 columns (or more, for wider viewports), with a gap between each item.

## Instance members

- [<!--{ref:property}-->gap](ResponsiveGrid_gap.md) \
    The gap between grid items, defaults to 16.
- [<!--{ref:property}-->maxItemWidth](ResponsiveGrid_maxItemWidth.md) \
    The maximum width of each grid item, defaults to 432.
- [<!--{ref:property}-->itemWidths](ResponsiveGrid_itemWidths.md) \
    The set widths of each item at col1, col2, and wider viewport sizes, defaults to `"100%"`, `"50%"`, and `320` respectively.
- [<!--{ref:property}-->listItems](ResponsiveGrid_listItems.md) \
    An array or observed list of items, if any, to render as a list.
- [<!--{ref:property}-->listFirstIndex](ResponsiveGrid_listFirstIndex.md) \
    The index of the first item to render in the list, if `listItems` is defined, defaults to 0.
- [<!--{ref:property}-->listMaxItems](ResponsiveGrid_listMaxItems.md) \
    The maximum number of items to render in the list, if `listItems` is defined, defaults to the length of the list.
- [<!--{ref:property}-->listRenderOptions](ResponsiveGrid_listRenderOptions.md) \
    The render options for the list, if `listItems` is defined, defaults to `"default"`.