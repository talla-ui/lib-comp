# PageNavButton (base)

> Base type for `PageNavButton`.

<pre class="docgen_signature"><b>const</b> PageNavButton_base: ViewComposite.DefinedViewComposite&lt;{<br>    pageId?: BindingOrValue&lt;<b>string</b> | <b>undefined</b>&gt;;<br>    label?: BindingOrValue&lt;StringConvertible&gt; | <b>undefined</b>;<br>    icon?: BindingOrValue&lt;UIIconResource | <b>undefined</b>&gt;;<br>    iconMargin?: BindingOrValue&lt;<b>number</b>&gt; | <b>undefined</b>;<br>    iconSize?: BindingOrValue&lt;<b>number</b>&gt; | <b>undefined</b>;<br>    chevron?: BindingOrValue&lt;&quot;next&quot; | &quot;up&quot; | &quot;down&quot; | &quot;back&quot; | <b>undefined</b>&gt;;<br>    width?: BindingOrValue&lt;<b>string</b> | <b>number</b> | <b>undefined</b>&gt;;<br>}, {<br>    pageId: <b>string</b> | <b>undefined</b>;<br>    label: StringConvertible;<br>    icon: UIIconResource | <b>undefined</b>;<br>    iconMargin: <b>number</b>;<br>    iconSize: <b>number</b>;<br>    chevron: &quot;up&quot; | &quot;down&quot; | &quot;next&quot; | &quot;back&quot; | <b>undefined</b>;<br>    width: <b>string</b> | <b>number</b> | <b>undefined</b>;<br>}&gt;;</pre>

## Instance members

- [<!--{ref:property}-->pageId](PageNavButton_base_pageId.md) \
    The page ID to associate with this button.
- [<!--{ref:property}-->label](PageNavButton_base_label.md) \
    The button label.
- [<!--{ref:property}-->icon](PageNavButton_base_icon.md) \
    The button icon, if any.
- [<!--{ref:property}-->iconMargin](PageNavButton_base_iconMargin.md) \
    The margin between the button icon and label, defaults to 16.
- [<!--{ref:property}-->iconSize](PageNavButton_base_iconSize.md) \
    The button icon size, defaults to 20.
- [<!--{ref:property}-->chevron](PageNavButton_base_chevron.md) \
    The button chevron, if any.
- [<!--{ref:property}-->width](PageNavButton_base_width.md) \
    The button width, if different from the width defined in [NavContainerStyles.navButtonStyle](NavContainerStyles_navButtonStyle.md).