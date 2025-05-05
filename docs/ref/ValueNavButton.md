# class ValueNavButton

> View composite that encapsulates a value-backed navigation button.

<pre class="docgen_signature"><b>class</b> ValueNavButton <b>extends</b> <a href="ValueNavButton_base.md">ValueNavButton_base</a>;</pre>

## Description

A value-backed navigation button is used within a [NavColumn](NavColumn.md) or [NavRow](NavRow.md) to represent a specific bound value. The button emits a regular `Click` event when pressed, which includes the button's value, and the button appears 'pressed' if the current value matches the button's value.

## Instance members

- [<!--{ref:property}-->text](ValueNavButton_text.md) <!--{refchip:protected}-->\
    This property is set from JSX content, if any; copied to [label](ValueNavButton_base_label.md).

## Inherited members

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