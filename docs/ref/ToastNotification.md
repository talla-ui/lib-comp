[UI components](../index.md)

# class ToastNotification

> Component that represents a popup 'toast' notification.

<pre class="docgen_signature"><b>class</b> ToastNotification <b>extends</b> <a href="ToastNotification_base.md">ToastNotification_base</a>;</pre>

## Description

A toast notification consists of a small message box that pops up at the bottom of the viewport. This component represents the contents of the messages box.

Toast notifications are meant to be created using the [showToastNotification()](showToastNotification.md) function. This method creates and displays a notification overlay, and waits for user input or a specified timeout before removing it.

Toast notifications may include a title label, message label, button, and an icon (all optional). If a notification has a button, then any clicks from the user on the notification overlay button _or_ labels immediately result in a `true` result from [showToastNotification()](showToastNotification.md). Otherwise, any clicks other than those on the dismiss button are ignored.

## Inherited members

- [<!--{ref:property}-->content](ToastNotification_base_content.md) \
    The content of the notification, an instance of [ToastNotificationOptions](ToastNotificationOptions.md).
- [<!--{ref:property}-->styles](ToastNotification_base_styles.md) \
    The styles used for the notification, an instance of [ToastNotificationStyles](ToastNotificationStyles.md).

## Related

- [<!--{ref:class}-->class ToastNotificationStyles](ToastNotificationStyles.md) \
    Style configuration for a [ToastNotification](ToastNotification.md) component.