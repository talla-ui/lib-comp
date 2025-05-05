import {
	DetailNavButton,
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
	scribbleLoopIcon,
	tabsIcon,
	textboxIcon,
	userCircleIcon,
} from "~/icons";

export default (
	// Outer cell to contain compact sidebar
	<cell layout={{ axis: "horizontal" }} height="100%">
		{/* Compact sidebar */}
		<cell
			background={ui.color.DARKER_GRAY}
			textColor={ui.color.WHITE}
			width={$viewport("col2").select(64, 48)}
			grow={false}
		>
			<column grow padding={{ y: 16 }}>
				<image icon={scribbleLoopIcon} height={32} />
				<spacer height={32} />
				<NavColumn
					grow
					styles={{
						...NavContainerStyles.LIST_SIDEBAR_DARK,
						navButtonStyle: ui.style(
							NavContainerStyles.LIST_SIDEBAR_DARK.navButtonStyle,
							{ textAlign: "center" }
						),
					}}
				>
					<PageNavButton pageId="layouts" icon={layoutIcon} pressed />
					<PageNavButton pageId="dialogs" icon={browsersIcon} />
					<PageNavButton pageId="sections" icon={tabsIcon} />
					<PageNavButton pageId="components" icon={textboxIcon} />
					<spacer />
					<PageNavButton icon={userCircleIcon} />
				</NavColumn>
			</column>
		</cell>

		{/* Main split with sidebar and content */}
		<SidebarSplitView
			name="layout-sidebar"
			showSidebar={$viewport("col3")}
			styles={{
				contentEffect: ui.effect.SHADOW,
			}}
		>
			{/* Sidebar, scrollable */}
			<ScrollArea
				height="100%"
				padding={{ x: 16 }}
				cellStyle={{ background: ui.color.BACKGROUND.contrast(-0.05) }}
			>
				<row height={64} padding={{ x: 12 }}>
					<label bold fontSize={18}>
						Layouts
					</label>
				</row>
				<spacer height={16} />
				<NavColumn styles={NavContainerStyles.LIST_SIDEBAR}>
					<DetailNavButton icon={textboxIcon} pressed>
						Properties
					</DetailNavButton>
					<DetailNavButton icon={ui.icon.PLUS}>Notes</DetailNavButton>
					<DetailNavButton icon={ui.icon.SEARCH}>Relations</DetailNavButton>
				</NavColumn>
			</ScrollArea>

			{/* Main content scroll pane */}
			<ScrollPane
				title={$viewport.not("col3").select("Properties")}
				navigateBack={$viewport.not("col3")}
				styles={{
					titleStyle: { fontSize: 18, bold: true },
					headerHeight: 64,
					headerBackdropEffect: undefined,
					headerStyle: {
						borderThickness: { bottom: 1 },
						borderColor: ui.color.SEPARATOR,
					},
				}}
			>
				{/* Toolbar, placed inside the header automatically */}
				<HeaderPaneToolbar>
					<button icon={ui.icon.SEARCH} style={ui.style.BUTTON_ICON} />
				</HeaderPaneToolbar>

				{/* Main content */}
				<column spacing={8}>
					<row hidden={$viewport("col3")} padding={{ y: 16 }}>
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
	</cell>
);
