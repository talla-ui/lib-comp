# DetailNavButton (base)

> Base type for `DetailNavButton`.

<pre class="docgen_signature"><b>const</b> DetailNavButton_base: ViewComposite.DefinedViewComposite&lt;{<br>    detail?: BindingOrValue&lt;<b>string</b> | <b>undefined</b>&gt;;<br>    label?: BindingOrValue&lt;StringConvertible&gt; | <b>undefined</b>;<br>    icon?: BindingOrValue&lt;UIIconResource | <b>undefined</b>&gt;;<br>    iconMargin?: BindingOrValue&lt;<b>number</b>&gt; | <b>undefined</b>;<br>    iconSize?: BindingOrValue&lt;<b>number</b>&gt; | <b>undefined</b>;<br>    chevron?: BindingOrValue&lt;&quot;next&quot; | &quot;up&quot; | &quot;down&quot; | &quot;back&quot; | <b>undefined</b>&gt;;<br>    width?: BindingOrValue&lt;<b>string</b> | <b>number</b> | <b>undefined</b>&gt;;<br>}, {<br>    detail: <b>string</b> | <b>undefined</b>;<br>    label: StringConvertible;<br>    icon: UIIconResource | <b>undefined</b>;<br>    iconMargin: <b>number</b>;<br>    iconSize: <b>number</b>;<br>    chevron: &quot;up&quot; | &quot;down&quot; | &quot;next&quot; | &quot;back&quot; | <b>undefined</b>;<br>    width: <b>string</b> | <b>number</b> | <b>undefined</b>;<br>}&gt;;</pre>

## Instance members

- [<!--{ref:property}-->detail](DetailNavButton_base_detail.md) \
    The detail path to associate with this button.
- [<!--{ref:property}-->label](DetailNavButton_base_label.md) \
    The button label.
- [<!--{ref:property}-->icon](DetailNavButton_base_icon.md) \
    The button icon, if any.
- [<!--{ref:property}-->iconMargin](DetailNavButton_base_iconMargin.md) \
    The margin between the button icon and label, defaults to 16.
- [<!--{ref:property}-->iconSize](DetailNavButton_base_iconSize.md) \
    The button icon size, defaults to 20.
- [<!--{ref:property}-->chevron](DetailNavButton_base_chevron.md) \
    The button chevron, if any.
- [<!--{ref:property}-->width](DetailNavButton_base_width.md) \
    The button width, if different from the width defined in [NavContainerStyles.navButtonStyle](NavContainerStyles_navButtonStyle.md).