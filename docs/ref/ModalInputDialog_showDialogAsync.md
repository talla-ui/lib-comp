[class ModalInputDialog](ModalInputDialog.md)

# showDialogAsync()

> Displays the dialog view and waits for user input.

<pre class="docgen_signature">showDialogAsync(callback?: (confirmed: <b>boolean</b>) =&gt; <b>void</b>): Promise&lt;<b>this</b> | <b>undefined</b>&gt;;</pre>

### Parameters

- **callback** — A callback that will be invoked with a true or false parameter when the user confirms or cancels, before the activity is unlinked

### Return value

A promise that resolves to the activity itself if confirmed; undefined otherwise

## Related

- [<!--{ref:class}-->class ModalInputDialog](ModalInputDialog.md) \
    Base activity for a modal input dialog.
