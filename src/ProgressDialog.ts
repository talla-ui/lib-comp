import {
	$activity,
	Activity,
	app,
	strf,
	StringConvertible,
	ui,
	UIIconResource,
} from "talla-ui";
import { ProgressBar } from "./ProgressBar.js";

const view = ui.cell(
	{ style: { minHeight: 80, maxWidth: 320 }, accessibleRole: "alert" },
	ui.column(
		{ distribute: "center", padding: 16 },
		ui.row(
			{
				hidden: $activity.not("icon"),
				align: "center",
				padding: { top: 16, bottom: 8 },
			},
			ui.label({
				icon: $activity("icon"),
				iconSize: 40,
				dim: true,
			})
		),
		ui.spacer({ height: 8 }),
		ui.label({
			text: $activity("title"),
			bold: true,
			wrap: true,
			align: "center",
		}),
		ui.label({
			text: $activity("progressText"),
			dim: true,
			wrap: true,
			align: "center",
			style: { tabularNums: true },
			accessibleRole: "status",
		}),
		ui.show(
			{ when: $activity("progress").matchesNone(undefined) },
			ui.use(ProgressBar, {
				progress: $activity("progress"),
				margin: { top: 16, bottom: 8 },
			})
		),
		ui.spacer({ height: 8 }),
		ui.row(
			{
				hidden: $activity.not("cancelable"),
				padding: { top: 16, bottom: 8 },
				align: "center",
			},
			ui.button({
				label: strf("Cancel"),
				disabled: $activity("canceled"),
				onClick: "Cancel",
			})
		)
	)
);

/**
 * Activity class for displaying a progress dialog
 *
 * The progress dialog class is an activity. It shows a modal progress or 'loading' dialog, with an optional title, text, icon, progress bar, and cancel button; blocking the user from interacting with the application until the activity is unlinked.
 *
 * From your application, progress dialogs should be created and shown using the static {@link showProgressDialogAsync()} method, which displays the progress dialog and waits for an asynchronous callback function to complete.
 */
export class ProgressDialog extends Activity {
	/** Icon to display in the dialog, if any */
	icon?: UIIconResource = undefined;

	/** Title text of the dialog, if any */
	title = StringConvertible.EMPTY;

	/** Text describing the current progress, if any */
	progressText = StringConvertible.EMPTY;

	/** Progress value, between 0 and 1 */
	progress?: number = undefined;

	/** True if the dialog can be canceled */
	cancelable = false;

	/** True if the dialog has been canceled */
	canceled = false;

	protected createView() {
		this.setRenderMode("dialog");
		return view.create();
	}

	protected onCancel() {
		this.canceled = true;
	}
}

/**
 * Displays a {@link ProgressDialog} while executing an asynchronous function
 * @param f - Asynchronous function to execute while showing the dialog; receives the activity as a single argument to update its properties dynamically
 * @param onCancel - Callback function that's invoked when the user presses the Cancel button, may return an error that's used to reject the promise result (otherwise, the promise is not rejected)
 * @returns The result of the asynchronous function
 */
export async function showProgressDialogAsync<T>(
	f: (dialog: ProgressDialog) => Promise<T>,
	onCancel?: () => Error | undefined | void
): Promise<T> {
	let dialog = new ProgressDialog();
	let p = new Promise<T>(async (resolve, reject) => {
		dialog.listen({
			unlinked: resolve as any,
			handler: (_, e) => {
				if (e.name === "Cancel") {
					let err = onCancel?.();
					if (err) reject(err);
				}
			},
		});
	});
	try {
		app.addActivity(dialog);
		await dialog.activateAsync();
		return await Promise.race([f(dialog), p]);
	} finally {
		dialog.unlink();
	}
}
