# LoadingStateView (base)

> Base type for `LoadingStateView`.

<pre class="docgen_signature"><b>const</b> LoadingStateView_base: UIComponent.DefinedUIComponent&lt;{<br>    text?: BindingOrValue&lt;StringConvertible&gt; | <b>undefined</b>;<br>    title?: BindingOrValue&lt;StringConvertible&gt; | <b>undefined</b>;<br>    styles?: ConfigOptions.Arg&lt;<a href="LoadingStateViewStyles.md">LoadingStateViewStyles</a>&gt; | <b>undefined</b>;<br>    view?: BindingOrValue&lt;View | <b>undefined</b>&gt;;<br>}, {<br>    text: StringConvertible;<br>    title: StringConvertible;<br>    styles: <a href="LoadingStateViewStyles.md">LoadingStateViewStyles</a>;<br>    view: View | <b>undefined</b>;<br>}&gt;;</pre>

## Instance members

- [<!--{ref:property}-->text](LoadingStateView_base_text.md) \
    The text to display.
- [<!--{ref:property}-->title](LoadingStateView_base_title.md) \
    The title to display.
- [<!--{ref:property}-->styles](LoadingStateView_base_styles.md) \
    A set of styles that are applied to this composite, an instance of [LoadingStateViewStyles](LoadingStateViewStyles.md).
- [<!--{ref:property}-->view](LoadingStateView_base_view.md) \
    The (bound) content view to display, hiding the loading state view when defined.