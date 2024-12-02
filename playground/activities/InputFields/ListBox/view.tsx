import { $activity, $formContext, ui } from "talla-ui";
import SamplePane from "~/views/SamplePane";
import { ListBox, ListBoxStyles } from "@talla-ui/lib-comp";
import icons from "~/icons/icons";

const _customListBoxStyle = ListBoxStyles.init({
	rowHeight: 38,
	iconSize: 20,
	containerStyle: ui.style(ListBoxStyles.default.containerStyle, {
		borderRadius: 8,
		borderThickness: 2,
		borderColor: ui.color.TEXT,
	}),
});

export default (
	<SamplePane>
		<column align="start" spacing={16}>
			<label>Plain ListBox</label>
			<ListBox
				items={[
					{ label: "One", value: 1 },
					{ label: "Two", value: 2 },
					{ label: "Three", value: 3 },
				]}
			/>
			<separator margin={16} />
		</column>

		<column align="start" spacing={16}>
			<label>With value and decorations</label>
			<ListBox
				value="day"
				height={140}
				width={300}
				items={[
					{ label: "Day", value: "day", icon: icons.sun },
					{ label: "Night", value: "night", icon: icons.moon },
					{ label: "Custom", value: "custom", icon: ui.icon.PLUS },
				]}
				styles={_customListBoxStyle}
			/>
			<separator margin={16} />
		</column>

		<column align="start" spacing={16}>
			<label>Select on focus (arrow keys to select)</label>
			<ListBox
				formField="country"
				selectOnFocus
				height={140}
				items={$activity.list("countriesList")}
				onChange="+CountryChanged"
			/>
			<row>
				<label>Selected: {$formContext.string("values.country")}</label>
			</row>
			<separator margin={16} />
		</column>

		<spacer height={120} />
	</SamplePane>
);
