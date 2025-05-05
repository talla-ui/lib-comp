# PageNavButton (base)

> Base type for `PageNavButton`.

<pre class="docgen_signature"><b>const</b> PageNavButton_base: UIComponent.DefinedUIComponent&lt;{<br>    pageId?: BindingOrValue&lt;<b>string</b> | <b>undefined</b>&gt;;<br>    pressed?: BindingOrValue&lt;<b>boolean</b>&gt; | <b>undefined</b>;<br>    label?: BindingOrValue&lt;StringConvertible&gt; | <b>undefined</b>;<br>    icon?: BindingOrValue&lt;UIIconResource | <b>undefined</b>&gt;;<br>    chevron?: BindingOrValue&lt;&quot;next&quot; | &quot;up&quot; | &quot;down&quot; | &quot;back&quot; | <b>undefined</b>&gt;;<br>    width?: BindingOrValue&lt;<b>string</b> | <b>number</b> | <b>undefined</b>&gt;;<br>}, {<br>    pageId: <b>string</b> | <b>undefined</b>;<br>    pressed: <b>boolean</b>;<br>    label: StringConvertible;<br>    icon: UIIconResource | <b>undefined</b>;<br>    chevron: &quot;up&quot; | &quot;down&quot; | &quot;next&quot; | &quot;back&quot; | <b>undefined</b>;<br>    width: <b>string</b> | <b>number</b> | <b>undefined</b>;<br>}&gt;;</pre>

## Instance members

- [<!--{ref:property}-->pageId](PageNavButton_base_pageId.md) \
    The page ID to associate with this button.
- [<!--{ref:property}-->pressed](PageNavButton_base_pressed.md) \
    True to show the button as pressed all the time.
- [<!--{ref:property}-->label](PageNavButton_base_label.md) \
    The button label.
- [<!--{ref:property}-->icon](PageNavButton_base_icon.md) \
    The button icon, if any.
- [<!--{ref:property}-->chevron](PageNavButton_base_chevron.md) \
    The button chevron, if any.
- [<!--{ref:property}-->width](PageNavButton_base_width.md) \
    The button width, if different from the width defined in [NavContainerStyles.navButtonStyle](NavContainerStyles_navButtonStyle.md).