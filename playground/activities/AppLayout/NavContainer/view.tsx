import { ui } from "talla-ui";
import SamplePane from "~/views/SamplePane";
import {
	ColumnCard,
	DetailNavButton,
	ListNavColumn,
	NavColumn,
	NavRow,
	PageNavButton,
	ScrollRow,
	SidebarNavColumn,
	TabNavRow,
} from "@talla-ui/lib-comp";
import icons from "~/icons/icons";

export default (
	<SamplePane>
		<column align="start" spacing={16} layout={{ clip: true }}>
			<label>Plain nav row</label>
			<NavRow>
				<PageNavButton pageId="input">Input fields</PageNavButton>
				<PageNavButton pageId="form-layout">Form layout</PageNavButton>
				<PageNavButton pageId="app-layout">App layout</PageNavButton>
				<PageNavButton pageId="patterns">View patterns</PageNavButton>
			</NavRow>
			<separator margin={8} />
			<NavRow>
				<DetailNavButton detail="NavContainer">NavContainer</DetailNavButton>
				<DetailNavButton detail="HeaderPane">HeaderPane</DetailNavButton>
				<DetailNavButton detail="ScrollRow">ScrollRow</DetailNavButton>
			</NavRow>
			<separator margin={16} />
		</column>

		<column align="start" spacing={16}>
			<label>Tab nav row, in scroll row</label>
			<ScrollRow padding={{ y: 8 }}>
				<TabNavRow>
					<DetailNavButton detail="NavContainer">NavContainer</DetailNavButton>
					<DetailNavButton detail="HeaderPane">HeaderPane</DetailNavButton>
					<DetailNavButton detail="ScrollRow">ScrollRow</DetailNavButton>
					<DetailNavButton detail="ScrollPane">ScrollPane</DetailNavButton>
					<DetailNavButton detail="ScrollArea">ScrollArea</DetailNavButton>
				</TabNavRow>
			</ScrollRow>
			<separator margin={16} />
		</column>

		<column align="start" spacing={16}>
			<label>Plain nav column</label>
			<NavColumn>
				<PageNavButton pageId="input">Input fields</PageNavButton>
				<PageNavButton pageId="form-layout">Form layout</PageNavButton>
				<PageNavButton pageId="app-layout">App layout</PageNavButton>
				<PageNavButton pageId="patterns">View patterns</PageNavButton>
			</NavColumn>
			<separator margin={16} />
		</column>

		<column align="start" spacing={16}>
			<label>Sidebar nav column, with icons</label>
			<SidebarNavColumn>
				<PageNavButton icon={icons.calendar} pageId="input">
					Input fields
				</PageNavButton>
				<PageNavButton icon={icons.world} pageId="form-layout">
					Form layout
				</PageNavButton>
				<PageNavButton icon={icons.art} pageId="app-layout">
					App layout
				</PageNavButton>
				<PageNavButton icon={icons.code} pageId="patterns">
					View patterns
				</PageNavButton>
			</SidebarNavColumn>
			<separator margin={16} />
		</column>

		<column align="start" spacing={16}>
			<label>List nav column in card, with chevrons</label>
			<ColumnCard>
				<row padding={{ start: 16, end: 4, y: 8 }}>
					<label bold>Categories</label>
					<spacer />
					<button style={ui.style.BUTTON_ICON} icon={ui.icon.CHEVRON_DOWN} />
				</row>
				<ListNavColumn>
					<DetailNavButton chevron="next" detail="NavContainer">
						NavContainer
					</DetailNavButton>
					<DetailNavButton chevron="next" detail="HeaderPane">
						HeaderPane
					</DetailNavButton>
					<DetailNavButton chevron="next" detail="ScrollRow">
						ScrollRow
					</DetailNavButton>
					<DetailNavButton chevron="next" detail="ScrollPane">
						ScrollPane
					</DetailNavButton>
					<DetailNavButton chevron="next" detail="ScrollArea">
						ScrollArea
					</DetailNavButton>
				</ListNavColumn>
			</ColumnCard>
			<separator margin={16} />
		</column>

		<spacer height={120} />
	</SamplePane>
);
