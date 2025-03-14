import { app, strf, ui } from "talla-ui";
import SamplePane from "~/components/SamplePane";
import {
	showToastNotification,
	ToastNotificationOptions,
} from "@talla-ui/lib-comp";

const simpleToast = ToastNotificationOptions.init({
	message: strf("Hello, world!"),
});

// NOTE: toast contents may be defined in the view (like above), but
// they should be shown from the activity; this is just an example:
export const toasts = {
	simple() {
		showToastNotification(simpleToast);
	},
	start() {
		showToastNotification("Hello, world!", { align: "start" });
	},
	end() {
		showToastNotification("Hello, world!", { align: "end" });
	},
	icon() {
		showToastNotification({
			icon: ui.icon.CHECK,
			message: "Action completed.",
		});
	},
	title() {
		showToastNotification({
			title: "Success",
			message:
				"The action has been completed. You can view details in the details view.",
		});
	},
	async full() {
		let clicked = await showToastNotification(
			{
				icon: ui.icon.CHECK,
				title: "Success",
				message: "The action has been completed",
				buttonLabel: "View",
			},
			{
				width: 480,
			}
		);
		if (clicked) {
			app.showAlertDialogAsync("You clicked!");
		}
	},
	async noTimeout() {
		(await showToastNotification({
			timeout: 0,
			message: "Click me for details.",
			buttonLabel: "Details",
		}))
			? app.showAlertDialogAsync("You clicked!")
			: app.showAlertDialogAsync("Dismissed");
	},
	success() {
		showToastNotification(
			{
				icon: ui.icon.CHECK,
				title: "Success",
				message: "Action completed.",
			},
			{
				background: ui.color.SUCCESS_BG.alpha(0.9),
			}
		);
	},
	async danger() {
		let result = await showToastNotification(
			{
				icon: ui.icon("danger", "!"),
				title: "Oops",
				message: "The action failed. Please try again",
				buttonLabel: "Details",
			},
			{
				background: ui.color.DANGER_BG.alpha(0.9),
				width: 480,
			}
		);
		if (result) {
			app.showAlertDialogAsync("You clicked!");
		}
	},
};

export default (
	<SamplePane>
		<column spacing={16}>
			<label>Theme default notifications</label>
			<row wrap>
				<button onClick="ShowToast" value="simple" label="Simple" />
				<button onClick="ShowToast" value="icon" label="With icon" />
				<button onClick="ShowToast" value="title" label="Double line" />
				<button onClick="ShowToast" value="full" label="Full text" />
				<button onClick="ShowToast" value="noTimeout" label="No timeout" />
			</row>
			<separator margin={16} />
		</column>

		<column spacing={16}>
			<label>Custom color</label>
			<row wrap>
				<button onClick="ShowToast" value="success" label="Success" />
				<button onClick="ShowToast" value="danger" label="Danger" />
			</row>
			<separator margin={16} />
		</column>

		<column spacing={16}>
			<label>Position</label>
			<row wrap>
				<button onClick="ShowToast" value="start" label="Start" />
				<button onClick="ShowToast" value="end" label="End" />
			</row>
			<separator margin={16} />
		</column>

		<spacer height={120} />
	</SamplePane>
);
