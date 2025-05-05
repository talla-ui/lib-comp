import { app } from "talla-ui";

/** Shows an alert dialog using `app.showAlertDialogAsync` */
export async function showBuiltinAlert() {
	await app.showAlertDialogAsync([
		"Hello, world!",
		"This is an alert dialog. It uses the built-in message dialog component.",
	]);
}
