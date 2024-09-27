# function showToastNotification()

> Shows a toast notification with the provided content and options.

<pre class="docgen_signature">function showToastNotification(content: <b>string</b> | ConfigOptions.Arg&lt;<a href="ToastNotificationOptions.md">ToastNotificationOptions</a>&gt;, styles?: ConfigOptions.Arg&lt;<a href="ToastNotificationStyles.md">ToastNotificationStyles</a>&gt;): Promise&lt;<b>boolean</b>&gt;;</pre>

### Parameters

- **options** — The notification content, options, and timeout

### Return value

A promise that resolves to true if the options include a button text and the user clicked either the button or the notification itself; false otherwise

## Description

This function creates and renders a toast notification, then removes it when the user interacts with it or after the specified timeout.