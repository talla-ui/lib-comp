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

- [<!--{ref:property}-->editStyles](PropertyEditorStyles_editStyles.md) \
    Styles for edit-in-place (text or number) fields, of type [EditInPlaceStyles](EditInPlaceStyles.md).
- [<!--{ref:property}-->toggleType](PropertyEditorStyles_toggleType.md) \
    The type of toggle used for boolean fields, defaults to checkbox.
- [<!--{ref:property}-->selectFieldButtonStyle](PropertyEditorStyles_selectFieldButtonStyle.md) \
    Style for select field buttons, defaults to borderless design to match text input fields.
- [<!--{ref:property}-->actionCellStyle](PropertyEditorStyles_actionCellStyle.md) \
    Style for action cells (containing a label and button), including focus state.
- [<!--{ref:property}-->tableListStyles](PropertyEditorStyles_tableListStyles.md) \
    Style for the containing table list, defaults to solid background with subtle horizontal separators.