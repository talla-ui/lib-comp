[class PropertyEditor](PropertyEditor.md)

# type PropertyEditorItem

> Describes a property item to be edited using a [PropertyEditor](PropertyEditor.md).

<pre class="docgen_signature"><b>type</b> PropertyEditorItem = {<br>    id?: <b>string</b>;<br>    name: StringConvertible;<br>    value?: <b>unknown</b>;<br>    options?: <a href="SelectFieldOption.md">SelectFieldOption</a>[];<br>    action?: <b>string</b>;<br>    actionLabel?: StringConvertible;<br>    icon?: UIIconResource;<br>    readOnly?: <b>boolean</b>;<br>    <b>number</b>?: <b>boolean</b>;<br>    integer?: <b>boolean</b>;<br>    positive?: <b>boolean</b>;<br>};</pre>

## Instance members

- [<!--{ref:property}-->id](PropertyEditorItem_id.md) \
    Property identifier (optional).
- [<!--{ref:property}-->name](PropertyEditorItem_name.md) \
    Display name of the property.
- [<!--{ref:property}-->value](PropertyEditorItem_value.md) \
    Current value of the property.
- [<!--{ref:property}-->options](PropertyEditorItem_options.md) \
    List of options, for select fields.
- [<!--{ref:property}-->action](PropertyEditorItem_action.md) \
    Custom action event name.
- [<!--{ref:property}-->actionLabel](PropertyEditorItem_actionLabel.md) \
    Label to be displayed along with the action (if blank, uses value).
- [<!--{ref:property}-->icon](PropertyEditorItem_icon.md) \
    Icon to be displayed in front of the value.
- [<!--{ref:property}-->readOnly](PropertyEditorItem_readOnly.md) \
    True if the property may not be edited by the user.
- [<!--{ref:property}-->number](PropertyEditorItem_number.md) \
    True if the property value must be a number.
- [<!--{ref:property}-->integer](PropertyEditorItem_integer.md) \
    True if the property value must be an integer.
- [<!--{ref:property}-->positive](PropertyEditorItem_positive.md) \
    True if the property value must be a positive number.