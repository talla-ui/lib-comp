[View composites](../index.md)

# class SidebarSplitView

> View composite for a sidebar split view.

<pre class="docgen_signature"><b>class</b> SidebarSplitView <b>extends</b> <a href="SidebarSplitView_base.md">SidebarSplitView_base</a>;</pre>

## Description

A sidebar split view composite displays two content areas, separated by a vertical gutter that can be moved by the user. Optionally, the position of the gutter can be stored in application settings.

Both content areas can be hidden using individual boolean properties, which allows the composite to be used for responsive list/detail views.

## Instance members

- [<!--{ref:method}-->setWidth()](SidebarSplitView_setWidth.md) \
    Set the width of the sidebar.

## Inherited members

- [<!--{ref:property}-->name](SidebarSplitView_base_name.md) \
    Unique identifier for the split view, used for storing gutter position.
- [<!--{ref:property}-->showSidebar](SidebarSplitView_base_showSidebar.md) \
    True if the sidebar should be visible.
- [<!--{ref:property}-->showContent](SidebarSplitView_base_showContent.md) \
    True if the content area should be visible.
- [<!--{ref:property}-->reverse](SidebarSplitView_base_reverse.md) \
    True if the sidebar should be placed on the opposite side.
- [<!--{ref:property}-->styles](SidebarSplitView_base_styles.md) \
    A set of styles that are applied to this composite, an instance of [SidebarSplitViewStyles](SidebarSplitViewStyles.md).

## Related

- [<!--{ref:class}-->class SidebarSplitViewStyles](SidebarSplitViewStyles.md) \
    Style configuration for a [SidebarSplitView](SidebarSplitView.md) composite.