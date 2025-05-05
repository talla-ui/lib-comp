import { ComboField, FormEntry, ListComboField } from "@talla-ui/lib-comp";
import { $activity, $form, ui } from "talla-ui";
import { globeIcon } from "~/icons";

export default (
	<column>
		{/* Plain combo field (uncommon) */}
		<FormEntry label="Type to search">
			<ComboField
				icon={ui.icon.SEARCH}
				styles={{ iconSize: 20 }}
				placeholder="City"
				openOnFocus
			>
				<cell height={180} allowFocus>
					<label icon={globeIcon} align="center">
						Select on map
					</label>
				</cell>
			</ComboField>
		</FormEntry>
		<spacer height={16} />

		{/* Combo list field (type to filter options) */}
		<FormEntry label="Type to search">
			<ListComboField
				icon={ui.icon.SEARCH}
				styles={{ iconSize: 20 }}
				formField="countryName"
				placeholder="Country"
				onChange="+CountryChanged"
				onFilter="+FilterCountries"
				items={$activity("countriesInput")}
			/>
		</FormEntry>
		<spacer height={8} />
		<label>Selected: {$form("values.country").else("(none)")}</label>
	</column>
);
