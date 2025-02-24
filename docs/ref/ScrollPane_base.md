# ScrollPane (base)

> Base type for `ScrollPane`.

<pre class="docgen_signature"><b>const</b> ScrollPane_base: UIComponent.DefinedUIComponent&lt;{<br>    title?: BindingOrValue&lt;StringConvertible&gt; | <b>undefined</b>;<br>    titleIcon?: BindingOrValue&lt;UIIconResource | <b>undefined</b>&gt;;<br>    navigateBack?: BindingOrValue&lt;<b>string</b> | <b>boolean</b>&gt; | <b>undefined</b>;<br>    showMenu?: BindingOrValue&lt;<b>string</b> | <b>boolean</b>&gt; | <b>undefined</b>;<br>    headerMode?: BindingOrValue&lt;<a href="ScrollPaneHeaderMode.md">ScrollPaneHeaderMode</a>&gt; | <b>undefined</b>;<br>    styles?: ConfigOptions.Arg&lt;<a href="ScrollPaneStyles.md">ScrollPaneStyles</a>&gt; | <b>undefined</b>;<br>    name?: BindingOrValue&lt;<b>string</b>&gt; | <b>undefined</b>;<br>}, {<br>    title: StringConvertible;<br>    titleIcon: UIIconResource | <b>undefined</b>;<br>    navigateBack: <b>boolean</b> | <b>string</b>;<br>    showMenu: <b>boolean</b> | <b>string</b>;<br>    headerMode: <a href="ScrollPaneHeaderMode.md">ScrollPaneHeaderMode</a>;<br>    styles: <a href="ScrollPaneStyles.md">ScrollPaneStyles</a>;<br>    name: <b>string</b>;<br>}&gt;;</pre>

## Instance members

- [<!--{ref:property}-->title](ScrollPane_base_title.md) \
    The title of the scroll pane.
- [<!--{ref:property}-->titleIcon](ScrollPane_base_titleIcon.md) \
    The icon displayed next to the title.
- [<!--{ref:property}-->navigateBack](ScrollPane_base_navigateBack.md) \
    True if a back navigation button should be shown, or an event to emit when clicked (other than `NavigateBack`).
- [<!--{ref:property}-->showMenu](ScrollPane_base_showMenu.md) \
    True if a menu button should be shown (instead of back button), or an event to emit when clicked (other than `ShowMenu`).
- [<!--{ref:property}-->headerMode](ScrollPane_base_headerMode.md) \
    The type of header behavior: none (no header), fixed, or dynamic with scroll; defaults to dynamic.
- [<!--{ref:property}-->styles](ScrollPane_base_styles.md) \
    A set of styles that are applied to this composite, an instance of [ScrollPaneStyles](ScrollPaneStyles.md).
- [<!--{ref:property}-->name](ScrollPane_base_name.md) \
    UI component identifier.