import { app } from "talla-ui";

/** Shows an alert dialog using `app.showConfirmDialogAsync` */
export async function showBuiltinConfirm() {
	app.showConfirmDialogAsync([
		"Confirm this operation?",
		"This is a confirmation dialog. It uses the built-in message dialog component.",
	]);
}
