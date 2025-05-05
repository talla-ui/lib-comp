import {
	DetailNavButton,
	HeaderPaneToolbar,
	NavContainerStyles,
	NavRow,
	PageNavButton,
	ResponsiveRow,
	ScrollPane,
	ScrollRow,
} from "@talla-ui/lib-comp";
import { $viewport, ui } from "talla-ui";
import { Placeholder } from "~/components/Placeholder";
import ViewSourceButton from "~/components/ViewSourceButton";
import { scribbleLoopIcon, userCircleIcon } from "~/icons";

export default (
	// Main scroll pane
	<ScrollPane
		titleIcon={scribbleLoopIcon}
		styles={{
			background: ui.color.BACKGROUND.contrast(-0.1),
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

		{/* Title block, responsive */}
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

		<spacer height={16} hidden={$viewport("col3")} />

		{/* Main content in full-width card */}
		<cell
			background={ui.color.BACKGROUND}
			margin={$viewport.not("col2").select(-16)}
			borderRadius={$viewport("col2").select(16)}
			padding={16}
		>
			{/* Tab row */}
			<ScrollRow>
				<NavRow>
					<DetailNavButton pressed>Properties</DetailNavButton>
					<DetailNavButton>Notes</DetailNavButton>
					<DetailNavButton>Relations</DetailNavButton>
				</NavRow>
			</ScrollRow>
			<separator margin={16} />

			{/* Content */}
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
