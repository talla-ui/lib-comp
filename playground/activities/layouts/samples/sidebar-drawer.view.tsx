import {
	HeaderPaneToolbar,
	ScrollPane,
	SidebarSplitView,
} from "@talla-ui/lib-comp";
import { $activity, $either, $viewport, ui } from "talla-ui";
import { Placeholder } from "~/components/Placeholder";
import ViewSourceButton from "~/components/ViewSourceButton";
import { arrowLineLeftIcon, arrowLineRightIcon, userCircleIcon } from "~/icons";
import sidebarDrawerSidebar from "./sidebar-drawer.sidebar";

export default (
	<SidebarSplitView
		name="layout-sidebar"
		showSidebar={$viewport("col3")}
		styles={{ sidebarWidth: 264 }}
	>
		{/* Import sidebar with navigation */}
		{sidebarDrawerSidebar}

		{/* Main wrapper: nested split view with sidebar on the other side */}
		<SidebarSplitView
			name="layout-drawer"
			reverse
			showSidebar={$either(
				$viewport("col3"),
				$viewport("col2").and($activity("showDrawer"))
			)}
		>
			{/* Insert drawer when not also showing overlay */}
			<show
				insert={$activity
					.not("showDrawerOverlay")
					.and("drawer")
					.else(undefined)}
			/>

			{/* Nested scroll pane with header and content */}
			<ScrollPane
				headerMode={$viewport("col3").select("none", "dynamic")}
				title={$viewport.not("col3").select("Title")}
				navigateBack={$viewport.not("col3")}
			>
				{/* Toolbar with drawer hide/show buttons when needed */}
				<HeaderPaneToolbar>
					<button icon={ui.icon.SEARCH} style={ui.style.BUTTON_ICON} />
					<button icon={userCircleIcon} style={ui.style.BUTTON_ICON} />

					{/* Drawer hide/show buttons */}
					<separator vertical />
					<button
						hidden={$viewport("col2").and($activity("showDrawer"))}
						icon={arrowLineLeftIcon}
						style={ui.style.BUTTON_ICON}
						onClick="ShowDrawer"
					/>
					<button
						hidden={$viewport.not("col2").or($activity.not("showDrawer"))}
						icon={arrowLineRightIcon}
						style={ui.style.BUTTON_ICON}
						onClick="HideDrawer"
					/>
				</HeaderPaneToolbar>

				{/* Main content area */}
				<column grow>
					<column spacing={8}>
						{/* Title, hidden on narrow viewports (using scroll pane header instead) */}
						<label
							bold
							fontSize={20}
							padding={{ bottom: 16 }}
							hidden={$viewport.not("col3")}
						>
							Title
						</label>

						{/* Content */}
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
				</column>
			</ScrollPane>
		</SidebarSplitView>
	</SidebarSplitView>
);
