[UI components](../index.md)

# class ScrollPane

> Component for a scroll pane.

<pre class="docgen_signature"><b>class</b> ScrollPane <b>extends</b> <a href="ScrollPane_base.md">ScrollPane_base</a>;</pre>

## Description

A scroll pane component provides a complete 'page' layout solution, which includes a heading with title, icon buttons, and a _scrollable_ content area.

Within a scroll pane, the inline title disappears and a distinct top row appears instead when the user scrolls up. The inline title appears again when the user scrolls back to the top of the content area.

Icon buttons can be added to the header row, in the same way as for [HeaderPane](HeaderPane.md) — which does the same, but without scrollable content.

The layout of the element is based on the [HeaderPane](HeaderPane.md) component. The scroll pane component adds logic for scrolling, and alternating between fixed and inline headers.

## Instance members

- [<!--{ref:property}-->scrolled](ScrollPane_scrolled.md) <!--{refchip:protected}-->\
    True if the content has been scrolled up past the threshold.

## Inherited members

- [<!--{ref:property}-->title](ScrollPane_base_title.md) \
    The title of the scroll pane.
- [<!--{ref:property}-->titleIcon](ScrollPane_base_titleIcon.md) \
    The icon displayed next to the title.
- [<!--{ref:property}-->navigateBack](ScrollPane_base_navigateBack.md) \
    True if a back navigation button should be shown, or an event to emit when clicked (other than `NavigateBack`).
- [<!--{ref:property}-->showMenu](ScrollPane_base_showMenu.md) \
    True if a menu button should be shown (instead of back button), or an event to emit when clicked (other than `ShowMenu`).
- [<!--{ref:property}-->titleClick](ScrollPane_base_titleClick.md) \
    True if the title (and icon) should be clickable, or an event to emit when clicked (other than `TitleClick`).
- [<!--{ref:property}-->hideToolbar](ScrollPane_base_hideToolbar.md) \
    True if the toolbar should be hidden.
- [<!--{ref:property}-->hideNavbar](ScrollPane_base_hideNavbar.md) \
    True if the navbar should be hidden.
- [<!--{ref:property}-->restoreScroll](ScrollPane_base_restoreScroll.md) \
    True to save and restore the scroll position when re-rendered (in memory only; requires name to be set).
- [<!--{ref:property}-->headerMode](ScrollPane_base_headerMode.md) \
    The type of header behavior: none (no header), fixed, or dynamic with scroll; defaults to dynamic.
- [<!--{ref:property}-->styles](ScrollPane_base_styles.md) \
    A set of styles that are applied to this component, an instance of [ScrollPaneStyles](ScrollPaneStyles.md).
- [<!--{ref:property}-->name](ScrollPane_base_name.md) \
    UI component identifier.

## Related

- [<!--{ref:class}-->class ScrollPaneStyles](ScrollPaneStyles.md) \
    Style configuration for a [ScrollPane](ScrollPane.md) component.
- [<!--{ref:type}-->type ScrollPaneHeaderMode](ScrollPaneHeaderMode.md) \
    Defines the behavior of the header in a [ScrollPane](ScrollPane.md) component.