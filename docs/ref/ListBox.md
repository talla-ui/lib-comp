[UI components](../index.md)

# class ListBox

> Component for a list box.

<pre class="docgen_signature"><b>class</b> ListBox <b>extends</b> <a href="ListBox_base.md">ListBox_base</a>;</pre>

## Description

A list box component arranges a list of options within a scrollable cell, allowing the user to select one of the options.

The currently selected list box option can also be set programmatically using its value.

List box options are added using a list of objects, each containing a value, a label, and optionally an icon.

> **Note**\
> A keyboard-friendly list box relies on visibility of focus outlines. By default, item focus outlines may be clipped by the surrounding (scrolling) list box, if they can't be controlled using CSS styles. Be sure to test keyboard focus, and set an explicit focus outline style at the start of your application.

**Events**
- `Change` is emitted when the value has changed. The new value is included in the `value` property of the event data.
- `ItemSelected` is emitted from the item cell itself when selected. A `Change` event is still emitted afterwards.

## Instance members

- [<!--{ref:method}-->selectItem()](ListBox_selectItem.md) \
    Select the list box item with the specified value, if any.

## Inherited members

- [<!--{ref:property}-->value](ListBox_base_value.md) \
    The current value, one of the values from [items](ListBox_base_items.md).
- [<!--{ref:property}-->items](ListBox_base_items.md) \
    A list of available options, as an array of [ListBoxItem](ListBoxItem.md) objects.
- [<!--{ref:property}-->height](ListBox_base_height.md) \
    The height of the list box.
- [<!--{ref:property}-->width](ListBox_base_width.md) \
    The width of the list box.
- [<!--{ref:property}-->selectOnFocus](ListBox_base_selectOnFocus.md) \
    True if an item should be selected when it receives focus.
- [<!--{ref:property}-->formField](ListBox_base_formField.md) \
    A form field ID, to add a two-way `FormContext` binding.
- [<!--{ref:property}-->styles](ListBox_base_styles.md) \
    A set of styles that are applied to this component, an instance of [ListBoxStyles](ListBoxStyles.md).
- [<!--{ref:property}-->name](ListBox_base_name.md) \
    UI component identifier.
- [<!--{ref:property}-->accessibleLabel](ListBox_base_accessibleLabel.md) \
    UI component accessible label.

## Related

- [<!--{ref:interface}-->interface ListBoxItem](ListBoxItem.md) \
    An object that describes an item in a [ListBox](ListBox.md).
- [<!--{ref:class}-->class ListBoxStyles](ListBoxStyles.md) \
    Style configuration for a [ListBox](ListBox.md) component.