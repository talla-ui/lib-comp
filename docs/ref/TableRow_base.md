# TableRow (base)

> Base type for `TableRow`.

<pre class="docgen_signature"><b>const</b> TableRow_base: UIComponent.DefinedUIComponent&lt;{<br>    widths?: BindingOrValue&lt;(<b>string</b> | <b>number</b> | <b>undefined</b>)[]&gt; | <b>undefined</b>;<br>    maxWidths?: BindingOrValue&lt;(<b>string</b> | <b>number</b> | <b>undefined</b>)[]&gt; | <b>undefined</b>;<br>    hideColumns?: BindingOrValue&lt;(<b>boolean</b> | Binding&lt;<b>boolean</b>&gt; | <b>undefined</b>)[]&gt; | <b>undefined</b>;<br>    hidden?: BindingOrValue&lt;<b>boolean</b>&gt; | <b>undefined</b>;<br>    selected?: BindingOrValue&lt;<b>boolean</b>&gt; | <b>undefined</b>;<br>    style?: BindingOrValue&lt;UICell.StyleValue&gt;;<br>}, {<br>    widths: (<b>number</b> | <b>string</b> | <b>undefined</b>)[];<br>    maxWidths: (<b>number</b> | <b>string</b> | <b>undefined</b>)[];<br>    hideColumns: Array&lt;<b>boolean</b> | Binding&lt;<b>boolean</b>&gt; | <b>undefined</b>&gt;;<br>    hidden: <b>boolean</b>;<br>    selected: <b>boolean</b>;<br>    style: UICell.StyleValue | <b>undefined</b>;<br>}&gt;;</pre>

## Instance members

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