# LabeledView (base)

> Base type for `LabeledView`.

<pre class="docgen_signature"><b>const</b> LabeledView_base: UIComponent.DefinedUIComponent&lt;{<br>    title?: BindingOrValue&lt;StringConvertible&gt; | <b>undefined</b>;<br>    icon?: BindingOrValue&lt;UIIconResource | <b>undefined</b>&gt;;<br>    styles?: ConfigOptions.Arg&lt;<a href="LabeledViewStyles.md">LabeledViewStyles</a>&gt; | <b>undefined</b>;<br>    focusOnTitlePress?: BindingOrValue&lt;<b>boolean</b>&gt; | <b>undefined</b>;<br>}, {<br>    title: StringConvertible;<br>    icon: UIIconResource | <b>undefined</b>;<br>    styles: <a href="LabeledViewStyles.md">LabeledViewStyles</a>;<br>    focusOnTitlePress: <b>boolean</b>;<br>}&gt;;</pre>

## Instance members

- [<!--{ref:property}-->title](LabeledView_base_title.md) \
    The title label text.
- [<!--{ref:property}-->icon](LabeledView_base_icon.md) \
    The title icon, if any.
- [<!--{ref:property}-->styles](LabeledView_base_styles.md) \
    Styles configuration.
- [<!--{ref:property}-->focusOnTitlePress](LabeledView_base_focusOnTitlePress.md) \
    True if clicking the title label should focus an embedded input element.