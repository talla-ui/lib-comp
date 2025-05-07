# ProgressBar (base)

> Base type for `ProgressBar`.

<pre class="docgen_signature"><b>const</b> ProgressBar_base: UIComponent.DefinedUIComponent&lt;{<br>    progress?: BindingOrValue&lt;<b>number</b>&gt; | <b>undefined</b>;<br>    margin?: BindingOrValue&lt;UIRenderable.Offsets&gt; | <b>undefined</b>;<br>    styles?: ConfigOptions.Arg&lt;<a href="ProgressBarStyles.md">ProgressBarStyles</a>&gt; | <b>undefined</b>;<br>}, {<br>    progress: <b>number</b>;<br>    margin: UIRenderable.Offsets;<br>    styles: <a href="ProgressBarStyles.md">ProgressBarStyles</a>;<br>}&gt;;</pre>

## Instance members

- [<!--{ref:property}-->progress](ProgressBar_base_progress.md) \
    The current progress value, between 0 and 1.
- [<!--{ref:property}-->margin](ProgressBar_base_margin.md) \
    Margin around the outer container, defaults to 0.
- [<!--{ref:property}-->styles](ProgressBar_base_styles.md) \
    A set of styles that are applied to this component, an instance of [ProgressBarStyles](ProgressBarStyles.md).