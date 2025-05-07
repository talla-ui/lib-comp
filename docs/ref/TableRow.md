[class TableList](TableList.md)

# class TableRow

> Component for a table row.

<pre class="docgen_signature"><b>class</b> TableRow&lt;TItem <b>extends</b> <b>any</b> = <b>unknown</b>&gt; <b>extends</b> <a href="TableRow_base.md">TableRow_base</a>;</pre>

## Description

This class is used to define the view content of each row in a [TableList](TableList.md). Content in the table must be preset using constructors of this type.

## Instance members

- [<!--{ref:property}-->item](TableRow_item.md) \
    The item bound to this row (undefined for table header).

## Inherited members

- [<!--{ref:property}-->widths](TableRow_base_widths.md) \
    The width of each column in the row.
- [<!--{ref:property}-->maxWidths](TableRow_base_maxWidths.md) \
    The maximum width of each column in the row.
- [<!--{ref:property}-->hideColumns](TableRow_base_hideColumns.md) \
    An array with true/false values or bindings indicating whether each column should be hidden.
- [<!--{ref:property}-->hidden](TableRow_base_hidden.md) \
    True if the row is currently hidden.
- [<!--{ref:property}-->selected](TableRow_base_selected.md) \
    True if the row is currently selected.
- [<!--{ref:property}-->style](TableRow_base_style.md) \
    Style for the containing cell.