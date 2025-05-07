# HeaderPane (base)

> Base type for `HeaderPane`.

<pre class="docgen_signature"><b>const</b> HeaderPane_base: UIComponent.DefinedUIComponent&lt;{<br>    title?: BindingOrValue&lt;StringConvertible&gt; | <b>undefined</b>;<br>    titleIcon?: BindingOrValue&lt;UIIconResource | <b>undefined</b>&gt;;<br>    backdrop?: BindingOrValue&lt;<b>boolean</b>&gt; | <b>undefined</b>;<br>    hideToolbar?: BindingOrValue&lt;<b>boolean</b>&gt; | <b>undefined</b>;<br>    hideNavbar?: BindingOrValue&lt;<b>boolean</b>&gt; | <b>undefined</b>;<br>    showHeader?: BindingOrValue&lt;<b>boolean</b>&gt; | <b>undefined</b>;<br>    navigateBack?: BindingOrValue&lt;<b>string</b> | <b>boolean</b>&gt; | <b>undefined</b>;<br>    showMenu?: BindingOrValue&lt;<b>string</b> | <b>boolean</b>&gt; | <b>undefined</b>;<br>    titleClick?: BindingOrValue&lt;<b>string</b> | <b>boolean</b>&gt; | <b>undefined</b>;<br>    styles?: ConfigOptions.Arg&lt;<a href="HeaderPaneStyles.md">HeaderPaneStyles</a>&gt; | <b>undefined</b>;<br>    name?: BindingOrValue&lt;<b>string</b>&gt; | <b>undefined</b>;<br>}, {<br>    title: StringConvertible;<br>    titleIcon: UIIconResource | <b>undefined</b>;<br>    backdrop: <b>boolean</b>;<br>    hideToolbar: <b>boolean</b>;<br>    hideNavbar: <b>boolean</b>;<br>    showHeader: <b>boolean</b>;<br>    navigateBack: <b>boolean</b> | <b>string</b>;<br>    showMenu: <b>boolean</b> | <b>string</b>;<br>    titleClick: <b>boolean</b> | <b>string</b>;<br>    styles: <a href="HeaderPaneStyles.md">HeaderPaneStyles</a>;<br>    name: <b>string</b>;<br>}&gt;;</pre>

## Instance members

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