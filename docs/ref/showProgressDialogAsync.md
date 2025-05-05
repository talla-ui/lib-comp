# function showProgressDialogAsync()

> Displays a [ProgressDialog](ProgressDialog.md) while executing an asynchronous function.

<pre class="docgen_signature">function showProgressDialogAsync&lt;T&gt;(f: (dialog: <a href="ProgressDialog.md">ProgressDialog</a>) =&gt; Promise&lt;T&gt;, onCancel?: () =&gt; Error | <b>undefined</b> | <b>void</b>): Promise&lt;T&gt;;</pre>

### Parameters

- **f** — - Asynchronous function to execute while showing the dialog; receives the activity as a single argument to update its properties dynamically
- **onCancel** — - Callback function that's invoked when the user presses the Cancel button, may return an error that's used to reject the promise result (otherwise, the promise is not rejected)

### Return value

The result of the asynchronous function