import { $viewport, ui } from "talla-ui";
import {
	ScrollPane,
	HeaderPaneToolbar,
	NavRow,
	PageNavButton,
} from "@talla-ui/lib-comp";
import { scribbleLoopIcon, userCircleIcon } from "~/icons";
import { Placeholder } from "~/components/Placeholder";
import ViewSourceButton from "~/components/ViewSourceButton";

const OVERLAP_BG = ui.color.BRAND_BG;

const _pageBackgroundStyle = ui.style.CELL.extend({
	background: ui.color.BACKGROUND,
	borderRadius: 16,
	padding: 16,
	width: "100%",
	maxWidth: 1000,
});

export default (
	// Outer scroll pane
	<ScrollPane
		titleIcon={scribbleLoopIcon}
		styles={{
			padding: 16,
			maxHeaderWidth: 1000,
			maxInnerWidth: undefined,
			headerBackdropBackground: OVERLAP_BG,
			headerBackdropEffect: undefined,
		}}
		navigateBack={$viewport.not("col2")}
		hideNavbar={$viewport.not("col2")}
	>
		{/* Nav row, placed inside the header automatically */}
		<NavRow>
			<PageNavButton pageId="" pressed>
				Layouts
			</PageNavButton>
			<PageNavButton pageId="dialogs">Dialogs</PageNavButton>
			<PageNavButton pageId="sections">Sections</PageNavButton>
			<PageNavButton pageId="components">Components</PageNavButton>
		</NavRow>

		{/* Toolbar, placed inside the header automatically */}
		<HeaderPaneToolbar>
			<button icon={ui.icon.SEARCH} style={ui.style.BUTTON_ICON} />
			<button icon={userCircleIcon} style={ui.style.BUTTON_ICON} />
		</HeaderPaneToolbar>

		{/* Overlap backdrop, with page title */}
		<cell
			background={OVERLAP_BG}
			margin={{ top: -116, x: -16, bottom: -100 }}
			padding={{ top: 100, bottom: 100 }}
		>
			<cell
				style={{
					width: "100%",
					maxWidth: 1000,
					grow: 0,
					borderThickness: { top: 1 },
					borderColor: OVERLAP_BG.text(),
					textColor: OVERLAP_BG.text(),
				}}
				margin={{ x: "auto" }}
			>
				<label bold fontSize={36} padding={{ x: 16, y: 32 }}>
					Title
				</label>
			</cell>
		</cell>

		{/* Page content */}
		<cell margin={{ x: "auto" }} style={_pageBackgroundStyle}>
			<column spacing={8}>
				<Placeholder height={200}>
					<ViewSourceButton />
				</Placeholder>
				<Placeholder height={400} />
				<Placeholder height={400} />
			</column>
		</cell>
	</ScrollPane>
);
