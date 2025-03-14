import { $form, ui, UIStyle } from "talla-ui";
import { ButtonSwitch, ButtonSwitchStyles } from "@talla-ui/lib-comp";
import icons from "~/icons/icons";
import SamplePane from "~/components/SamplePane";

const _customButtonSwitchStyles = ButtonSwitchStyles.init({
	align: "center",
	spacing: 8,
	containerStyle: ui.style.CELL.extend({
		background: ui.color.PURPLE,
		textColor: ui.color.PURPLE.text(),
		borderRadius: 4,
		padding: 4,
	}),
	switchButtonStyle: ui.style.BUTTON_PLAIN.extend(
		{
			borderRadius: 16,
			fontWeight: "normal",
			height: 32,
			width: 32,
			padding: 0,
		},
		{
			[UIStyle.STATE_DISABLED]: false,
			[UIStyle.STATE_PRESSED]: true,
			background: ui.color.BACKGROUND,
			textColor: ui.color.TEXT,
		}
	),
});

export default (
	<SamplePane>
		<column spacing={16}>
			<label>Plain ButtonSwitch</label>
			<row>
				<ButtonSwitch
					value={1}
					buttons={[
						{ label: "One", value: 1 },
						{ label: "Two", value: 2 },
						{ label: "Three", value: 3 },
						{ label: "Four", value: 4 },
					]}
				/>
			</row>
			<separator margin={16} />
		</column>

		<column spacing={16}>
			<label>With icons</label>
			<row>
				<ButtonSwitch
					value={"night"}
					buttons={[
						{ label: "Day", value: "day", icon: icons.sun },
						{ label: "Night", value: "night", icon: icons.moon },
					]}
					styles={{ iconSize: 16, iconMargin: 8 }}
				/>
			</row>
			<separator margin={16} />
		</column>

		<column spacing={16}>
			<label>Custom style</label>
			<row>
				<ButtonSwitch
					value={"c"}
					buttons={[
						{ label: "A", value: "a" },
						{ label: "B", value: "b" },
						{ label: "C", value: "c" },
						{ label: "D", value: "d" },
					]}
					styles={_customButtonSwitchStyles}
				/>
			</row>
			<separator margin={16} />
		</column>

		<column spacing={16}>
			<label>Bound to form field</label>
			<row>
				<ButtonSwitch
					formField="switch1"
					buttons={[
						{ label: "No", value: false, default: true },
						{ label: "Yes", value: true },
					]}
				/>
			</row>
			<row>
				<toggle formField="switch1" type="switch" />
				<label>State: {$form("values.switch1").select("ON", "OFF")}</label>
			</row>
			<separator margin={16} />
		</column>

		<spacer height={120} />
	</SamplePane>
);
