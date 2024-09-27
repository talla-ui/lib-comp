[View composites](../index.md)

# class ModalInputDialog

> Base activity for a modal input dialog.

<pre class="docgen_signature"><b>class</b> ModalInputDialog <b>extends</b> Activity;</pre>

## Description

The modal input dialog base activity class can be extended to create an activity that shows a form dialog, with confirm and cancel buttons.

The base class handles `Confirm`, `Cancel`, and escape key press events, by calling either the [confirm()](ModalInputDialog_confirm.md) or [cancel()](ModalInputDialog_cancel.md) methods — which can be overridden if needed. By default, [cancel()](ModalInputDialog_cancel.md) immediately unlinks the activity; [confirm()](ModalInputDialog_confirm.md) calls the [validate()](ModalInputDialog_validate.md) method, and if that returns true, unlinks the activity as well. Both methods emit different events before unlinking (see below). On the base class, the [validate()](ModalInputDialog_validate.md) method uses `FormContext` validation to determine if all inputs are valid before returning true.

On an extended modal input dialog class:
- Add a constructor to set form values and add validation rules to `formContext`
- Add a `createView` method that returns the content of the dialog
- In the view, include buttons that emit `Confirm` and `Cancel` events
- If needed, override the [validate()](ModalInputDialog_validate.md) method to add more validation logic

From elsewhere in your application, the resulting dialog activity should be created and attached to a parent activity, and displayed using the [showDialogAsync()](ModalInputDialog_showDialogAsync.md) method. This method returns the (then unlinked) activity instance if the user performed the Confirm action, or undefined otherwise. It also accepts a callback to perform any actions before the dialog is unlinked.

## Constructor

- [<!--{ref:constructor}-->new ModalInputDialog()](ModalInputDialog_constructor.md) \
    Creates a new modal input dialog, should be overridden to initialize the form context.

## Instance members

- [<!--{ref:property}-->formContext](ModalInputDialog_formContext.md) \
    An empty form context without validation rules, should be initialized by the constructor.
- [<!--{ref:method}-->delegate()](ModalInputDialog_delegate.md) \
    Delegates Confirm, Cancel, and EscapeKeyPress events from the view.
- [<!--{ref:method}-->showDialogAsync()](ModalInputDialog_showDialogAsync.md) \
    Displays the dialog view and waits for user input.
- [<!--{ref:method}-->validate()](ModalInputDialog_validate.md) <!--{refchip:protected}-->\
    Validates the current inputs.
- [<!--{ref:method}-->confirm()](ModalInputDialog_confirm.md) <!--{refchip:protected}-->\
    Unlinks the activity if the current inputs are valid.
- [<!--{ref:method}-->cancel()](ModalInputDialog_cancel.md) <!--{refchip:protected}-->\
    Unlinks the activity.