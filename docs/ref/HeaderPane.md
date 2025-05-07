[UI components](../index.md)

# class HeaderPane

> Component for a header pane.

<pre class="docgen_signature"><b>class</b> HeaderPane <b>extends</b> <a href="HeaderPane_base.md">HeaderPane_base</a>;</pre>

## Description

A header pane component provides a complete 'screen' layout solution, including a header row and content area.

The header row can be hidden, shown with a distinct background color and effect, or shown without any background at all.

The content area is not scrollable by default. For scrollable 'page' content, consider using a [ScrollPane](ScrollPane.md) component instead.

Icon buttons can be added to the header row. Standard icon buttons include a back button (which emits the `NavigateBack` event or a custom event configured using the `navigateBack` property), and a menu button (which emits a `ShowMenu` event or a custom event configured using the `showMenu` property). Other icons can be added manually with a [HeaderPaneToolbar](HeaderPaneToolbar.md), and will appear on the far side of the header row.

## Instance members

- [<!--{ref:property}-->leadingButtonIcon](HeaderPane_leadingButtonIcon.md) <!--{refchip:protected}-->\
    The icon for the leading button in the header.
- [<!--{ref:property}-->leadingButtonAccessibleLabel](HeaderPane_leadingButtonAccessibleLabel.md) <!--{refchip:protected}-->\
    The accessible label for the leading button in the header.
- [<!--{ref:property}-->paneRendered](HeaderPane_paneRendered.md) <!--{refchip:protected}-->\
    True if the pane has been rendered at all.

## Inherited members

- [<!--{ref:property}-->title](HeaderPane_base_title.md) \
    The title of the header pane.
- [<!--{ref:property}-->titleIcon](HeaderPane_base_titleIcon.md) \
    The icon displayed next to the title.
- [<!--{ref:property}-->backdrop](HeaderPane_base_backdrop.md) \
    True if the header should include a solid backdrop and effect.
- [<!--{ref:property}-->hideToolbar](HeaderPane_base_hideToolbar.md) \
    True if the toolbar should be hidden.
- [<!--{ref:property}-->hideNavbar](HeaderPane_base_hideNavbar.md) \
    True if the navbar should be hidden.
- [<!--{ref:property}-->showHeader](HeaderPane_base_showHeader.md) \
    True if the header should be shown at all.
- [<!--{ref:property}-->navigateBack](HeaderPane_base_navigateBack.md) \
    True if a back navigation button should be shown, or an event to emit when clicked (other than `NavigateBack`).
- [<!--{ref:property}-->showMenu](HeaderPane_base_showMenu.md) \
    True if a menu button should be shown (instead of back button), or an event to emit when clicked (other than `ShowMenu`).
- [<!--{ref:property}-->titleClick](HeaderPane_base_titleClick.md) \
    True if the title (and icon) should be clickable, or an event to emit when clicked (other than `TitleClick`).
- [<!--{ref:property}-->styles](HeaderPane_base_styles.md) \
    A set of styles that are applied to this component, an instance of [HeaderPaneStyles](HeaderPaneStyles.md).
- [<!--{ref:property}-->name](HeaderPane_base_name.md) \
    UI component identifier.

## Related

- [<!--{ref:class}-->class HeaderPaneStyles](HeaderPaneStyles.md) \
    Style configuration for a [HeaderPane](HeaderPane.md) component.
- [<!--{ref:class}-->HeaderPaneToolbar](HeaderPaneToolbar.md) \
    Component for a header pane toolbar.