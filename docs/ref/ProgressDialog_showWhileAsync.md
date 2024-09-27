[class ProgressDialog](ProgressDialog.md)

# ProgressDialog.showWhileAsync()

> Displays a progress dialog while executing an asynchronous function.

<pre class="docgen_signature">static showWhileAsync&lt;T&gt;(f: (dialog: <a href="ProgressDialog.md">ProgressDialog</a>) =&gt; Promise&lt;T&gt;): Promise&lt;T&gt;;</pre>

### Parameters

- **f** — - Asynchronous function to execute while showing the dialog; receives the activity as a single argument to update its properties dynamically

### Return value

The result of the asynchronous function

## Related

- [<!--{ref:class}-->class ProgressDialog](ProgressDialog.md) \
    Activity class for displaying a progress dialog.
