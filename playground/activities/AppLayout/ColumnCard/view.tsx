import { $activity, ui } from "talla-ui";
import SamplePane from "~/views/SamplePane";
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
		<column align="start" spacing={8}>
			<label>Column card with labels</label>
			<ColumnCard>
				<label bold>Card</label>
				<label wrap>
					This is a card. Notice automatic separator, padding, and fixed width.
				</label>
			</ColumnCard>
			<separator margin={16} />
		</column>

		<column align="start" spacing={8}>
			<label>Cards in wrapping row list</label>
			<list items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}>
				<ColumnCard width={100} margin={{ bottom: 8, end: 8 }}>
					<label>Card %[item]</label>
				</ColumnCard>
				<row spacing={0} layout={{ wrapContent: true }} />
			</list>
			<separator margin={16} />
		</column>

		<column align="start" spacing={8}>
			<label>Cards in scroll row</label>
			<ScrollRow margin={-16} padding={16}>
				<list items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}>
					<ColumnCard width={100} minHeight={100}>
						<label>Card %[item]</label>
					</ColumnCard>
					<row />
				</list>
			</ScrollRow>
			<separator margin={16} />
		</column>

		<column align="start" spacing={8}>
			<label>Cards with containers and view composites</label>

			<ColumnCard>
				<label bold>Cell</label>
				<cell background={ui.color.PRIMARY_BG.alpha(0.1)} padding={8}>
					<label>No padding around cell</label>
				</cell>
			</ColumnCard>

			<ColumnCard>
				<label bold>Container</label>
				<column padding={8}>
					<CalendarView />
				</column>
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
					styles={{ rowSeparator: { lineThickness: 1 }, scrollHeight: 160 }}
				>
					<TableRow inset={16} widths={[, 40]}>
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
