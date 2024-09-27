[View composites](../index.md)

# class ButtonSwitch

> View composite that represents a button switch.

<pre class="docgen_signature"><b>class</b> ButtonSwitch <b>extends</b> <a href="ButtonSwitch_base.md">ButtonSwitch_base</a>;</pre>

## Description

A button switch composite contains multiple buttons in a row, within a cell that visually groups the buttons together. The button switch has a value, which is reflected by the 'pressed' state of one of the buttons.

The current value of the button switch can be set programmatically using [value](ButtonSwitch_base_value.md), and by the user.

Buttons are added using a preset list of [ButtonSwitchItem](ButtonSwitchItem.md) objects, each containing a value, a label and/or icon.

The button switch composite emits a `Change` event after its value has changed. The new value is included in the `value` property of the event data.

## Examples

```ts
const view = ui.cell(
	// ...
	ui.use(ButtonSwitch, {
		buttons: [{ label: "First" }],
	})
);
```

## Inherited members

- [<!--{ref:property}-->buttons](ButtonSwitch_base_buttons.md) \
    The list of buttons to show, as an array of [ButtonSwitchItem](ButtonSwitchItem.md) objects.
- [<!--{ref:property}-->value](ButtonSwitch_base_value.md) \
    The current value, one of the values from [buttons](ButtonSwitch_base_buttons.md).
- [<!--{ref:property}-->formField](ButtonSwitch_base_formField.md) \
    A form field ID, to add a two-way `FormContext` binding.
- [<!--{ref:property}-->styles](ButtonSwitch_base_styles.md) \
    A set of styles that are applied to this composite, an instance of [ButtonSwitchStyles](ButtonSwitchStyles.md).
- [<!--{ref:property}-->name](ButtonSwitch_base_name.md) \
    UI component identifier.
- [<!--{ref:property}-->accessibleLabel](ButtonSwitch_base_accessibleLabel.md) \
    UI component accessible label.

## Related

- [<!--{ref:type}-->type ButtonSwitchItem](ButtonSwitchItem.md) \
    An object that describes a button that's displayed within a [ButtonSwitch](ButtonSwitch.md) composite.
- [<!--{ref:class}-->class ButtonSwitchStyles](ButtonSwitchStyles.md) \
    Style configuration for a [ButtonSwitch](ButtonSwitch.md) composite.