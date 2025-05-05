import { ButtonSwitch } from "@talla-ui/lib-comp";
import { ui } from "talla-ui";
import { moonIcon, sunIcon } from "~/icons";

export default (
	<column spacing={16} align="center">
		<row>
			{/* Basic button switch */}
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

		<row>
			{/* Button switch with icons */}
			<ButtonSwitch
				buttons={[
					{ label: "Day", value: "day", icon: sunIcon },
					{ label: "Night", value: "night", icon: moonIcon, default: true },
				]}
				styles={{ iconSize: 16, iconMargin: 8, iconColor: ui.color.BRAND }}
			/>
		</row>

		<row wrap align="center">
			{/* Button switch bound to a form field */}
			<ButtonSwitch
				formField="selectBool"
				buttons={[
					{ label: "No", value: false },
					{ label: "Yes", value: true },
				]}
			/>
			<label dim>... bound to:</label>
			<toggle formField="selectBool" label="Toggle" />
		</row>
	</column>
);
