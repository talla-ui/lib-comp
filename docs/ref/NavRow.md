[UI components](../index.md)

# class NavRow

> Component for a navigation button row.

<pre class="docgen_signature"><b>class</b> NavRow <b>extends</b> <a href="NavRow_base.md">NavRow_base</a>;</pre>

## Description

A navigation row component displays several navigation buttons in a horizontal layout, allowing the user to navigate between different pages or (detail) items by pressing one of the buttons.

Navigation buttons are added as presets of [PageNavButton](PageNavButton.md) or [DetailNavButton](DetailNavButton.md) within the content of this component. The button that corresponds to the current page or detail path is automatically shown as 'pressed'.

## Inherited members

- [<!--{ref:property}-->margin](NavRow_base_margin.md) \
    The margin around the outer container, defaults to 0.
- [<!--{ref:property}-->grow](NavRow_base_grow.md) \
    True if the container should grow to fill the available space, defaults to false.
- [<!--{ref:property}-->styles](NavRow_base_styles.md) \
    A set of styles that are applied to this component, an instance of [NavContainerStyles](NavContainerStyles.md).

## Related

- [<!--{ref:class}-->class NavContainerStyles](NavContainerStyles.md) \
    Style configuration for [NavColumn](NavColumn.md) and [NavRow](NavRow.md) components.
- [<!--{ref:class}-->class NavColumn](NavColumn.md) \
    Component for a navigation button column.
- [<!--{ref:class}-->class PageNavButton](PageNavButton.md) \
    Component that encapsulates a page navigation button.
- [<!--{ref:class}-->class DetailNavButton](DetailNavButton.md) \
    Component that encapsulates a detail navigation button.