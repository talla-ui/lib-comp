# class LabeledView

> View composite that encapsulates a title label in front or above an embedded view.

<pre class="docgen_signature"><b>class</b> LabeledView <b>extends</b> <a href="LabeledView_base.md">LabeledView_base</a>;</pre>

## Description

A labeled view composite combines a title label (with an optional icon), and an embedded view. The label can be shown above the view (vertical layout) or to the side (horizontal layout). The layout is bound to the viewport width so that horizontal layout is selected for wider viewports, as configured using [LabeledViewStyles](LabeledViewStyles.md).

## Inherited members

- [<!--{ref:property}-->title](LabeledView_base_title.md) \
    The title label text.
- [<!--{ref:property}-->icon](LabeledView_base_icon.md) \
    The title icon, if any.
- [<!--{ref:property}-->styles](LabeledView_base_styles.md) \
    Styles configuration.
- [<!--{ref:property}-->focusOnTitlePress](LabeledView_base_focusOnTitlePress.md) \
    True if clicking the title label should focus an embedded input element.