[View composites](../index.md)

# FormEntry

> View composite for a form entry block.

<pre class="docgen_signature"><b>const</b> FormEntry: UIComponent.DefinedUIComponent&lt;{<br>    label?: BindingOrValue&lt;StringConvertible&gt; | <b>undefined</b>;<br>    helpText?: BindingOrValue&lt;StringConvertible&gt; | <b>undefined</b>;<br>    errorText?: BindingOrValue&lt;StringConvertible&gt; | <b>undefined</b>;<br>    errorFormField?: BindingOrValue&lt;<b>string</b> | <b>undefined</b>&gt;;<br>    width?: BindingOrValue&lt;<b>string</b> | <b>number</b> | <b>undefined</b>&gt;;<br>}, {<br>    label: StringConvertible;<br>    helpText: StringConvertible;<br>    errorText: StringConvertible;<br>    errorFormField: <b>string</b> | <b>undefined</b>;<br>    width: <b>number</b> | <b>string</b> | <b>undefined</b>;<br>}&gt;;</pre>

## Description

A form entry composite groups together a form input field and several labels for field names, help text, and/or error messages.

The contained form field can be of any type, including built-in components (i.e. text field, toggle) and view composites such as [ButtonSwitch](ButtonSwitch.md), [SelectField](SelectField.md), and [DateInputField](DateInputField.md).

**Events** — All events from the contained form field and labels are delegated by this view composite.

## Instance members

- [<!--{ref:property}-->label](FormEntry_label.md) \
    Text for the field name label.
- [<!--{ref:property}-->helpText](FormEntry_helpText.md) \
    Help text, displayed underneath the input element (e.g. format hints or other requirements).
- [<!--{ref:property}-->errorText](FormEntry_errorText.md) \
    Error text, displayed underneath the input element and help text.
- [<!--{ref:property}-->errorFormField](FormEntry_errorFormField.md) \
    A form field ID, to bind the error text to a `FormContext` field validation error.
- [<!--{ref:property}-->width](FormEntry_width.md) \
    The width of the container that groups all elements.