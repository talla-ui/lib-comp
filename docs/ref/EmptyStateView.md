[View composites](../index.md)

# EmptyStateView

> View composite for an empty state view.

<pre class="docgen_signature"><b>const</b> EmptyStateView: ViewComposite.DefinedViewComposite&lt;{<br>    hidden?: BindingOrValue&lt;<b>boolean</b>&gt; | <b>undefined</b>;<br>    icon?: BindingOrValue&lt;UIIconResource | <b>undefined</b>&gt;;<br>    title?: BindingOrValue&lt;StringConvertible&gt; | <b>undefined</b>;<br>    helpText?: BindingOrValue&lt;StringConvertible&gt; | <b>undefined</b>;<br>    styles?: ConfigOptions.Arg&lt;<a href="EmptyStateViewStyles.md">EmptyStateViewStyles</a>&gt; | <b>undefined</b>;<br>}, {<br>    hidden: <b>boolean</b>;<br>    icon: UIIconResource | <b>undefined</b>;<br>    title: StringConvertible;<br>    helpText: StringConvertible;<br>    styles: <a href="EmptyStateViewStyles.md">EmptyStateViewStyles</a>;<br>}&gt;;</pre>

## Description

An empty state view composite combines a title label, an icon, and help text (all optional), as a placeholder for content that is missing or has yet to be created.

The 'search' icon is used by default if no icon is specified. Additional content may be added to the empty state view, such as a button to allow the user to add an item in the current context.

## Instance members

- [<!--{ref:property}-->hidden](EmptyStateView_hidden.md) \
    True if the empty state view should not be rendered.
- [<!--{ref:property}-->icon](EmptyStateView_icon.md) \
    The icon to display (overrides the default icon in styles).
- [<!--{ref:property}-->title](EmptyStateView_title.md) \
    The title text to display.
- [<!--{ref:property}-->helpText](EmptyStateView_helpText.md) \
    The help text to display.
- [<!--{ref:property}-->styles](EmptyStateView_styles.md) \
    A set of styles that are applied to this composite, an instance of [EmptyStateViewStyles](EmptyStateViewStyles.md).

## Related

- [<!--{ref:class}-->class EmptyStateViewStyles](EmptyStateViewStyles.md) \
    Style configuration for an [EmptyStateView](EmptyStateView.md) composite.