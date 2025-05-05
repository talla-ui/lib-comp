import {
	NavColumn,
	NavContainerStyles,
	PageNavButton,
	ScrollPane,
} from "@talla-ui/lib-comp";
import { ui } from "talla-ui";
import { linkIcon, scribbleLoopIcon } from "~/icons";

const standoutButtonStyle = ui.style.BUTTON.extend({
	borderColor: { bottom: ui.color.BRAND },
	borderThickness: { bottom: 3 },
});

declare const __LIB_VERSION__: string;
declare const __FRAMEWORK_VERSION__: string;

export default (
	<ScrollPane
		titleIcon={scribbleLoopIcon}
		title="Playground"
		styles={{ titleIconColor: ui.color.BRAND }}
	>
		<label
			dim
			style={{ fontSize: 12, uppercase: true }}
			padding={{ top: 8, bottom: 16 }}
		>
			Tälla UI {__FRAMEWORK_VERSION__} / lib-comp {__LIB_VERSION__}
		</label>

		<column align="start" spacing={8}>
			<button
				icon={linkIcon}
				iconSize={16}
				chevron="next"
				style={standoutButtonStyle}
			>
				Tälla UI home
			</button>
			<button
				icon={linkIcon}
				iconSize={16}
				chevron="next"
				style={standoutButtonStyle}
			>
				lib-comp (GitHub)
			</button>
		</column>
		<spacer height={32} />

		<label dim style={{ fontSize: 12, uppercase: true }} padding={{ y: 8 }}>
			Categories
		</label>
		<cell margin={{ x: -16 }}>
			<NavColumn styles={NavContainerStyles.LIST_COLUMN}>
				<PageNavButton pageId="layouts" chevron="next">
					Layouts
				</PageNavButton>
				<PageNavButton pageId="dialogs" chevron="next">
					Dialogs
				</PageNavButton>
				<PageNavButton pageId="sections" chevron="next">
					Sections
				</PageNavButton>
				<PageNavButton pageId="components" chevron="next">
					Components
				</PageNavButton>
			</NavColumn>
		</cell>
		<spacer height={32} />
	</ScrollPane>
);
