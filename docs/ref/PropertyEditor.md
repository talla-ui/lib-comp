[View composites](../index.md)

# class PropertyEditor

> View composite for a property editor.

<pre class="docgen_signature"><b>class</b> PropertyEditor <b>extends</b> <a href="PropertyEditor_base.md">PropertyEditor_base</a>;</pre>

## Description

A property editor composite displays a two-column table with property labels and input fields, allowing the user to inspect and edit several values using a keyboard-friendly grid.

Property values may include text, numbers, booleans, and other values that may be selected from a list of options. Alternatively, a custom action event may be specified that is emitted when the user clicks a button next to a label that shows the current value.

Properties are added to the editor composite using a list of objects, which include the property ID, name, value, and input or action options.

> **Note**\
> If properties are added using a managed list (with property items that are described by `ManagedObject` instances), changes can be handled using an event listener on the list itself. When a field value is updated by the user, the property editor emits a change event. Otherwise, changes will have to be handled by listening for the `Change` event from the property editor view.

**Events**
- `Change` is emitted when a property value has changed. The updated [PropertyEditorItem](PropertyEditorItem.md) and its new value are included in the event data as `item` and `value`, respectively.
- Custom action events are emitted with the [PropertyEditorItem](PropertyEditorItem.md) and current value included in the event data as `item` and `value`.
- Managed object change events are emitted on property items where possible (see above).

## Instance members

- [<!--{ref:method}-->serialize()](PropertyEditor_serialize.md) \
    Returns a plain object with all property values as described by [items](PropertyEditor_base_items.md).

## Inherited members

- [<!--{ref:property}-->items](PropertyEditor_base_items.md) \
    The list of properties to display and edit, as an array or managed list of [PropertyEditorItem](PropertyEditorItem.md) objects.
- [<!--{ref:property}-->widths](PropertyEditor_base_widths.md) \
    The widths of the property name and value columns.
- [<!--{ref:property}-->readOnly](PropertyEditor_base_readOnly.md) \
    True if all properties should be read-only.
- [<!--{ref:property}-->styles](PropertyEditor_base_styles.md) \
    A set of styles that are applied to this composite, an instance of [PropertyEditorStyles](PropertyEditorStyles.md).
- [<!--{ref:property}-->name](PropertyEditor_base_name.md) \
    UI component identifier.

## Related

- [<!--{ref:class}-->class PropertyEditorStyles](PropertyEditorStyles.md) \
    Style configuration for a [PropertyEditor](PropertyEditor.md) composite.
- [<!--{ref:type}-->type PropertyEditorItem](PropertyEditorItem.md) \
    Describes a property item to be edited using a [PropertyEditor](PropertyEditor.md).