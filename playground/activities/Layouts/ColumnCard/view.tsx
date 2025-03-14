import { $activity, ui } from "talla-ui";
import SamplePane from "~/components/SamplePane";
import {
	CalendarView,
	ColumnCard,
	EmptyStateView,
	ScrollRow,
	TableList,
	TableRow,
} from "@talla-ui/lib-comp";

export default (
	<SamplePane>
		<column spacing={16}>
			<label>Column card with labels</label>
			<ColumnCard>
				<label bold>Card</label>
				<label wrap>
					This is a card. Notice automatic separator, padding, and fixed width.
				</label>
			</ColumnCard>
			<separator margin={16} />
		</column>

		<column spacing={16}>
			<label>Cards in wrapping row list</label>
			<list items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}>
				<ColumnCard width={100} margin={{ bottom: 8, end: 8 }}>
					<label>Card %[item]</label>
				</ColumnCard>
				<row spacing={0} wrap />
			</list>
			<separator margin={16} />
		</column>

		<column spacing={16}>
			<label>Cards in scroll row</label>
			<ScrollRow margin={-16} padding={16}>
				<list items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}>
					<ColumnCard width={100}>
						<label padding={{ y: 32 }}>Card %[item]</label>
					</ColumnCard>
					<row spacing={16} />
				</list>
			</ScrollRow>
			<separator margin={16} />
		</column>

		<column spacing={16}>
			<label>Card with alternative container style</label>
			<ColumnCard
				width={280}
				styles={{
					containerStyle: ui.style.CELL.extend({
						background: ui.color.BACKGROUND.contrast(-0.1),
						borderRadius: 8,
					}),
					effect: undefined,
				}}
			>
				<cell style={{ minHeight: 200 }}>
					<image url="https://picsum.photos/280/200" width="100%" />
				</cell>
				<column padding={16} align="start">
					<label bold>A different kind of card</label>
					<label>With container style</label>
				</column>
			</ColumnCard>
			<separator margin={16} />
		</column>

		<column spacing={16}>
			<label>Cards with containers and view composites</label>

			<ColumnCard>
				<label bold>Cell</label>
				<cell background={ui.color.PRIMARY_BG.alpha(0.1)} padding={8}>
					<label>No padding around cell</label>
				</cell>
			</ColumnCard>

			<ColumnCard>
				<label bold>Container</label>
				<row padding={8} align="center">
					<CalendarView />
				</row>
				<row padding={8}>
					<spacer />
					<button chevron="next">Continue</button>
				</row>
			</ColumnCard>

			<ColumnCard>
				<label bold>View composite</label>
				<EmptyStateView title="Empty state" />
			</ColumnCard>

			<ColumnCard>
				<row padding={{ x: 16, y: 8 }}>
					<label bold>Scrolling table</label>
					<spacer />
					<button style={ui.style.BUTTON_SMALL} width="auto">
						Update
					</button>
				</row>
				<TableList
					items={$activity.list("countries")}
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
				<row align="end" padding={{ x: 16, y: 8 }}>
					<label dim>Number of items: %[countries.length]</label>
				</row>
			</ColumnCard>

			<separator margin={16} />
		</column>

		<spacer height={120} />
	</SamplePane>
);
