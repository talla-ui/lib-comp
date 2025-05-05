# ValueNavButton (base)

> Base type for `ValueNavButton`.

<pre class="docgen_signature"><b>const</b> ValueNavButton_base: UIComponent.DefinedUIComponent&lt;{<br>    match?: BindingOrValue&lt;<b>string</b> | <b>undefined</b>&gt;;<br>    value?: BindingOrValue&lt;<b>string</b> | <b>undefined</b>&gt;;<br>    label?: BindingOrValue&lt;StringConvertible&gt; | <b>undefined</b>;<br>    icon?: BindingOrValue&lt;UIIconResource | <b>undefined</b>&gt;;<br>    chevron?: BindingOrValue&lt;&quot;next&quot; | &quot;up&quot; | &quot;down&quot; | &quot;back&quot; | <b>undefined</b>&gt;;<br>    width?: BindingOrValue&lt;<b>string</b> | <b>number</b> | <b>undefined</b>&gt;;<br>}, {<br>    match: <b>string</b> | <b>undefined</b>;<br>    value: <b>string</b> | <b>undefined</b>;<br>    label: StringConvertible;<br>    icon: UIIconResource | <b>undefined</b>;<br>    chevron: &quot;up&quot; | &quot;down&quot; | &quot;next&quot; | &quot;back&quot; | <b>undefined</b>;<br>    width: <b>string</b> | <b>number</b> | <b>undefined</b>;<br>}&gt;;</pre>

## Instance members

- [<!--{ref:property}-->match](ValueNavButton_base_match.md) \
    The value to compare against the current value (should be bound).
- [<!--{ref:property}-->value](ValueNavButton_base_value.md) \
    The value to associate with this button.
- [<!--{ref:property}-->label](ValueNavButton_base_label.md) \
    The button label.
- [<!--{ref:property}-->icon](ValueNavButton_base_icon.md) \
    The button icon, if any.
- [<!--{ref:property}-->chevron](ValueNavButton_base_chevron.md) \
    The button chevron, if any.
- [<!--{ref:property}-->width](ValueNavButton_base_width.md) \
    The button width, if different from the width defined in [NavContainerStyles.navButtonStyle](NavContainerStyles_navButtonStyle.md).