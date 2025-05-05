import { ResponsiveRow } from "@talla-ui/lib-comp";
import {
	$activity,
	$view,
	$viewport,
	Activity,
	app,
	StringConvertible,
	ui,
	UIComponent,
	ViewEvent,
} from "talla-ui";
import { checkCircleIcon } from "~/icons";

// NOTE: In this example, both the view and the activity are defined in the same file.
// In a real application, you would typically split them into separate files.

/** Reusable component for a list item in the list choice dialog. */
const ListItemView = UIComponent.define(
	{
		title: StringConvertible.EMPTY,
		description: StringConvertible.EMPTY,
		selected: false,
		value: undefined as any,
	},
	<animatedcell
		padding={{ start: 16, top: 4, bottom: 12, end: 32 }}
		borderRadius={8}
		style={$view("selected").select(
			{
				background: ui.color.BRAND_BG.alpha(0.1),
				borderColor: ui.color.BRAND,
				borderThickness: 2,
			},
			{ borderColor: ui.color.SEPARATOR, borderThickness: 2 }
		)}
	>
		<toggle
			type="none" // icon is displayed separately
			labelStyle={{ bold: true, padding: { y: 4 } }}
			state={$view("selected")}
		>
			{$view("title")}
		</toggle>

		<spacer height={4} />
		<label dim wrap>
			{$view("description")}
		</label>

		{/* Icon displayed separately at the top right */}
		<image
			hidden={$view.not("selected")}
			icon={checkCircleIcon}
			iconColor={ui.color.BRAND}
			position={{ gravity: "overlay", top: 8, end: 8 }}
		/>
	</animatedcell>
);

// Dialog view:
const listChoiceView = (
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

		{/* List of options */}
		<column spacing={16} padding={{ x: 16, bottom: 16 }}>
			<ListItemView
				title="First option"
				description="This is the first option. It's indicated as the default when showing the dialog."
				onClick="SelectItem"
				value="first"
				selected={$activity("selection").matches("first")}
			/>
			<ListItemView
				title="Another option"
				description="This is the second option, also a great choice."
				onClick="SelectItem"
				value="second"
				selected={$activity("selection").matches("second")}
			/>
		</column>

		{/* Buttons */}
		<ResponsiveRow
			padding={{ y: 24, x: 16 }}
			rowAlign="center"
			columnGravity="stretch"
			reverse={$viewport.not("col2")}
		>
			<button onClick="Cancel">Cancel</button>
			<button primary onClick="Submit">
				Select
			</button>
		</ResponsiveRow>
	</cell>
);

export class ListChoiceDialog extends Activity {
	selection = "first";
	submitted = false;

	createView() {
		this.setRenderMode("dialog");
		return listChoiceView.create();
	}

	onEscapeKeyPress() {
		this.unlink();
	}

	onCancel() {
		this.unlink();
	}

	onSelectItem(e: ViewEvent) {
		if (e.source instanceof ListItemView) {
			this.selection = e.source.value;
		}
	}

	onSubmit() {
		this.submitted = true;
		this.unlink();
	}
}

/** This function shows the dialog and waits for a choice to be made */
export async function showListChoice() {
	let activity = new ListChoiceDialog();
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
	app.hotReload(import.meta, ListChoiceDialog);
}
