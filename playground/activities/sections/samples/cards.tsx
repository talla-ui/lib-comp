import { ScrollRow } from "../../../../lib/ScrollRow";
import {
	CalendarView,
	ColumnCard,
	EmptyStateView,
	TableList,
	TableRow,
} from "@talla-ui/lib-comp";
import { $activity, ui } from "talla-ui";

export default (
	<column>
		<row align="center" spacing={0} wrap>
			{/*
				---------------------------------------------------------------
				Sample: Card
				---------------------------------------------------------------
			*/}
			<ColumnCard margin={8}>
				<label bold>Card</label>
				<label wrap>
					This is a card. It has an automatic separator, padding, and fixed
					width.
				</label>
			</ColumnCard>

			{/*
				---------------------------------------------------------------
				Sample: Card with image
				---------------------------------------------------------------
			*/}
			<ColumnCard margin={8}>
				<column>
					<image height={100} url="https://picsum.photos/200/100" />
				</column>
				<column padding={16}>
					<label dim bold style={{ fontSize: 10, uppercase: true }}>
						Example
					</label>
					<label bold fontSize={16}>
						A picture
					</label>
					<spacer height={8} />
					<label wrap>
						Is worth a thousand words. This is a card with a picture and some
						text.
					</label>
					<row>
						<button style={ui.style.BUTTON_LINK}>Explore →</button>
					</row>
				</column>
			</ColumnCard>
		</row>
		<spacer height={8} />

		<row align="center" spacing={0} wrap>
			{/*
				---------------------------------------------------------------
				Sample: Empty state card
				> Note: refer to EmptyStateView for usage
				---------------------------------------------------------------
			*/}
			<ColumnCard margin={8} width={250}>
				<row padding={16} height={52}>
					<label bold grow>
						Empty state
					</label>
					<button icon={ui.icon.PLUS} style={ui.style.BUTTON_ICON} />
				</row>
				<EmptyStateView
					title="Empty state"
					helpText="Add an item to get started"
					styles={{ containerStyle: { padding: 16 } }}
				/>
			</ColumnCard>

			{/*
				---------------------------------------------------------------
				Sample: Calendar card with header, calendar view, and button
				> Note: refer to CalendarView for usage
				---------------------------------------------------------------
			*/}
			<ColumnCard margin={8} width={250}>
				<label bold>Calendar</label>
				<row padding={8} align="center">
					<CalendarView value={new Date()} />
				</row>
				<row padding={8}>
					<spacer />
					<button chevron="next">Continue</button>
				</row>
			</ColumnCard>

			{/*
				---------------------------------------------------------------
				Sample: Scrolling table card with header, table, and footer
				> Note: refer to TableList for usage
				---------------------------------------------------------------
			*/}
			<ColumnCard width={500} margin={8}>
				<row padding={{ x: 16, y: 12 }}>
					<label bold>Scrolling table</label>
					<spacer />
					<button style={ui.style.BUTTON_SMALL} width="auto">
						Update
					</button>
				</row>
				<TableList
					items={$activity("countries")}
					styles={{
						rowInset: 16,
						rowSeparator: { lineThickness: 1 },
						scrollHeight: 180,
					}}
				>
					<TableRow widths={[, 40]}>
						<label>%[item.label]</label>
						<label width="100%" style={{ textAlign: "end" }}>
							%[item.value]
						</label>
					</TableRow>
				</TableList>
				<row align="end" padding={{ x: 16, y: 12 }}>
					<label dim>Number of items: %[countries.length]</label>
				</row>
			</ColumnCard>
		</row>
		<separator margin={16} />

		{/*
			-------------------------------------------------------------------
			Sample: Horizontal card scroller
			-------------------------------------------------------------------
		*/}
		<ScrollRow margin={{ x: -8 }}>
			<ColumnCard margin={8} width={200}>
				<label wrap>A horizontal card scroller</label>
			</ColumnCard>
			<ColumnCard margin={8} width={200}>
				<label wrap>A horizontal card scroller</label>
			</ColumnCard>
			<ColumnCard margin={8} width={200}>
				<label wrap>A horizontal card scroller</label>
			</ColumnCard>
			<ColumnCard margin={8} width={200}>
				<label wrap>A horizontal card scroller</label>
			</ColumnCard>
			<ColumnCard margin={8} width={200}>
				<label wrap>A horizontal card scroller</label>
			</ColumnCard>
			<ColumnCard margin={8} width={200}>
				<label wrap>A horizontal card scroller</label>
			</ColumnCard>
			<ColumnCard margin={8} width={200}>
				<label wrap>A horizontal card scroller</label>
			</ColumnCard>
			<ColumnCard margin={8} width={200}>
				<label wrap>A horizontal card scroller</label>
			</ColumnCard>
		</ScrollRow>
	</column>
);
