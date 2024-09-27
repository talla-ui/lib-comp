# SidebarSplitView (base)

> Base type for `SidebarSplitView`.

<pre class="docgen_signature"><b>const</b> SidebarSplitView_base: ViewComposite.DefinedViewComposite&lt;{<br>    name?: BindingOrValue&lt;<b>string</b> | <b>undefined</b>&gt;;<br>    showSidebar?: BindingOrValue&lt;<b>boolean</b>&gt; | <b>undefined</b>;<br>    showContent?: BindingOrValue&lt;<b>boolean</b>&gt; | <b>undefined</b>;<br>    reverse?: BindingOrValue&lt;<b>boolean</b>&gt; | <b>undefined</b>;<br>    styles?: ConfigOptions.Arg&lt;<a href="SidebarSplitViewStyles.md">SidebarSplitViewStyles</a>&gt; | <b>undefined</b>;<br>}, {<br>    name: <b>string</b> | <b>undefined</b>;<br>    showSidebar: <b>boolean</b>;<br>    showContent: <b>boolean</b>;<br>    reverse: <b>boolean</b>;<br>    styles: <a href="SidebarSplitViewStyles.md">SidebarSplitViewStyles</a>;<br>}&gt;;</pre>

## Instance members

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