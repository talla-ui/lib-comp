import { showToastNotification } from "@talla-ui/lib-comp";
import { app, ui } from "talla-ui";
import { warningIcon } from "~/icons";

/** Shows a toast notification with warning style */
export async function showWarningToast() {
	let clicked = await showToastNotification(
		{
			icon: warningIcon,
			title: "Oops",
			message: "The action failed. Please try again",
			buttonLabel: "Details",
		},
		// warning style:
		{
			align: "end",
			background: ui.color.DANGER_BG.alpha(0.9),
			width: 480,
		}
	);
	if (clicked) {
		app.showAlertDialogAsync(["Details", "This is just a test."]);
	}
}
