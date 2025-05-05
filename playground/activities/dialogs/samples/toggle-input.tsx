import { ResponsiveRow } from "@talla-ui/lib-comp";
import { $viewport, Activity, app, FormContext, ui } from "talla-ui";

// NOTE: In this example, both the view and the activity are defined in the same file.
// In a real application, you would typically split them into separate files.

// Dialog view:
const toggleInputView = (
	<cell style={{ width: 380, maxWidth: "100%" }}>
		{/* Column with header, description, and form fields */}
		<column padding={{ x: 16, y: 24 }}>
			<label bold fontSize={16}>
				Toggle input dialog
			</label>
			<spacer height={8} />
			<label dim wrap>
				This is a dialog that prompts the user to enable or disable one or more
				options. It can be used when a decision is required before continuing.
			</label>
			<spacer height={16} />
			<toggle type="switch" formField="toggle1" label="Enable boost system" />
			<toggle
				type="switch"
				formField="toggle2"
				label="Enable sideways thrusters"
			/>
		</column>

		{/* Buttons */}
		<cell background={ui.color.BACKGROUND.contrast(-0.05)}>
			<ResponsiveRow
				padding={16}
				rowAlign="end"
				columnGravity="stretch"
				reverse={$viewport.not("col2")}
			>
				<button onClick="Cancel" style={ui.style.BUTTON_PLAIN}>
					Cancel
				</button>
				<button primary onClick="Submit" chevron="next">
					Continue
				</button>
			</ResponsiveRow>
		</cell>
	</cell>
);

export class ToggleInputDialog extends Activity {
	formContext = new FormContext({
		toggle1: { isBoolean: {}, isOptional: true },
		toggle2: { isBoolean: {}, isOptional: true },
	});

	result?: {
		toggle1?: boolean;
		toggle2?: boolean;
	};

	createView() {
		this.setRenderMode("dialog");
		return toggleInputView.create();
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
export async function showToggleInputDialog() {
	const activity = new ToggleInputDialog();
	app.addActivity(activity, true);

	// wait for the activity to be unlinked
	for await (let _ of activity.listen(true));
	if (!activity.result) return;

	app.showAlertDialogAsync([
		"Toggle input",
		`Boost system: ${activity.result.toggle1 ? "Enabled" : "Disabled"}`,
		`Sideways thrusters: ${activity.result.toggle2 ? "Enabled" : "Disabled"}`,
	]);
}

// hot reload for vite
if (import.meta.hot) {
	import.meta.hot.accept();
	app.hotReload(import.meta, ToggleInputDialog);
}
