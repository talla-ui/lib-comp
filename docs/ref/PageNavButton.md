[class NavColumn](NavColumn.md)

# class PageNavButton

> View composite that encapsulates a page navigation button.

<pre class="docgen_signature"><b>class</b> PageNavButton <b>extends</b> <a href="PageNavButton_base.md">PageNavButton_base</a>;</pre>

## Description

A page navigation button is used within a [NavColumn](NavColumn.md) or [NavRow](NavRow.md) to represent a specific page ID. The button emits a `Navigate` event when pressed, and the button appears 'pressed' if the current page matches the button's page ID.

## Instance members

- [<!--{ref:property}-->navigateTo](PageNavButton_navigateTo.md) <!--{refchip:protected}-->\
    Button navigation target, bound to button itself.
- [<!--{ref:property}-->text](PageNavButton_text.md) <!--{refchip:protected}-->\
    This property is set from JSX content, if any; copied to [label](PageNavButton_base_label.md).

## Inherited members

- [<!--{ref:property}-->pageId](PageNavButton_base_pageId.md) \
    The page ID to associate with this button.
- [<!--{ref:property}-->label](PageNavButton_base_label.md) \
    The button label.
- [<!--{ref:property}-->icon](PageNavButton_base_icon.md) \
    The button icon, if any.
- [<!--{ref:property}-->iconMargin](PageNavButton_base_iconMargin.md) \
    The margin between the button icon and label, defaults to 16.
- [<!--{ref:property}-->iconSize](PageNavButton_base_iconSize.md) \
    The button icon size, defaults to 20.
- [<!--{ref:property}-->chevron](PageNavButton_base_chevron.md) \
    The button chevron, if any.
- [<!--{ref:property}-->width](PageNavButton_base_width.md) \
    The button width, if different from the width defined in [NavContainerStyles.navButtonStyle](NavContainerStyles_navButtonStyle.md).