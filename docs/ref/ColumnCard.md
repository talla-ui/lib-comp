[UI components](../index.md)

# ColumnCard

> Component for a column-based card.

<pre class="docgen_signature"><b>const</b> ColumnCard: UIComponent.DefinedUIComponent&lt;{<br>    margin?: BindingOrValue&lt;UIRenderable.Offsets&gt; | <b>undefined</b>;<br>    position?: BindingOrValue&lt;UIRenderable.Position&gt; | <b>undefined</b>;<br>    width?: BindingOrValue&lt;<b>string</b> | <b>number</b> | <b>undefined</b>&gt;;<br>    navigateTo?: BindingOrValue&lt;<b>string</b> | LazyString | NavigationTarget | {<br>        getNavigationTarget(): NavigationTarget;<br>    } | <b>undefined</b>&gt;;<br>    styles?: ConfigOptions.Arg&lt;<a href="ColumnCardStyles.md">ColumnCardStyles</a>&gt; | <b>undefined</b>;<br>}, {<br>    margin: UIRenderable.Offsets;<br>    position: UIRenderable.Position;<br>    width: <b>string</b> | <b>number</b> | <b>undefined</b>;<br>    navigateTo: <b>string</b> | LazyString | NavigationTarget | {<br>        getNavigationTarget(): NavigationTarget;<br>    } | <b>undefined</b>;<br>    styles: <a href="ColumnCardStyles.md">ColumnCardStyles</a>;<br>}&gt;;</pre>

## Description

A column card component groups together any number of elements as a column within a visually distinct 'card' view.

The column card component automatically inserts separators between view elements, and adds padding around any views that are not containers or UI components themselves.

## Instance members

- [<!--{ref:property}-->margin](ColumnCard_margin.md) \
    The margin around the card, defaults to `{ bottom: 8 }` for use in a grid.
- [<!--{ref:property}-->position](ColumnCard_position.md) \
    The card position, defaults to `{ gravity: "start" }` for use in a grid.
- [<!--{ref:property}-->width](ColumnCard_width.md) \
    The width of the card, defaults to 320.
- [<!--{ref:property}-->navigateTo](ColumnCard_navigateTo.md) \
    Navigation target for the entire card.
- [<!--{ref:property}-->styles](ColumnCard_styles.md) \
    A set of styles that are applied to this component, an instance of [ColumnCardStyles](ColumnCardStyles.md).

## Related

- [<!--{ref:class}-->class ColumnCardStyles](ColumnCardStyles.md) \
    Style configuration for a [ColumnCard](ColumnCard.md) component.