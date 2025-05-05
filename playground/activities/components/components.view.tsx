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
import builtin from "./samples/builtin";
import buttonSwitches from "./samples/button-switches";
import comboFields from "./samples/combo-fields";
import datePickers from "./samples/date-pickers";
import dateTimeInput from "./samples/date-time-input";
import editInPlace from "./samples/edit-in-place";
import listBoxes from "./samples/list-boxes";
import selectFields from "./samples/select-fields";
import progress from "./samples/progress";

declare const __LIB_VERSION__: string;
declare const __FRAMEWORK_VERSION__: string;

export default (
	<ScrollPane
		name="ComponentsScroll"
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
				<label bold fontSize={36} icon={ui.icon("component", "💫")}>
					Components
				</label>
				<label wrap dim>
					Components are the building blocks of your UI. They can be used
					directly to create interactive interfaces. Basic components are built
					into the framework, which are used to create more complex components
					as part of the library.
					{"\n\n"}
					You can copy-paste each example below into your own project to get
					started with the UI components provided by the library.
				</label>
			</column>
		</cell>

		<separator margin={16} />

		<TitledWell
			title="Basic controls (built-in)"
			maxContentWidth={600}
			sourceId="builtin"
		>
			{builtin}
		</TitledWell>

		<TitledWell title="Button switches" sourceId="button-switches">
			{buttonSwitches}
		</TitledWell>

		<TitledWell
			title="Edit-in-place fields"
			maxContentWidth={600}
			sourceId="edit-in-place"
		>
			{editInPlace}
		</TitledWell>

		<TitledWell
			title="Select fields"
			maxContentWidth={400}
			sourceId="select-fields"
		>
			{selectFields}
		</TitledWell>

		<TitledWell title="List boxes" maxContentWidth={400} sourceId="list-boxes">
			{listBoxes}
		</TitledWell>

		<TitledWell
			title="Combo fields"
			maxContentWidth={400}
			sourceId="combo-fields"
		>
			{comboFields}
		</TitledWell>

		<TitledWell title="Date pickers" sourceId="date-pickers">
			{datePickers}
		</TitledWell>

		<TitledWell
			title="Date and time input fields"
			maxContentWidth={400}
			sourceId="date-time-input"
		>
			{dateTimeInput}
		</TitledWell>

		<TitledWell title="Progress bar" maxContentWidth={400} sourceId="progress">
			{progress}
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
				<button style={ui.style.BUTTON_SMALL} navigateTo="sections">
					Sections
				</button>
			</row>
		</ResponsiveRow>

		<spacer height={16} />
		<label dim style={{ fontSize: 12, uppercase: true }} padding={{ y: 16 }}>
			lib-comp v{__LIB_VERSION__} / Tälla UI v{__FRAMEWORK_VERSION__}
		</label>
	</ScrollPane>
);
