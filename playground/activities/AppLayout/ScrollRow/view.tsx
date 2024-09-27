import { $activity, ui } from "talla-ui";
import SamplePane from "~/views/SamplePane";
import { ColumnCard, ScrollRow } from "@talla-ui/lib-comp";

export default (
	<SamplePane>
		<cell
			style={{
				width: 300,
				borderColor: ui.color.SEPARATOR,
				borderThickness: 1,
			}}
		>
			<column align="start">
				<row padding={8}>
					<label>Scroll row with buttons</label>
				</row>
				<separator margin={0} />
				<ScrollRow padding={8}>
					<button primary>Edit</button>
					<button>Details</button>
					<button>Delete</button>
					<button>Copy</button>
					<button>Analyze</button>
					<button>Report</button>
				</ScrollRow>
			</column>
		</cell>
		<separator margin={32} />

		<column align="start" spacing={8}>
			<label>With cards (using negative margin)</label>
			<ScrollRow margin={-16} padding={16}>
				<list items={$activity.list("countries")}>
					<ColumnCard width={180} margin={{ bottom: 8, end: 12 }}>
						<cell background={ui.color.TEXT.alpha(0.1)}>
							<row padding={16}>
								<label>%[item.label]</label>
								<spacer />
								<label bold>%[item.value]</label>
							</row>
							<spacer height={60} />
							<row align="end" padding={8}>
								<button style={ui.style.BUTTON_SMALL} chevron="next">
									View
								</button>
							</row>
						</cell>
					</ColumnCard>
					<row />
				</list>
			</ScrollRow>
		</column>

		<spacer height={120} />
	</SamplePane>
);