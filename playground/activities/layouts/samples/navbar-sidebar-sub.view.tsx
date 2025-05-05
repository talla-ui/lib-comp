import {
	DetailNavButton,
	HeaderPaneToolbar,
	NavColumn,
	NavContainerStyles,
	NavRow,
	PageNavButton,
	ResponsiveRow,
	ScrollPane,
	ScrollRow,
	SidebarSplitView,
} from "@talla-ui/lib-comp";
import { $viewport, ui } from "talla-ui";
import { Placeholder } from "~/components/Placeholder";
import ViewSourceButton from "~/components/ViewSourceButton";
import { scribbleLoopIcon, textboxIcon, userCircleIcon } from "~/icons";

export default (
	// Outer scroll pane
	<ScrollPane
		titleIcon={scribbleLoopIcon}
		styles={{
			maxHeaderWidth: 1000,
			maxInnerWidth: 1000,
			titleIconColor: ui.color.BRAND,
			headerBackdropBackground: ui.color.BACKGROUND,
			headerBackdropEffect: undefined,
			headerStyle: {
				borderColor: ui.color.SEPARATOR,
				borderThickness: { bottom: 1 },
			},
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

		{/* Header block, responsive */}
		<ResponsiveRow
			breakpoint="col3"
			columnGravity="stretch"
			padding={{ y: 16 }}
		>
			<row grow>
				<button
					icon={ui.icon.CHEVRON_BACK}
					style={ui.style.BUTTON_ICON}
					hidden={$viewport.not("col2")}
					onClick="NavigateBack"
				/>
				<column>
					<label bold fontSize={$viewport("col3").select(36, 24)}>
						Title
					</label>
					<label dim>Subtitle and metadata</label>
				</column>
			</row>
			<spacer height={8} />
			<ResponsiveRow
				name="Buttons"
				breakpoint="col2"
				columnGravity="stretch"
				reverse={$viewport("col3")}
				grow={$viewport.not("col2")}
			>
				<button primary icon={ui.icon.CHECK}>
					Primary
				</button>
				<button>Secondary</button>
			</ResponsiveRow>
		</ResponsiveRow>

		{/* Tab bar for narrow viewport */}
		<show when={$viewport.not("col3")}>
			<ScrollRow>
				<NavRow grow styles={NavContainerStyles.UNDERLINE}>
					<DetailNavButton icon={textboxIcon} pressed>
						Properties
					</DetailNavButton>
					<DetailNavButton icon={ui.icon.PLUS}>Notes</DetailNavButton>
					<DetailNavButton icon={ui.icon.SEARCH}>Relations</DetailNavButton>
				</NavRow>
			</ScrollRow>
		</show>

		<separator margin={0} />

		{/* Main content area, split on 3 column viewport only */}
		<SidebarSplitView showSidebar={$viewport("col3")}>
			{/* Sidebar nav, scrollable (wide viewport only) */}
			<column grow padding={{ start: 2, end: 16, y: 16 }}>
				<NavColumn styles={NavContainerStyles.LIST_SIDEBAR}>
					<DetailNavButton icon={textboxIcon} pressed>
						Properties
					</DetailNavButton>
					<DetailNavButton icon={ui.icon.PLUS}>Notes</DetailNavButton>
					<DetailNavButton icon={ui.icon.SEARCH}>Relations</DetailNavButton>
				</NavColumn>
			</column>

			{/* Main content */}
			<column spacing={8} padding={{ y: 16 }}>
				<Placeholder height={200}>
					<ViewSourceButton />
				</Placeholder>
				<Placeholder height={400} />
				<Placeholder height={400} />
			</column>
		</SidebarSplitView>
	</ScrollPane>
);
