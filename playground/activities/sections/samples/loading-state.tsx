import { LoadingStateView } from "@talla-ui/lib-comp";
import { $activity, ui } from "talla-ui";

export default (
	<cell>
		{/*
			-------------------------------------------------------------------
			Sample: Default loading state (three bars)
			-------------------------------------------------------------------
		*/}
		<cell
			style={{ width: "100%", maxWidth: 400, height: 200 }}
			position={{ gravity: "center" }}
		>
			<LoadingStateView />
		</cell>
		<separator margin={16} />

		{/*
			-------------------------------------------------------------------
			Sample: Default loading state with bound view
			-------------------------------------------------------------------
		*/}
		<cell
			style={{ width: "100%", maxWidth: 400, height: 200 }}
			position={{ gravity: "center" }}
		>
			<column>
				<button onPress="LoadView">Toggle</button>
				<spacer height={8} />
			</column>
			<LoadingStateView view={$activity("loadedView")} />
		</cell>
		<separator margin={16} />

		{/*
			-------------------------------------------------------------------
			Sample: Loading state with title and custom 'paragraph' shape
			-------------------------------------------------------------------
		*/}
		<cell
			style={{ width: "100%", maxWidth: 400, height: 200 }}
			position={{ gravity: "center" }}
		>
			<LoadingStateView
				title="Some title"
				styles={{
					align: "start",
					barHeights: [14, 14, 14, 14],
					barWidths: ["100%", "100%", "100%", "30%"],
				}}
			/>
		</cell>
		<separator margin={16} />

		{/*
			-------------------------------------------------------------------
			Sample: Loading state with custom shapes
			-------------------------------------------------------------------
		*/}
		<cell
			style={{ width: "100%", maxWidth: 200, height: 300 }}
			position={{ gravity: "center" }}
		>
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
		</cell>
		<separator margin={16} />

		{/*
			-------------------------------------------------------------------
			Sample: Small loading state view (three dots)
			-------------------------------------------------------------------
		*/}
		<LoadingStateView
			styles={{
				align: "center",
				height: 200,
				barHeights: [6, 6, 6],
				barWidths: [6, 6, 6],
				spacing: 6,
			}}
		/>
	</cell>
);
