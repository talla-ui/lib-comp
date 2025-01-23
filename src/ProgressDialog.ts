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
			text: $activity.string("title"),
			bold: true,
			wrap: true,
			style: { textAlign: "center" },
		}),
		ui.label({
			text: $activity.string("progressText"),
			dim: true,
			wrap: true,
			style: { tabularNums: true, textAlign: "center" },
			accessibleRole: "status",
		}),
		ui.conditional(
			{ state: $activity("progress").matches(undefined).not() },
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
				disabled: $activity.boolean("cancelled"),
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
 * From your application, progress dialogs should be created and shown using the static {@link showWhileAsync()} method, which displays the progress dialog and waits for an asynchronous callback function to complete.
 */
export class ProgressDialog extends Activity {
	/**
	 * Displays a progress dialog while executing an asynchronous function
	 * @param f - Asynchronous function to execute while showing the dialog; receives the activity as a single argument to update its properties dynamically
	 * @returns The result of the asynchronous function
	 */
	static async showWhileAsync<T>(f: (dialog: ProgressDialog) => Promise<T>) {
		let dialog = new this();
		try {
			app.addActivity(dialog);
			await dialog.activateAsync();
			return await f(dialog);
		} finally {
			dialog.unlink();
		}
	}

	/** Icon to display in the dialog, if any */
	icon?: UIIconResource = undefined;

	/** Title text of the dialog, if any */
	title = StringConvertible.EMPTY;

	/** Text describing the current progress, if any */
	progressText = StringConvertible.EMPTY;

	/** Progress value, between 0 and 1 */
	progress?: number = undefined;

	/** True if the dialog can be cancelled */
	cancelable = false;

	/** True if the dialog has been cancelled */
	cancelled = false;

	protected createView() {
		this.setRenderMode("dialog");
		return view.create();
	}

	protected onCancel() {
		this.cancelled = true;
		return true;
	}
}
