[UI components](../index.md)

# class NavColumn

> Component for a navigation button column.

<pre class="docgen_signature"><b>class</b> NavColumn <b>extends</b> <a href="NavColumn_base.md">NavColumn_base</a>;</pre>

## Description

A navigation column component displays several navigation buttons in a vertical layout, allowing the user to navigate between different pages or (detail) items by pressing one of the buttons.

Navigation buttons are added as presets of [PageNavButton](PageNavButton.md) or [DetailNavButton](DetailNavButton.md) within the content of this component. The button that corresponds to the current page or detail path is automatically shown as 'pressed'.

## Inherited members

- [<!--{ref:property}-->width](NavColumn_base_width.md) \
    The width of the outer container, defaults to undefined (auto).
- [<!--{ref:property}-->margin](NavColumn_base_margin.md) \
    The margin around the outer container, defaults to 0.
- [<!--{ref:property}-->grow](NavColumn_base_grow.md) \
    True if the container should grow to fill the available space, defaults to false.
- [<!--{ref:property}-->styles](NavColumn_base_styles.md) \
    A set of styles that are applied to this component, an instance of [NavContainerStyles](NavContainerStyles.md).

## Related

- [<!--{ref:class}-->class NavContainerStyles](NavContainerStyles.md) \
    Style configuration for [NavColumn](NavColumn.md) and [NavRow](NavRow.md) components.
- [<!--{ref:class}-->class NavRow](NavRow.md) \
    Component for a navigation button row.
- [<!--{ref:class}-->class PageNavButton](PageNavButton.md) \
    Component that encapsulates a page navigation button.
- [<!--{ref:class}-->class DetailNavButton](DetailNavButton.md) \
    Component that encapsulates a detail navigation button.