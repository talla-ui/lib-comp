import { app, strf, ui, FormContext } from "talla-ui";
import SamplePane from "~/views/SamplePane";
import {
	FormEntry,
	ModalInputDialog,
	showToastNotification,
} from "@talla-ui/lib-comp";

// NOTE: normally this code would be contained in separate activity & view files

// --------------------------------------------------------
// Custom modal input dialog, using ModalInputDialog base class

const dialog = (
	<cell
		style={{ width: 480, maxWidth: "100%", grow: 0 }}
		position={{ gravity: "center" }}
		background={ui.color.BACKGROUND}
	>
		<cell effect={ui.effect("DragModal")}>
			<row padding={16}>
				<label fontSize={16} bold>
					Compose
				</label>
				<spacer />
				<button
					icon={ui.icon.CLOSE}
					style={ui.style.BUTTON_ICON}
					onClick="Cancel"
				/>
			</row>
		</cell>
		<column padding={16}>
			<FormEntry label="Email address" errorFormField="email">
				<textfield type="email" formField="email" requestFocus />
			</FormEntry>
			<FormEntry label="Message" errorFormField="message">
				<textfield formField="message" multiline style={{ height: 100 }} />
			</FormEntry>
		</column>
		<separator />
		<row padding={16} align="end">
			<button onClick="Cancel">Cancel</button>
			<button primary onClick="Confirm">
				Confirm
			</button>
		</row>
	</cell>
);

class MyFormDialog extends ModalInputDialog {
	constructor({ email, message }: { email: string; message: string }) {
		super();

		// initialize form context with validation rules
		this.formContext = new FormContext(
			{
				email: { isString: { match: /\w@\w/, err: "Invalid email" } },
				message: {
					isString: { min: { length: 1 }, err: "Message is required" },
				},
			},
			{ email, message }
		);
	}

	protected createView() {
		// switch to full-screen on narrow devices
		if (!app.renderer?.viewport.col2) {
			this.setRenderMode("page");
		}
		return dialog.create();
	}
}

// --------------------------------------------------------
// Sample:

// NOTE: the function below is called from the activity;
// included here for demo purposes only
export async function openDialog(data: { email: string; message: string }) {
	let result = await new MyFormDialog(data).showDialogAsync();
	if (result) {
		// result is the (unlinked) activity itself here
		showToastNotification({
			icon: ui.icon.CHECK,
			title: "Example confirmation",
			message: strf("Message sent to %s", result.formContext.values.email),
		});
	}
}

// (end)
// --------------------------------------------------------

export default (
	<SamplePane>
		<column spacing={16}>
			<label>Simple input dialog</label>
			<FormEntry label="Initial email">
				<textfield formField="email" type="email" />
			</FormEntry>
			<FormEntry label="Initial message">
				<textfield formField="message" />
			</FormEntry>
			<row>
				<button onClick="OpenDialog">Open</button>
			</row>
			<separator margin={16} />
		</column>

		<spacer height={120} />
	</SamplePane>
);
