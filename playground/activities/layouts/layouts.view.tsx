import {
	HeaderPaneToolbar,
	NavContainerStyles,
	NavRow,
	PageNavButton,
	ResponsiveRow,
	ScrollPane,
} from "@talla-ui/lib-comp";
import { $viewport, ui } from "talla-ui";
import { scribbleLoopIcon } from "~/icons";
import LayoutsGrid from "./layouts.Grid";
import links from "./links";

declare const __LIB_VERSION__: string;
declare const __FRAMEWORK_VERSION__: string;

export default (
	<ScrollPane
		name="LayoutsScroll"
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
			<column spacing={8} padding={{ top: 16, bottom: 40 }}>
				<label bold fontSize={36} icon={ui.icon("painting", "🖼️")}>
					Layouts
				</label>
				<label wrap dim>
					Get started quickly with a Tälla UI application using these full-page
					skeleton examples. Use the dialogs, sections, and components to build
					out the rest of your application UI. You can import these components
					from NPM or copy the code directly from the source repository.
				</label>
			</column>
		</cell>

		<separator />
		<label dim fontSize={12} style={{ uppercase: true }} padding={{ y: 16 }}>
			App layouts
		</label>
		<LayoutsGrid list={links.layouts} />
		<spacer height={32} />

		<separator />
		<label dim fontSize={12} style={{ uppercase: true }} padding={{ y: 16 }}>
			Standalone pages
		</label>
		<LayoutsGrid list={links.pages} />
		<spacer height={16} />

		<separator margin={16} />
		<ResponsiveRow>
			<label dim>More examples →</label>
			<row>
				<button style={ui.style.BUTTON_SMALL} navigateTo="dialogs">
					Dialogs
				</button>
				<button style={ui.style.BUTTON_SMALL} navigateTo="sections">
					Sections
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
