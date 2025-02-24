import {
	app,
	ConfigOptions,
	StringConvertible,
	ui,
	UIIconResource,
	UIComponent,
} from "talla-ui";

/** The (localizable) content of a {@link ToastNotification} message box */
export class ToastNotificationOptions extends ConfigOptions {
	/** The notification icon, if any */
	icon?: UIIconResource | undefined;
	/** The notification title, if any */
	title?: StringConvertible;
	/** The notification message, if any */
	message?: StringConvertible;
	/** The notification button text, if any */
	buttonLabel?: StringConvertible;
	/** The timeout after which the notification is removed automatically, in ms; defaults to 5000 */
	timeout = 5000;
}

/**
 * Style configuration for a {@link ToastNotification} composite
 *
 * Objects of this type are passed to the {@link showToastNotification()} method.
 */
export class ToastNotificationStyles extends ConfigOptions {
	/** Default styles that are used when no other styles are specified */
	static default = new ToastNotificationStyles();

	/** The notification background color, defaults to semi-transparent text color to contrast with the page background */
	background = ui.color.TEXT.alpha(0.9);

	/** Notification alignment relative to the viewport, defaults to center */
	align = "center" as "start" | "center" | "end";

	/** Distance from the viewport bottom, defaults to 24 */
	bottomInset = 24;

	/** Notification width, defaults to 400 */
	width = 400;
}

/**
 * Shows a toast notification with the provided content and options
 *
 * This function creates and renders a toast notification, then removes it when the user interacts with it or after the specified timeout.
 *
 * @param options The notification content, options, and timeout
 * @returns A promise that resolves to true if the options include a button text and the user clicked either the button or the notification itself; false otherwise
 */
export async function showToastNotification(
	content: string | ConfigOptions.Arg<ToastNotificationOptions>,
	styles: ConfigOptions.Arg<ToastNotificationStyles> = ToastNotificationStyles.default
): Promise<boolean> {
	let _content = ToastNotificationOptions.init(
		typeof content === "string" ? { message: content } : content
	);
	let _styles = ToastNotificationStyles.init(styles);
	let t = new ToastNotification({ content: _content, styles: _styles });
	app.render(t, {
		mode: "overlay",
		transform: {
			show: ui.animation.FADE_IN_UP,
			hide: ui.animation.FADE_OUT_DOWN,
		},
	});
	if (_content.timeout) {
		setTimeout(() => t.unlink(), _content.timeout);
	}
	for await (let e of t.listen(true)) {
		if (_content.buttonLabel && (e.name === "Press" || e.name === "Click")) {
			t.unlink();
			return true;
		}
	}
	return false;
}

/**
 * View composite that represents a popup 'toast' notification
 *
 * A toast notification consists of a small message box that pops up at the bottom of the viewport. This view composite represents the contents of the messages box.
 *
 * Toast notifications are meant to be created using the {@link showToastNotification()} function. This method creates and displays a notification overlay, and waits for user input or a specified timeout before removing it.
 *
 * Toast notifications may include a title label, message label, button, and an icon (all optional). If a notification has a button, then any clicks from the user on the notification overlay button _or_ labels immediately result in a `true` result from {@link showToastNotification()}. Otherwise, any clicks other than those on the dismiss button are ignored.
 *
 * @see {@link ToastNotificationStyles}+
 */
export class ToastNotification extends UIComponent.define({
	/** The content of the notification, an instance of {@link ToastNotificationOptions} */
	content: {} as ToastNotificationOptions,
	/** The styles used for the notification, an instance of {@link ToastNotificationStyles} */
	styles: ToastNotificationStyles.default,
}) {
	createView() {
		let start: number | string | undefined;
		let end: number | string | undefined;
		let inset = app.renderer?.viewport.col2 ? 16 : 8;
		if (this.styles.align === "start") start = inset;
		else if (this.styles.align === "end") end = inset;
		else start = end = "50%";

		return ui
			.cell(
				{
					layout: { clip: false },
					position: {
						bottom: this.styles.bottomInset,
						start,
						end,
						gravity: "overlay",
					},
				},
				ui.cell(
					{
						name: "ToastNotification",
						accessibleRole: "alert",
						style: {
							width: this.styles.width,
							maxWidth: (app.renderer?.viewport.width || 400) * 0.95,
						},
						layout: { axis: "horizontal", gravity: "center" },
						position: { gravity: "center" },
						background: this.styles.background,
						textColor: this.styles.background.text(),
						padding: 8,
						borderRadius: 8,
						effect: ui.effect.ELEVATE,
					},
					ui.spacer({ width: 8 }),
					ui.label({
						icon: this.content.icon,
						hidden: !this.content.icon,
						style: { shrink: 0 },
					}),
					ui.cell(
						{ style: { shrink: 1 } },
						ui.column(
							{
								distribute: "center",
								padding: { x: 16, y: 8 },
							},
							ui.label({
								bold: true,
								wrap: true,
								hidden: !this.content.title,
								text: this.content.title,
							}),
							ui.label({
								wrap: true,
								text: this.content.message,
							})
						)
					),
					ui.separator({
						vertical: true,
						color: this.styles.background.text().alpha(0.2),
					}),
					ui.button({
						style: ui.style.BUTTON_PLAIN.override({ shrink: 0 }),
						label: this.content.buttonLabel,
						hidden: !this.content.buttonLabel,
					}),
					ui.button({
						style: ui.style.BUTTON_ICON.override({ opacity: 0.5 }),
						icon: ui.icon.CLOSE,
						iconSize: 16,
						onPress: "Dismiss",
						onClick: "Dismiss",
					})
				)
			)
			.create();
	}

	protected onDismiss() {
		this.unlink();
		return true;
	}
}
