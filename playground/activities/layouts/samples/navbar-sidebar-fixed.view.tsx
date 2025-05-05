import {
	DetailNavButton,
	HeaderPane,
	HeaderPaneToolbar,
	NavColumn,
	NavContainerStyles,
	NavRow,
	PageNavButton,
	ScrollArea,
	ScrollPane,
	SidebarSplitView,
} from "@talla-ui/lib-comp";
import { $viewport, ui } from "talla-ui";
import { Placeholder } from "~/components/Placeholder";
import ViewSourceButton from "~/components/ViewSourceButton";
import { scribbleLoopIcon, textboxIcon, userCircleIcon } from "~/icons";

export default (
	// Outer header pane
	<HeaderPane
		titleIcon={scribbleLoopIcon}
		title="Playground"
		styles={{
			titleIconColor: ui.color.BRAND,
			centerNavbar: true,
		}}
		navigateBack={$viewport.not("col2")}
		hideNavbar={$viewport.not("col2")}
		showHeader={$viewport("col3")}
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

		{/* Outer content area: split view */}
		<SidebarSplitView showSidebar={$viewport("col3")}>
			{/* Sidebar (scrollable) */}
			<ScrollArea height="100%" padding={16}>
				<spacer height={16} />
				<NavColumn styles={NavContainerStyles.LIST_SIDEBAR}>
					<DetailNavButton icon={textboxIcon} pressed>
						Properties
					</DetailNavButton>
					<DetailNavButton icon={ui.icon.PLUS}>Notes</DetailNavButton>
					<DetailNavButton icon={ui.icon.SEARCH}>Relations</DetailNavButton>
				</NavColumn>
			</ScrollArea>

			{/* Main scroll pane */}
			<ScrollPane
				headerMode={$viewport("col3").select("none", "dynamic")}
				title={$viewport.not("col3").select("Properties")}
				navigateBack={$viewport.not("col3")}
			>
				<spacer height={16} />

				{/* Page content */}
				<column spacing={8}>
					<row hidden={$viewport("col3")}>
						<label wrap>
							Note: this view collapses to a simple page in narrow viewports.
							Use detail navigation to present a separate view for each page.
						</label>
					</row>
					<Placeholder height={200}>
						<ViewSourceButton />
					</Placeholder>
					<Placeholder height={400} />
					<Placeholder height={400} />
				</column>
			</ScrollPane>
		</SidebarSplitView>
	</HeaderPane>
);
