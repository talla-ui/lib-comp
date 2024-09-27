[View composites](../index.md)

# class NavRow

> View composite for a navigation button row.

<pre class="docgen_signature"><b>class</b> NavRow <b>extends</b> <a href="NavRow_base.md">NavRow_base</a>;</pre>

## Description

A navigation row composite displays several navigation buttons in a horizontal layout, allowing the user to navigate between different pages or (detail) items by pressing one of the buttons.

Navigation buttons are added as presets of [PageNavButton](PageNavButton.md) or [DetailNavButton](DetailNavButton.md) within the content of this composite. The button that corresponds to the current page or detail path is automatically shown as 'pressed'.

## Inherited members

- [<!--{ref:property}-->margin](NavRow_base_margin.md) \
    The margin around the outer container, defaults to 0.
- [<!--{ref:property}-->padding](NavRow_base_padding.md) \
    The padding around the navigation buttons, defaults to 0.
- [<!--{ref:property}-->styles](NavRow_base_styles.md) \
    A set of styles that are applied to this composite, an instance of [NavContainerStyles](NavContainerStyles.md).

## Related

- [<!--{ref:class}-->class NavContainerStyles](NavContainerStyles.md) \
    Style configuration for [NavColumn](NavColumn.md) and [NavRow](NavRow.md) composites.
- [<!--{ref:class}-->class TabNavRow](TabNavRow.md) \
    View composite for a tab navigation row.
- [<!--{ref:class}-->class NavColumn](NavColumn.md) \
    View composite for a navigation button column.
- [<!--{ref:class}-->class PageNavButton](PageNavButton.md) \
    View composite that encapsulates a page navigation button.
- [<!--{ref:class}-->class DetailNavButton](DetailNavButton.md) \
    View composite that encapsulates a detail navigation button.