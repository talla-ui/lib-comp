[View composites](../index.md)

# class TableList

> View composite for a table list.

<pre class="docgen_signature"><b>class</b> TableList <b>extends</b> <a href="TableList_base.md">TableList_base</a>;</pre>

## Description

A table list composite contains multiple table rows, each with a fixed number of columns to form a table grid.

Table rows are automatically created using a preset TableRow view within the table's `UIListView`, based on the elements of a bound array or managed list in [items](TableList_base_items.md). Table rows therefore all have the same number of columns and size.

A table list view composite can be preset with a single [TableRow](TableRow.md) constructor, or a [TableHeader](TableHeader.md) and [TableRow](TableRow.md) constructor. Styles may be included, including a fixed height value, which makes the table scrollable within a [ScrollArea](ScrollArea.md) view.

## Inherited members

- [<!--{ref:property}-->items](TableList_base_items.md) \
    The list of items to display in the table.
- [<!--{ref:property}-->styles](TableList_base_styles.md) \
    A set of styles that are applied to this composite, an instance of [TableListStyles](TableListStyles.md).
- [<!--{ref:property}-->name](TableList_base_name.md) \
    UI component identifier.
- [<!--{ref:property}-->renderOptions](TableList_base_renderOptions.md) \
    Render options for the list view.

## Related

- [<!--{ref:class}-->class TableListStyles](TableListStyles.md) \
    Style configuration for a [TableList](TableList.md) composite.
- [<!--{ref:class}-->class TableRow](TableRow.md) \
    View composite for a table row.