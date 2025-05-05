import { showProgressDialogAsync } from "@talla-ui/lib-comp";
import { app } from "talla-ui";
import { loadingIcon } from "~/icons";

/** Shows a full progress dialog while waiting for an async function */
export async function showPercentageProgress() {
	const CANCEL_ERROR = Error("Download canceled");
	try {
		let result = await showProgressDialogAsync(
			async (dialog) => {
				// set the dialog UI using properties of `ProgressDialog`
				dialog.title = "Downloading...";
				dialog.icon = loadingIcon;
				dialog.progressText = "Loading widgets from the server";
				dialog.progress = 0;
				dialog.cancelable = true;

				// update the progress asynchronously
				let p = 0;
				while (p < 1) {
					await new Promise((r) => setTimeout(r, 200));
					p += Math.random() / 10;
					dialog.progress = p;
					if (p > 0.8) dialog.progressText = "Almost done!";

					// if canceled, the callback below is already called
					if (dialog.canceled) return "Canceled";
				}
				return "Download completed";
			},
			() => {
				// This gets called when the user presses Cancel
				return CANCEL_ERROR;
			}
		);
		app.showAlertDialogAsync(result);
	} catch (err) {
		// showWhileAsync may have thrown CANCEL_ERROR
		if (err instanceof Error) {
			app.showAlertDialogAsync(["Could not complete download", err.message]);
		}
	}
}
