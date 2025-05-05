import { ResponsiveRow, SelectField } from "@talla-ui/lib-comp";
import { $activity, $viewport, Activity, app, ui, ViewEvent } from "talla-ui";
import { infoIcon } from "~/icons";

// NOTE: In this example, both the view and the activity are defined in the same file.
// In a real application, you would typically split them into separate files.

// Dialog view:
const dropdownChoiceView = (
	<cell style={{ width: 480, maxWidth: "100%" }}>
		{/* Header, draggable (using web handler) */}
		<cell effect={ui.effect("DragModal")}>
			<column padding={{ x: 16, y: 24 }} spacing={8}>
				<label bold fontSize={16}>
					Choice dialog
				</label>
				<label dim wrap>
					This is a dialog that prompts the user to select a choice from a list.
					It can be used to present a list of choices, with an explanation for
					each option.
				</label>
			</column>
		</cell>

		{/* A well with select field and description */}
		<cell
			padding={16}
			margin={{ x: 16 }}
			background={ui.color.BACKGROUND.brighten(-0.05)}
			borderRadius={8}
			style={{
				minHeight: 140,
				borderColor: ui.color.SEPARATOR,
				borderThickness: 1,
			}}
			layout={{ distribution: "start" }}
		>
			<SelectField
				label="Select an option"
				value={$activity("selection")}
				options={[
					{ label: "First option", value: "first" },
					{ label: "Another option", value: "second" },
					{ label: "Third option", value: "third" },
				]}
				onChange="SelectOption"
			/>

			<spacer height={16} />
			<row gravity="start">
				<image
					icon={infoIcon}
					iconColor={ui.color.PRIMARY}
					style={{ shrink: 0 }} // TODO: why is this needed?
				/>
				<label dim wrap>
					{$activity("description")}
				</label>
			</row>
		</cell>

		{/* Buttons */}
		<ResponsiveRow
			padding={{ y: 24, x: 16 }}
			rowAlign="center"
			columnGravity="stretch"
			reverse={$viewport.not("col2")}
		>
			<button onClick="Cancel">Cancel</button>
			<button primary onClick="Submit">
				Submit
			</button>
		</ResponsiveRow>
	</cell>
);

export class DropdownChoiceDialog extends Activity {
	descriptions: Record<string, string> = {
		first:
			"This is the first option. It's indicated as the default when showing the dialog.",
		second: "This is the second option, also a great choice.",
		third: "This is the third option, another great choice.",
	};
	selection = "first";
	description = this.descriptions.first;
	submitted = false;

	createView() {
		this.setRenderMode("dialog");
		return dropdownChoiceView.create();
	}

	onSelectOption(e: ViewEvent) {
		this.selection = e.data.value as string;
		this.description = this.descriptions[this.selection] || "-";
	}

	onEscapeKeyPress() {
		this.unlink();
	}

	onCancel() {
		this.unlink();
	}

	onSubmit() {
		this.submitted = true;
		this.unlink();
	}
}

/** This function shows the dialog and waits for a choice to be made */
export async function showDropdownChoice() {
	let activity = new DropdownChoiceDialog();
	app.addActivity(activity, true);

	// wait for the activity to be unlinked
	for await (let _ of activity.listen(true));
	if (!activity.submitted) return;

	app.showAlertDialogAsync([
		"Selected option",
		`You selected the ${activity.selection} option.`,
	]);
}

// hot reload for vite
if (import.meta.hot) {
	import.meta.hot.accept();
	app.hotReload(import.meta, DropdownChoiceDialog);
}
