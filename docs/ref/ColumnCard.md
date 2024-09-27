[View composites](../index.md)

# ColumnCard

> View composite for a column-based card.

<pre class="docgen_signature"><b>const</b> ColumnCard: ViewComposite.DefinedViewComposite&lt;{<br>    margin?: BindingOrValue&lt;UIComponent.Offsets&gt; | <b>undefined</b>;<br>    position?: BindingOrValue&lt;UIComponent.Position&gt; | <b>undefined</b>;<br>    width?: BindingOrValue&lt;<b>string</b> | <b>number</b> | <b>undefined</b>&gt;;<br>    minHeight?: BindingOrValue&lt;<b>string</b> | <b>number</b> | <b>undefined</b>&gt;;<br>    maxHeight?: BindingOrValue&lt;<b>string</b> | <b>number</b> | <b>undefined</b>&gt;;<br>    styles?: ConfigOptions.Arg&lt;<a href="ColumnCardStyles.md">ColumnCardStyles</a>&gt; | <b>undefined</b>;<br>}, {<br>    margin: UIComponent.Offsets;<br>    position: UIComponent.Position;<br>    width: <b>string</b> | <b>number</b> | <b>undefined</b>;<br>    minHeight: <b>string</b> | <b>number</b> | <b>undefined</b>;<br>    maxHeight: <b>string</b> | <b>number</b> | <b>undefined</b>;<br>    styles: <a href="ColumnCardStyles.md">ColumnCardStyles</a>;<br>}&gt;;</pre>

## Description

A column card composite groups together any number of elements as a column within a visually distinct 'card' view.

The column card composite automatically inserts separators between view elements, and adds padding around any views that are not containers or view composites themselves.

## Instance members

- [<!--{ref:property}-->margin](ColumnCard_margin.md) \
    The margin around the card, defaults to `{ bottom: 8 }` for use in a grid.
- [<!--{ref:property}-->position](ColumnCard_position.md) \
    The card position, defaults to `{ gravity: "start" }` for use in a grid.
- [<!--{ref:property}-->width](ColumnCard_width.md) \
    The width of the card, defaults to 320.
- [<!--{ref:property}-->minHeight](ColumnCard_minHeight.md) \
    Minimum height of the card, defaults to undefined.
- [<!--{ref:property}-->maxHeight](ColumnCard_maxHeight.md) \
    Maximum height of the card, defaults to undefined.
- [<!--{ref:property}-->styles](ColumnCard_styles.md) \
    A set of styles that are applied to this composite, an instance of [ColumnCardStyles](ColumnCardStyles.md).

## Related

- [<!--{ref:class}-->class ColumnCardStyles](ColumnCardStyles.md) \
    Style configuration for a [ColumnCard](ColumnCard.md) composite.