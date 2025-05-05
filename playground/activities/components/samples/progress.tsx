import { FormEntry, ProgressBar } from "@talla-ui/lib-comp";
import { $activity, ui } from "talla-ui";

// Note: for a complete modal progress dialog, see `ProgressDialog` sample

export default (
	<column spacing={8}>
		{/* Default progress bar sample */}
		<FormEntry label="Default">
			<ProgressBar progress={$activity("progress")} />
		</FormEntry>
		<spacer height={16} />

		{/* Sample styled progress bar */}
		<FormEntry label="With styles">
			<ProgressBar
				styles={{
					height: 16,
					backgroundColor: ui.color.BACKGROUND,
					fillColor: ui.color.SUCCESS_BG,
					borderRadius: 2,
					containerStyle: ui.style.CELL.extend({
						borderColor: ui.color.SEPARATOR,
						borderThickness: 1,
					}),
				}}
				progress={$activity("progress")}
			/>
		</FormEntry>
	</column>
);
