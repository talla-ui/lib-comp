import { FormEntry, ListBox } from "@talla-ui/lib-comp";
import { $activity, $form, ui } from "talla-ui";

export default (
	<column spacing={8}>
		{/* Sample 1 */}
		<FormEntry label="Plain list box">
			<ListBox
				value={1}
				items={[
					{ label: "One", value: 1 },
					{ label: "Two", value: 2 },
					{ label: "Three", value: 3 },
				]}
			/>
		</FormEntry>
		<spacer />

		{/* Sample 2 */}
		<FormEntry label="Select on focus (arrow keys to select)">
			<ListBox
				formField="listBoxCountry"
				selectOnFocus
				height={140}
				items={$activity("countries")}
			/>
		</FormEntry>

		<row>
			<label>Selected: {$form("values.listBoxCountry").else("(none)")}</label>
		</row>
	</column>
);
