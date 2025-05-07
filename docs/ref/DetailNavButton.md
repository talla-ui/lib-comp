[class NavColumn](NavColumn.md)

# class DetailNavButton

> Component that encapsulates a detail navigation button.

<pre class="docgen_signature"><b>class</b> DetailNavButton <b>extends</b> <a href="DetailNavButton_base.md">DetailNavButton_base</a>;</pre>

## Description

A detail navigation button is used within a [NavColumn](NavColumn.md) or [NavRow](NavRow.md) to represent a specific navigation detail path. The button emits a `Navigate` event when pressed, and the button appears 'pressed' if the current detail path matches the button's path.

## Instance members

- [<!--{ref:property}-->navigateTo](DetailNavButton_navigateTo.md) <!--{refchip:protected}-->\
    Button navigation target, bound to button itself.
- [<!--{ref:property}-->text](DetailNavButton_text.md) <!--{refchip:protected}-->\
    This property is set from JSX content, if any; copied to [label](DetailNavButton_base_label.md).

## Inherited members

- [<!--{ref:property}-->detail](DetailNavButton_base_detail.md) \
    The detail path to associate with this button.
- [<!--{ref:property}-->pressed](DetailNavButton_base_pressed.md) \
    True to show the button as pressed all the time.
- [<!--{ref:property}-->label](DetailNavButton_base_label.md) \
    The button label.
- [<!--{ref:property}-->icon](DetailNavButton_base_icon.md) \
    The button icon, if any.
- [<!--{ref:property}-->chevron](DetailNavButton_base_chevron.md) \
    The button chevron, if any.
- [<!--{ref:property}-->width](DetailNavButton_base_width.md) \
    The button width, if different from the width defined in [NavContainerStyles.navButtonStyle](NavContainerStyles_navButtonStyle.md).