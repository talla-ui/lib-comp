import { $activity, app, ui } from "talla-ui";
import SamplePane from "~/views/SamplePane";
import { ProgressBar, ProgressDialog } from "@talla-ui/lib-comp";
import icons from "~/icons/icons";

// NOTE: these functions are called from the activity;
// normally this is just done within the activity itself

export async function openIndeterminate() {
	await ProgressDialog.showWhileAsync(async (dialog) => {
		dialog.title = "Please wait...";
		dialog.icon = icons.loading;
		await new Promise((r) => setTimeout(r, 2000));
	});
}

export async function openAdvanced() {
	try {
		await ProgressDialog.showWhileAsync(async (d) => {
			d.title = "Downloading...";
			d.progressText = "Loading widgets from the server";
			d.icon = icons.loading;
			d.cancelable = true;
			let p = 0;
			d.progress = 0;
			while (p < 1) {
				await new Promise((r) => setTimeout(r, 200));
				p += Math.random() / 10;
				d.progress = p;
				if (p > 0.8) d.progressText = "Almost done!";
				if (d.cancelled) {
					throw Error("Download cancelled");
				}
			}
		});
	} catch (err) {
		if (err instanceof Error) {
			app.showAlertDialogAsync(["Could not complete download", err.message]);
		}
	}
}

export default (
	<SamplePane>
		<column align="start" spacing={8}>
			<label>Non-cancelable indeterminate progress dialog</label>
			<button onClick="OpenIndeterminate">Start</button>
			<separator margin={16} />
		</column>

		<column align="start" spacing={8}>
			<label>Advanced dialog with progress bar, cancelable</label>
			<button onClick="OpenAdvanced">Load widgets</button>
			<separator margin={16} />
		</column>

		<column align="start" spacing={8}>
			<label>Default progress bar</label>
			<ProgressBar progress={$activity.bind("progress")} />
			<separator margin={16} />
		</column>

		<column align="start" spacing={8}>
			<label>Styled progress bar</label>
			<ProgressBar
				styles={{
					height: 16,
					backgroundColor: ui.color.BACKGROUND,
					fillColor: ui.color.SUCCESS_BG,
					borderRadius: 2,
					containerStyle: ui.style.CELL.extend({
						borderColor: ui.color.SEPARATOR,
						borderThickness: 1,
					}),
				}}
				progress={$activity.bind("progress")}
			/>
			<separator margin={16} />
		</column>

		<spacer height={120} />
	</SamplePane>
);
