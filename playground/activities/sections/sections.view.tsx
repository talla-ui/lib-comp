import {
	HeaderPaneToolbar,
	NavContainerStyles,
	NavRow,
	PageNavButton,
	ResponsiveRow,
	ScrollPane,
} from "@talla-ui/lib-comp";
import { $viewport, ui } from "talla-ui";
import { TitledWell } from "~/components/TitledWell";
import { scribbleLoopIcon } from "~/icons";
import cards from "./samples/cards";
import emptyState from "./samples/empty-state";
import formEntry from "./samples/form-entry";
import formSections from "./samples/form-sections";
import labeledViews from "./samples/labeled-views";
import loadingState from "./samples/loading-state";
import navList from "./samples/nav-list";
import navSidebar from "./samples/nav-sidebar";
import navTabs from "./samples/nav-tabs";
import propertyEditor from "./samples/property-editor";
import tables from "./samples/tables";
import grid from "./samples/grid";

declare const __LIB_VERSION__: string;
declare const __FRAMEWORK_VERSION__: string;

export default (
	<ScrollPane
		name="SectionsScroll"
		restoreScroll
		titleIcon={scribbleLoopIcon}
		title="Playground"
		styles={{
			maxInnerWidth: 1000,
			maxHeaderWidth: 1000,
			titleIconColor: ui.color.BRAND,
		}}
		navigateBack={$viewport.not("col2")}
		hideToolbar={$viewport.not("col2")}
	>
		<HeaderPaneToolbar>
			<NavRow styles={NavContainerStyles.UNDERLINE}>
				<PageNavButton pageId="layouts">Layouts</PageNavButton>
				<PageNavButton pageId="dialogs">Dialogs</PageNavButton>
				<PageNavButton pageId="sections">Sections</PageNavButton>
				<PageNavButton pageId="components">Components</PageNavButton>
			</NavRow>
		</HeaderPaneToolbar>

		<cell style={{ grow: 0, maxWidth: 700 }}>
			<column spacing={8} padding={{ top: 16, bottom: 32 }}>
				<label bold fontSize={36} icon={ui.icon("section", "🧱")}>
					Sections
				</label>
				<label wrap dim>
					Sections can be used to break up your UI into logical parts. They
					provide a way to group interactive (and non-interactive) elements
					together in familiar ways, to help the user understand the structure
					of the interface.
					{"\n\n"}
					You can copy-paste each example below into your own project to get
					started with the UI components provided by the library.
				</label>
			</column>
		</cell>

		<separator margin={16} />

		<TitledWell title="Navigation: Tabs" sourceId="nav-tabs">
			{navTabs}
		</TitledWell>

		<TitledWell title="Navigation: Sidebar" sourceId="nav-sidebar">
			{navSidebar}
		</TitledWell>

		<TitledWell title="Navigation: List" sourceId="nav-list">
			{navList}
		</TitledWell>

		<TitledWell title="Cards" sourceId="cards">
			{cards}
		</TitledWell>

		<TitledWell title="Responsive grid" sourceId="grid" padding={10}>
			{grid}
		</TitledWell>

		<TitledWell title="Empty state" sourceId="empty-state">
			{emptyState}
		</TitledWell>

		<TitledWell title="Loading state" sourceId="loading-state">
			{loadingState}
		</TitledWell>

		<TitledWell title="Tables" maxContentWidth={600} sourceId="tables">
			{tables}
		</TitledWell>

		<TitledWell
			title="Labeled views"
			maxContentWidth={600}
			sourceId="labeled-views"
		>
			{labeledViews}
		</TitledWell>

		<TitledWell
			title="Property editor"
			maxContentWidth={400}
			sourceId="property-editor"
		>
			{propertyEditor}
		</TitledWell>

		<TitledWell title="Form entry" maxContentWidth={400} sourceId="form-entry">
			{formEntry}
		</TitledWell>

		<TitledWell title="Form sections" sourceId="form-sections">
			{formSections}
		</TitledWell>

		<separator margin={16} />
		<ResponsiveRow>
			<label dim>More examples →</label>
			<row>
				<button style={ui.style.BUTTON_SMALL} navigateTo="layouts">
					Layouts
				</button>
				<button style={ui.style.BUTTON_SMALL} navigateTo="dialogs">
					Dialogs
				</button>
				<button style={ui.style.BUTTON_SMALL} navigateTo="components">
					Components
				</button>
			</row>
		</ResponsiveRow>

		<spacer height={16} />
		<label dim style={{ fontSize: 12, uppercase: true }} padding={{ y: 16 }}>
			lib-comp v{__LIB_VERSION__} / Tälla UI v{__FRAMEWORK_VERSION__}
		</label>
	</ScrollPane>
);
