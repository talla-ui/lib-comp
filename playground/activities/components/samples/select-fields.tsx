import { FormEntry, SelectField } from "@talla-ui/lib-comp";
import { ui } from "talla-ui";
import { moonIcon, sunIcon } from "~/icons";

export default (
	<column spacing={8}>
		{/* Sample 1 */}
		<FormEntry label="Regular select field">
			<SelectField
				width={240}
				label="Placeholder"
				options={[
					{ label: "One", value: "1" },
					{ label: "Two", value: "2" },
					{ label: "Three", value: "3" },
				]}
			/>
		</FormEntry>
		<spacer />

		{/* Sample 2 */}
		<FormEntry label="Select field with icons">
			<SelectField
				width={240}
				value="night"
				options={[
					{ label: "Day", value: "day", icon: sunIcon },
					{ label: "Night", value: "night", icon: moonIcon },
				]}
			/>
		</FormEntry>
		<spacer />

		{/* Sample 3 */}
		<FormEntry label="Select field bound to form context">
			<SelectField
				width={100}
				formField="selectBool"
				options={[
					{ label: "Yes", value: true },
					{ label: "No", value: false },
				]}
			/>
		</FormEntry>
		<toggle formField="selectBool" label="Toggle" />
		<spacer />

		{/* Sample 4 */}
		<FormEntry label="Select field with just-in-time options">
			<SelectField label="Select..." onBeforeSelect="OpenJITSelect" grow />
		</FormEntry>
	</column>
);
