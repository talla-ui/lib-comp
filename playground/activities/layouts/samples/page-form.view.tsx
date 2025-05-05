import { $viewport, ui } from "talla-ui";
import { Placeholder } from "~/components/Placeholder";
import ViewSourceButton from "~/components/ViewSourceButton";
import { scribbleLoopIcon } from "~/icons";

export default (
	<cell background={ui.color.TEXT.alpha(0.05)}>
		{/* Back button (sample page navigation) */}
		<row position={{ gravity: "overlay", top: 0 }}>
			<button
				icon={ui.icon.CHEVRON_BACK}
				style={ui.style.BUTTON_TEXT.override({ padding: 8 })}
				onClick="NavigateBack"
			>
				Back
			</button>
			<spacer />
			<ViewSourceButton />
		</row>

		{/* Page form (centered) */}
		<cell
			background={ui.color.BACKGROUND}
			width={580}
			margin={$viewport("col2").select(16)}
			style={$viewport("col2").select(
				{
					maxWidth: "100%",
					grow: 0,
					borderRadius: 16,
					padding: 32,
				},
				{ maxWidth: "100%", padding: { x: 16, y: 48 } }
			)}
			position={{ gravity: "center" }}
		>
			<column width="100%" spacing={8} grow>
				{/* Form header */}
				<label bold fontSize={24} icon={scribbleLoopIcon} iconSize={32}>
					Form page
				</label>
				<label dim wrap>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</label>
				<separator margin={16} />

				{/* Form content placeholder */}
				<label bold>Form Content</label>
				<Placeholder />

				{/* Save button */}
				<spacer height={8} />
				<row>
					<button primary grow={$viewport.not("col2")}>
						Save
					</button>
				</row>
			</column>
		</cell>

		{/* Offset form content from bottom */}
		<spacer height={72} />
	</cell>
);
