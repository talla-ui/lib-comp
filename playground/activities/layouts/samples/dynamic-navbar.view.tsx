import {
	HeaderPaneToolbar,
	NavContainerStyles,
	NavRow,
	PageNavButton,
	ScrollPane,
} from "@talla-ui/lib-comp";
import { $viewport, ui } from "talla-ui";
import { Placeholder } from "~/components/Placeholder";
import ViewSourceButton from "~/components/ViewSourceButton";
import { scribbleLoopIcon, userCircleIcon } from "~/icons";

export default (
	// Outer scroll pane
	<ScrollPane
		titleIcon={scribbleLoopIcon}
		title="Title"
		headerMode="dynamic"
		styles={{
			maxInnerWidth: 1000,
			maxHeaderWidth: 1000,
			pageTitleIconSize: 36,
			pageTitleRowHeight: 80,
			pageTitleStyle: ui.style.LABEL.extend({
				bold: true,
				fontSize: 36,
			}),
			scrollThreshold: 40,
			centerNavbar: true,
		}}
		navigateBack={$viewport.not("col2")}
		hideNavbar={$viewport.not("col2")}
	>
		{/* Nav row, placed inside the header automatically */}
		<NavRow styles={NavContainerStyles.UNDERLINE}>
			<PageNavButton pageId="layouts" pressed>
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

		{/* Content */}
		<column spacing={8} padding={{ y: 16 }}>
			<Placeholder height={200}>
				<ViewSourceButton />
			</Placeholder>
			<Placeholder height={400} />
			<Placeholder height={400} />
			<Placeholder height={400} />
		</column>
	</ScrollPane>
);
