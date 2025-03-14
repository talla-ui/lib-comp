import { $activity, ui } from "talla-ui";
import SamplePane from "~/components/SamplePane";
import { LoadingStateView } from "@talla-ui/lib-comp";

export default (
	<SamplePane>
		<column spacing={16}>
			<label>Perpetual loading state</label>
			<LoadingStateView text="Please wait..." />
			<separator margin={16} />
		</column>

		<column spacing={16}>
			<label>Resolving loading state</label>
			<LoadingStateView
				view={$activity("nested.view")}
				title="Nested Activity"
			/>
			<separator margin={16} />
		</column>

		<column spacing={16}>
			<label>Text-styled placeholder</label>
			<LoadingStateView
				title="Some title"
				styles={{
					align: "start",
					barHeights: [14, 14, 14],
					barWidths: ["100%", "100%", "30%"],
				}}
			/>
			<separator margin={16} />
		</column>

		<column spacing={16}>
			<label>Card-styled placeholder, no padding</label>
			<LoadingStateView
				styles={{
					width: 200,
					padding: 0,
					align: "end",
					barHeights: [140, 16, 38],
					barWidths: ["100%", "100%", "50%"],
					barColors: [ui.color.TEXT.alpha(0.5), , ui.color.PRIMARY_BG],
				}}
			/>
			<separator margin={16} />
		</column>

		<column spacing={16}>
			<label>Small placeholder</label>
			<LoadingStateView
				styles={{
					align: "center",
					height: 200,
					barHeights: [6, 6, 6],
					barWidths: [6, 6, 6],
					spacing: 6,
				}}
			/>
			<separator margin={16} />
		</column>

		<spacer height={120} />
	</SamplePane>
);
