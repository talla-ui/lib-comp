import { $activity, $formContext, ui, UIStyle } from "talla-ui";
import SamplePane from "~/views/SamplePane";
import { ComboField, ListBox, ListBoxStyles } from "@talla-ui/lib-comp";

const _comboListBoxStyles = ListBoxStyles.init({
	containerStyle: ui.style.CELL_BG.extend({
		borderRadius: 4,
		padding: { y: 4 },
	}),
	selectedListCellStyle: ListBoxStyles.default.selectedListCellStyle.extend({
		css: { cursor: "pointer" },
	}),
	listCellStyle: ListBoxStyles.default.listCellStyle.extend({
		[UIStyle.STATE_HOVERED]: true,
		background: ui.color.PRIMARY_BG,
		textColor: ui.color.PRIMARY_BG.text(),
		css: { cursor: "pointer" },
	}),
});

export default (
	<SamplePane>
		<column align="start" spacing={8}>
			<label>Empty ComboField (does nothing)</label>
			<row>
				<ComboField value="Text" />
			</row>
			<separator margin={16} />
		</column>

		<column align="start" spacing={8}>
			<label>ComboField with cell popup and clear</label>
			<row>
				<ComboField
					icon={ui.icon.CHEVRON_DOWN}
					placeholder="Enter text..."
					openOnFocus
					showClearButton
				>
					<cell padding={16}>
						<label>Hello, world!</label>
						<button
							onClick="SetComboValue"
							onRelease="CloseOverlay"
							value="Hello, world!"
							style={ui.style.BUTTON_SMALL}
						>
							Set
						</button>
					</cell>
				</ComboField>
			</row>
			<separator margin={16} />
		</column>

		<column align="start" spacing={8}>
			<label>ComboField with options list</label>
			<label bold>Selected: {$formContext.string("values.country")}</label>
			<row>
				<ComboField
					icon={ui.icon.SEARCH}
					formField="countryName"
					placeholder="Country"
					openOnFocus
					showClearButton
					onChange="+CountryChanged"
					onInput="+FilterCountries"
					onOpenOverlay="+FilterCountries"
				>
					<ListBox
						height={200}
						selectOnFocus
						onChange="SetComboValue"
						onBackspaceKeyPress="+CloseOverlay"
						onEnterKeyPress="+CloseOverlay"
						onItemClick="+CloseOverlay"
						items={$activity.list("countryOptions")}
						styles={_comboListBoxStyles}
					/>
				</ComboField>
			</row>
			<separator margin={16} />
		</column>

		<spacer height={120} />
	</SamplePane>
);
