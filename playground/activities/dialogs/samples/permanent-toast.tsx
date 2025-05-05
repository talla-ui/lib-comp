import { showToastNotification } from "@talla-ui/lib-comp";
import { app } from "talla-ui";
import { clockIcon } from "~/icons";

/** Shows a toast notification that won't disappear */
export async function showPermanentToast() {
	let clicked = await showToastNotification(
		{
			icon: clockIcon,
			title: "Your account is ready",
			message: "Your account is now ready. You can start using it right away.",
			buttonLabel: "Continue",
			timeout: 0, // no timeout
		},
		{
			align: "start",
			width: 480,
		}
	);
	if (clicked) {
		app.showAlertDialogAsync(["Details", "This is just a test."]);
	}
}
