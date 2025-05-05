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
import {
	barricadeIcon,
	checkCircleIcon,
	clockIcon,
	hourglassIcon,
	listIcon,
	questionIcon,
	scribbleLoopIcon,
	textboxIcon,
	toggleRightIcon,
	warningIcon,
} from "~/icons";
import DialogsCard from "./dialogs.Card";

declare const __LIB_VERSION__: string;
declare const __FRAMEWORK_VERSION__: string;

export default (
	<ScrollPane
		name="DialogsScroll"
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
				<label bold fontSize={36} icon={ui.icon("section", "💬")}>
					Dialogs
				</label>
				<label dim wrap>
					Dialogs can be used to display messages to the user. This page
					demonstrates the different types of dialogs that can be put together
					using the framework's components.
				</label>
				<label dim wrap htmlFormat>
					{`<b>Note:</b> the builtin dialog style is customizable by passing style arguments to <code>useWebContext</code> when initializing the app.`}
				</label>
			</column>
		</cell>

		<separator margin={16} />

		<TitledWell title="Message dialogs (builtin)">
			<DialogsCard
				title="Alert"
				description="Displays a message to the user using the built-in message dialog component."
				icon={warningIcon}
				dialogId="builtin-alert"
			/>
			<separator margin={16} />
			<DialogsCard
				title="Confirmation"
				description="Displays a question or confirmation to the user using the built-in message dialog component."
				icon={questionIcon}
				dialogId="builtin-confirm"
			/>
		</TitledWell>

		<TitledWell title="Input dialogs">
			<DialogsCard
				title="Text input"
				description="Displays a dialog with a title, description, and a single text input field."
				icon={textboxIcon}
				dialogId="text-input"
			/>
			<separator margin={16} />
			<DialogsCard
				title="Toggle"
				description="Displays a dialog with a title, description, and toggle inputs."
				icon={toggleRightIcon}
				dialogId="toggle-input"
			/>
			<separator margin={16} />
			<DialogsCard
				title="Form"
				description="Displays a dialog with an input form."
				icon={listIcon}
				dialogId="form-input"
			/>
		</TitledWell>

		<TitledWell title="Choice dialogs">
			<DialogsCard
				title="Choice (dropdown)"
				description="Displays a dialog to allow the user to make a choice."
				icon={ui.icon.CHEVRON_DOWN}
				dialogId="dropdown-choice"
			/>
			<separator margin={16} />
			<DialogsCard
				title="Choice (list)"
				description="Displays a dialog to allow the user to make a choice using a list."
				icon={checkCircleIcon}
				dialogId="list-choice"
			/>
		</TitledWell>

		<TitledWell title="Progress dialogs">
			<DialogsCard
				title="Indeterminate"
				description="Displays a progress dialog with an indeterminate progress indicator."
				icon={hourglassIcon}
				dialogId="indeterminate-progress"
			/>
			<separator margin={16} />
			<DialogsCard
				title="Percentage, cancelable"
				description="Displays a complete progress dialog with a progress bar, and a cancel button."
				icon={barricadeIcon}
				dialogId="percentage-progress"
			/>
		</TitledWell>

		<TitledWell title="Toast notifications">
			<DialogsCard
				title="Simple toast"
				description="Shows a simple message to the user, disappears after a short duration."
				icon={ui.icon.CHECK}
				dialogId="simple-toast"
			/>
			<separator margin={16} />
			<DialogsCard
				title="Warning toast"
				description="Shows a warning message to the user, allowing the user to get more details by clicking the button. Also disappears after a short duration."
				icon={warningIcon}
				dialogId="warning-toast"
			/>
			<separator margin={16} />
			<DialogsCard
				title="Permanent toast"
				description="Shows a permanent message to the user, allowing the user to get more details by clicking the button, or dismiss it."
				icon={clockIcon}
				dialogId="permanent-toast"
			/>
		</TitledWell>

		<separator margin={16} />
		<ResponsiveRow>
			<label dim>More examples →</label>
			<row>
				<button style={ui.style.BUTTON_SMALL} navigateTo="layouts">
					Layouts
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
