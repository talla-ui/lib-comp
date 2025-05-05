[View composites](../index.md)

# class ProgressDialog

> Activity class for displaying a progress dialog.

<pre class="docgen_signature"><b>class</b> ProgressDialog <b>extends</b> Activity;</pre>

## Description

The progress dialog class is an activity. It shows a modal progress or 'loading' dialog, with an optional title, text, icon, progress bar, and cancel button; blocking the user from interacting with the application until the activity is unlinked.

From your application, progress dialogs should be created and shown using the static [showProgressDialogAsync()](showProgressDialogAsync.md) method, which displays the progress dialog and waits for an asynchronous callback function to complete.

## Instance members

- [<!--{ref:property}-->icon](ProgressDialog_icon.md) \
    Icon to display in the dialog, if any.
- [<!--{ref:property}-->title](ProgressDialog_title.md) \
    Title text of the dialog, if any.
- [<!--{ref:property}-->progressText](ProgressDialog_progressText.md) \
    Text describing the current progress, if any.
- [<!--{ref:property}-->progress](ProgressDialog_progress.md) \
    Progress value, between 0 and 1.
- [<!--{ref:property}-->cancelable](ProgressDialog_cancelable.md) \
    True if the dialog can be canceled.
- [<!--{ref:property}-->canceled](ProgressDialog_canceled.md) \
    True if the dialog has been canceled.