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
	TabNavRow,
} from "@talla-ui/lib-comp";
import icons from "~/icons/icons";

export default (
	<SamplePane>
		<column spacing={16} layout={{ clip: true }}>
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

		<column spacing={16}>
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

		<column spacing={16}>
			<label>Nav column with icons</label>
			<NavColumn width={200}>
				<PageNavButton icon={icons.calendar} pageId="input">
					Input fields
				</PageNavButton>
				<PageNavButton icon={icons.link} pageId="form-layout">
					Form layout
				</PageNavButton>
				<PageNavButton icon={icons.layout} pageId="app-layout">
					App layout
				</PageNavButton>
				<PageNavButton icon={icons.code} pageId="patterns">
					View patterns
				</PageNavButton>
			</NavColumn>
			<separator margin={16} />
		</column>

		<column spacing={16}>
			<label>List nav column in card, with chevrons</label>
			<ColumnCard>
				<row height={38} padding={16}>
					<label bold>List:</label>
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
