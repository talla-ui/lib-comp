import {
	HeaderPaneToolbar,
	NavColumn,
	NavContainerStyles,
	PageNavButton,
	ScrollArea,
	ScrollPane,
	SidebarSplitView,
} from "@talla-ui/lib-comp";
import { $viewport, ui } from "talla-ui";
import { Placeholder } from "~/components/Placeholder";
import ViewSourceButton from "~/components/ViewSourceButton";
import {
	browsersIcon,
	layoutIcon,
	tabsIcon,
	textboxIcon,
	userCircleIcon,
} from "~/icons";

export default (
	// Outer split view
	<SidebarSplitView showSidebar={$viewport("col3")}>
		{/* Sidebar (scrollable) */}
		<ScrollArea
			height="100%"
			cellStyle={{
				background: ui.color.DARKER_GRAY,
				textColor: ui.color.WHITE,
			}}
			padding={{ x: 8 }}
		>
			<row height={64} padding={{ x: 12 }}>
				<label bold fontSize={18}>
					Playground
				</label>
			</row>
			<spacer height={16} />
			<NavColumn styles={NavContainerStyles.LIST_SIDEBAR_DARK}>
				<PageNavButton pageId="layouts" icon={layoutIcon} pressed>
					Layouts
				</PageNavButton>
				<PageNavButton pageId="dialogs" icon={browsersIcon}>
					Dialogs
				</PageNavButton>
				<PageNavButton pageId="sections" icon={tabsIcon}>
					Sections
				</PageNavButton>
				<PageNavButton pageId="components" icon={textboxIcon}>
					Components
				</PageNavButton>
			</NavColumn>
		</ScrollArea>

		{/* Main scroll pane */}
		<ScrollPane
			title={$viewport.not("col3").select("Playground")}
			navigateBack={$viewport.not("col3")}
			styles={{
				headerHeight: 64,
				headerBackdropEffect: undefined,
				headerBackdropBackground: ui.color.BACKGROUND.brighten(-0.1),
				headerStyle: {
					borderThickness: { bottom: 1 },
					borderColor: ui.color.SEPARATOR,
				},
			}}
		>
			{/* Toolbar, placed inside the header automatically */}
			<HeaderPaneToolbar>
				<button icon={ui.icon.SEARCH} style={ui.style.BUTTON_ICON} />
				<button icon={userCircleIcon} style={ui.style.BUTTON_ICON} />
			</HeaderPaneToolbar>

			{/* Content */}
			<column spacing={8}>
				<Placeholder height={200}>
					<ViewSourceButton />
				</Placeholder>
				<Placeholder height={400} />
				<Placeholder height={400} />
			</column>
		</ScrollPane>
	</SidebarSplitView>
);
