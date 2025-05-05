import {
	NavColumn,
	NavContainerStyles,
	PageNavButton,
	ScrollArea,
} from "@talla-ui/lib-comp";
import { ui } from "talla-ui";
import {
	browsersIcon,
	gearIcon,
	layoutIcon,
	tabsIcon,
	textboxIcon,
	userCircleIcon,
} from "~/icons";

export default (
	// Outer scroll area for the sidebar
	<ScrollArea
		height="100%"
		padding={{ x: 8 }}
		cellStyle={{
			background: ui.color.DARKER_GRAY,
			textColor: ui.color.WHITE,
		}}
	>
		{/* Header row with title and icon buttons */}
		<row height={64} padding={{ x: 12 }}>
			<label bold fontSize={18}>
				Playground
			</label>
			<spacer />
			<button icon={ui.icon.SEARCH} style={ui.style.BUTTON_ICON} />
			<button icon={userCircleIcon} style={ui.style.BUTTON_ICON} />
		</row>
		<spacer height={8} />

		{/* Navigation column */}
		<NavColumn styles={NavContainerStyles.LIST_SIDEBAR_DARK} grow>
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
			<spacer />
			<separator color={ui.color.GRAY} />
			<PageNavButton icon={gearIcon}>Settings</PageNavButton>
			<spacer height={8} />
		</NavColumn>
	</ScrollArea>
);
