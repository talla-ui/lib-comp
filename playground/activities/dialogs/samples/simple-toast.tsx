import { showToastNotification } from "@talla-ui/lib-comp";

/** Shows a toast notification with a message */
export async function showSimpleToast() {
	await showToastNotification("Hello there! This is a simple notification.");
}
