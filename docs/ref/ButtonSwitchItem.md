[class ButtonSwitch](ButtonSwitch.md)

# type ButtonSwitchItem

> An object that describes a button that's displayed within a [ButtonSwitch](ButtonSwitch.md) component.

<pre class="docgen_signature"><b>type</b> ButtonSwitchItem = {<br>    default?: <b>boolean</b>;<br>    value?: <b>unknown</b>;<br>    label?: StringConvertible;<br>    icon?: UIIconResource;<br>};</pre>

## Description

Objects of this type are passed to [ButtonSwitch](ButtonSwitch.md) as the `buttons` preset property.

The [value](ButtonSwitchItem_value.md) property is used to determine which button should be displayed in 'pressed' state, as well as to set the `value` property of the button switch itself when the button is pressed by the user.

## Instance members

- [<!--{ref:property}-->default](ButtonSwitchItem_default.md) \
    True if this button should be pressed if the switch value is undefined.
- [<!--{ref:property}-->value](ButtonSwitchItem_value.md) \
    The associated button switch value.
- [<!--{ref:property}-->label](ButtonSwitchItem_label.md) \
    The switch button label.
- [<!--{ref:property}-->icon](ButtonSwitchItem_icon.md) \
    The switch button icon.