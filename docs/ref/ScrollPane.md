[View composites](../index.md)

# class ScrollPane

> View composite for a scroll pane.

<pre class="docgen_signature"><b>class</b> ScrollPane <b>extends</b> <a href="ScrollPane_base.md">ScrollPane_base</a>;</pre>

## Description

A scroll pane composite provides a complete 'page' layout solution, which includes a heading with title, icon buttons, and a _scrollable_ content area.

Within a scroll pane, the inline title disappears and a distinct top row appears instead when the user scrolls up. The inline title appears again when the user scrolls back to the top of the content area.

Icon buttons can be added to the header row, in the same way as for [HeaderPane](HeaderPane.md) — which does the same, but without scrollable content.

The layout of the element is based on the [HeaderPane](HeaderPane.md) composite. The scroll pane composite adds logic for scrolling, and alternating between fixed and inline headers.

## Instance members

- [<!--{ref:property}-->scrolled](ScrollPane_scrolled.md) <!--{refchip:protected}-->\
    True if the content has been scrolled up past the threshold.

## Inherited members

- [<!--{ref:property}-->title](ScrollPane_base_title.md) \
    The title of the scroll pane.
- [<!--{ref:property}-->titleIcon](ScrollPane_base_titleIcon.md) \
    The icon displayed next to the title.
- [<!--{ref:property}-->navigateBack](ScrollPane_base_navigateBack.md) \
    True if a back navigation button should be included in the header.
- [<!--{ref:property}-->showMenu](ScrollPane_base_showMenu.md) \
    True if a menu button should be included in the header (instead of back button).
- [<!--{ref:property}-->headerMode](ScrollPane_base_headerMode.md) \
    The type of header behavior: none (no header), fixed, or dynamic with scroll; defaults to dynamic.
- [<!--{ref:property}-->styles](ScrollPane_base_styles.md) \
    A set of styles that are applied to this composite, an instance of [ScrollPaneStyles](ScrollPaneStyles.md).
- [<!--{ref:property}-->name](ScrollPane_base_name.md) \
    UI component identifier.

## Related

- [<!--{ref:class}-->class ScrollPaneStyles](ScrollPaneStyles.md) \
    Style configuration for a [ScrollPane](ScrollPane.md) composite.
- [<!--{ref:type}-->type ScrollPaneHeaderMode](ScrollPaneHeaderMode.md) \
    Defines the behavior of the header in a [ScrollPane](ScrollPane.md) composite view.