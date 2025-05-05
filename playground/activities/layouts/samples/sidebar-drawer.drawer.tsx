import { ScrollArea } from "@talla-ui/lib-comp";
import { $activity, ui } from "talla-ui";
import { Placeholder } from "~/components/Placeholder";
import { arrowLineRightIcon } from "~/icons";

export default (
	// Outer scroll area for the drawer
	<ScrollArea
		height="100%"
		padding={16}
		cellStyle={{ background: ui.color.BACKGROUND.contrast(-0.05) }}
	>
		{/* Header row with title, and close button for narrow viewports */}
		<row>
			<label bold>Drawer</label>
			<spacer />
			<button
				hidden={$activity.not("showDrawerOverlay")}
				icon={arrowLineRightIcon}
				style={ui.style.BUTTON_ICON}
				onClick="HideDrawer"
			/>
		</row>
		<separator />
		<spacer height={16} />

		{/* Content area */}
		<column>
			<Placeholder height={500} />
		</column>
	</ScrollArea>
);
