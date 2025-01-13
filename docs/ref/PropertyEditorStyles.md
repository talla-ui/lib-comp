[class PropertyEditor](PropertyEditor.md)

# class PropertyEditorStyles

> Style configuration for a [PropertyEditor](PropertyEditor.md) composite.

<pre class="docgen_signature"><b>class</b> PropertyEditorStyles <b>extends</b> ConfigOptions;</pre>

## Description

Objects of this type are passed to [PropertyEditor](PropertyEditor.md) as the `styles` preset property.

## Static members

- [<!--{ref:property}-->PropertyEditorStyles.default](PropertyEditorStyles_default.md) <!--{refchip:static}-->\
    Default styles that are used when no other styles are specified.

## Instance members

- [<!--{ref:property}-->propertyLabelWidth](PropertyEditorStyles_propertyLabelWidth.md) \
    Default width of the property name column, defaults to undefined for even split.
- [<!--{ref:property}-->propertyLabelMaxWidth](PropertyEditorStyles_propertyLabelMaxWidth.md) \
    Maximum width of the property name column, defaults to 320.
- [<!--{ref:property}-->propertyLabelStyle](PropertyEditorStyles_propertyLabelStyle.md) \
    Label style for the property name.
- [<!--{ref:property}-->editStyles](PropertyEditorStyles_editStyles.md) \
    Styles for edit-in-place (text or number) fields, of type [EditInPlaceStyles](EditInPlaceStyles.md).
- [<!--{ref:property}-->toggleType](PropertyEditorStyles_toggleType.md) \
    The type of toggle used for boolean fields, defaults to checkbox.
- [<!--{ref:property}-->selectFieldStyles](PropertyEditorStyles_selectFieldStyles.md) \
    Styles for select fields, of type [SelectFieldStyles](SelectFieldStyles.md), defaults to a style with full-width transparent buttons.
- [<!--{ref:property}-->actionCellStyle](PropertyEditorStyles_actionCellStyle.md) \
    Style for action cells (containing a label and button), including focus state.
- [<!--{ref:property}-->actionLabelStyle](PropertyEditorStyles_actionLabelStyle.md) \
    Style for action labels, defaults to theme label style.
- [<!--{ref:property}-->actionLabelIconSize](PropertyEditorStyles_actionLabelIconSize.md) \
    Icon size (in pixels or string with unit) for action labels, defaults to 16.
- [<!--{ref:property}-->tableListStyles](PropertyEditorStyles_tableListStyles.md) \
    Style for the containing table list, defaults to solid background with subtle horizontal separators.