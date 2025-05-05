import { FormEntry, ResponsiveRow } from "@talla-ui/lib-comp";
import { $viewport, Activity, app, FormContext, ui } from "talla-ui";

// NOTE: In this example, both the view and the activity are defined in the same file.
// In a real application, you would typically split them into separate files.

// Dialog view:
const textInputView = (
	<cell style={{ width: 480, maxWidth: "100%" }}>
		{/* Column with header, description, and form field */}
		<column padding={{ x: 16, y: 24 }} spacing={8}>
			<label bold fontSize={16}>
				Text input dialog
			</label>
			<label dim wrap>
				This is a dialog that prompts the user to enter text. It can be used to
				get a single line of text from the user.
			</label>
			<FormEntry errorFormField="text" padding={{ y: 12 }}>
				<textfield
					formField="text"
					requestFocus
					placeholder="Type something..."
					onEnterKeyPress="Submit"
				/>
			</FormEntry>
		</column>

		{/* Buttons */}
		<cell background={ui.color.BACKGROUND.contrast(-0.05)}>
			<ResponsiveRow
				padding={16}
				rowAlign="end"
				columnGravity="stretch"
				reverse={$viewport.not("col2")}
			>
				<button onClick="Cancel">Cancel</button>
				<button primary onClick="Submit">
					Submit
				</button>
			</ResponsiveRow>
		</cell>
	</cell>
);

export class TextInputDialog extends Activity {
	formContext = new FormContext({
		text: { isString: { required: true, err: "Text is required" } },
	});

	result?: string;

	createView() {
		this.setRenderMode("dialog");
		return textInputView.create();
	}

	onEscapeKeyPress() {
		this.unlink();
	}

	onCancel() {
		this.unlink();
	}

	onSubmit() {
		let result = this.formContext.validate();
		if (result) {
			this.result = result.text;
			this.unlink();
		}
	}
}

/** This function shows the dialog and waits for input */
export async function showTextInputDialog() {
	const activity = new TextInputDialog();
	app.addActivity(activity, true);

	// wait for the activity to be unlinked
	for await (let _ of activity.listen(true));
	if (activity.result == null) return;

	app.showAlertDialogAsync(["Text input", activity.result]);
}

// hot reload for vite
if (import.meta.hot) {
	import.meta.hot.accept();
	app.hotReload(import.meta, TextInputDialog);
}
