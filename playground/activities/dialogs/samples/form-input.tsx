import { FormEntry, ResponsiveRow } from "@talla-ui/lib-comp";
import { $viewport, Activity, app, FormContext, ui } from "talla-ui";

// NOTE: In this example, both the view and the activity are defined in the same file.
// In a real application, you would typically split them into separate files.

// Dialog view:
const textInputView = (
	<cell style={{ width: 480, maxWidth: "100%" }}>
		{/* Header, draggable */}
		<row padding={{ start: 16, end: 12, top: 12 }}>
			<cell effect={ui.effect("DragModal")}>
				<label bold fontSize={18} padding={{ y: 8 }}>
					Form input dialog
				</label>
			</cell>
			<button
				style={ui.style.BUTTON_ICON}
				icon={ui.icon.CLOSE}
				onClick="Cancel"
			/>
		</row>

		{/* Column with form fields */}
		<column padding={{ x: 16, y: 12 }} spacing={16}>
			<label dim wrap>
				This dialog shows a complete input form.
			</label>
			<FormEntry label="Name" errorFormField="name">
				<textfield
					formField="name"
					requestFocus
					placeholder="Type your name..."
					onEnterKeyPress="Submit"
				/>
			</FormEntry>
			<FormEntry label="Email" errorFormField="email">
				<textfield
					formField="email"
					type="email"
					placeholder="Type your email..."
					onEnterKeyPress="Submit"
				/>
			</FormEntry>
			<FormEntry errorFormField="subscribe" padding={{ y: 4 }}>
				<toggle
					type="switch"
					formField="subscribe"
					label="Subscribe to newsletter"
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

export class FormInputDialog extends Activity {
	formContext = new FormContext(
		{
			name: { isString: { required: true, err: "Name is required" } },
			email: {
				isString: {
					match: /^\S+@\S+\.\S+$/,
					err: "Invalid email address",
				},
			},
			subscribe: { isBoolean: {} },
		},
		{
			subscribe: true,
		}
	);

	result?: {
		name: string;
		email: string;
		subscribe: boolean;
	};

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
			this.result = result;
			this.unlink();
		}
	}
}

/** This function shows the dialog and waits for input */
export async function showFormInputDialog() {
	const activity = new FormInputDialog();
	app.addActivity(activity, true);

	// wait for the activity to be unlinked
	for await (let _ of activity.listen(true));
	if (!activity.result) return;

	app.showAlertDialogAsync([
		"Form input",
		`Name: ${activity.result.name}`,
		`Email: ${activity.result.email}`,
		`Subscribe: ${activity.result.subscribe}`,
	]);
}

// hot reload for vite
if (import.meta.hot) {
	import.meta.hot.accept();
	app.hotReload(import.meta, FormInputDialog);
}
