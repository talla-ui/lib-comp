import { showProgressDialogAsync } from "@talla-ui/lib-comp";
import { loadingIcon } from "~/icons";

/** Shows a loading dialog while waiting for a promise to be fulfilled */
export async function showIndeterminateProgress() {
	await showProgressDialogAsync(async (dialog) => {
		// set the dialog UI using properties of the `ProgressDialog` instance:
		dialog.title = "Please wait...";
		dialog.icon = loadingIcon;

		// just wait here for 2 seconds...
		await new Promise((r) => setTimeout(r, 2000));
	});
}
