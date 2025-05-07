# class LoadingStateView

> Component for a renderer that displays a loading state placeholder while the bound content view is undefined.

<pre class="docgen_signature"><b>class</b> LoadingStateView <b>extends</b> <a href="LoadingStateView_base.md">LoadingStateView_base</a>;</pre>

## Description

A loading state view component combines an animation and label text, as a placeholder for content that is loading.

The content binding is passed to a <show> (`UIShowView`) instance, so the view needs to be attached to another observed object (e.g. an activity); refer to the `UIShowView` documentation for more information.

## Inherited members

- [<!--{ref:property}-->text](LoadingStateView_base_text.md) \
    The text to display.
- [<!--{ref:property}-->title](LoadingStateView_base_title.md) \
    The title to display.
- [<!--{ref:property}-->styles](LoadingStateView_base_styles.md) \
    A set of styles that are applied to this component, an instance of [LoadingStateViewStyles](LoadingStateViewStyles.md).
- [<!--{ref:property}-->view](LoadingStateView_base_view.md) \
    The (bound) content view to display, hiding the loading state view when defined.

## Related

- [<!--{ref:class}-->class LoadingStateViewStyles](LoadingStateViewStyles.md) \
    Style configuration for an [LoadingStateView](LoadingStateView.md) component.