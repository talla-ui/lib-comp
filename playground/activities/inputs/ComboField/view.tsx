import { $activity, $form, ui, UIStyle } from "talla-ui";
import SamplePane from "~/components/SamplePane";
import { ComboField, ListBox, ListBoxStyles } from "@talla-ui/lib-comp";

const _comboListBoxStyles = ListBoxStyles.init({
	containerStyle: ui.style.CELL.extend({
		borderRadius: 4,
		padding: { y: 4 },
	}),
	selectedListCellStyle: ui.style(ListBoxStyles.default.selectedListCellStyle, {
		css: { cursor: "pointer" },
	}),
	listCellStyle: ui.style.CELL.extend({
		[UIStyle.STATE_HOVERED]: true,
		background: ui.color.PRIMARY_BG,
		textColor: ui.color.PRIMARY_BG.text(),
		css: { cursor: "pointer" },
	}),
});

export default (
	<SamplePane>
		<column spacing={16}>
			<label>Empty ComboField (does nothing)</label>
			<row>
				<ComboField value="Text" />
			</row>
			<separator margin={16} />
		</column>

		<column spacing={16}>
			<label>ComboField with cell popup and clear</label>
			<row>
				<ComboField
					icon={ui.icon.CHEVRON_DOWN}
					placeholder="Enter text..."
					openOnFocus
					showClearButton
					width={400}
					styles={{ overlayEffect: undefined }}
				>
					<cell padding={16}>
						<label padding={16}>Hello, world!</label>
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

		<column spacing={16}>
			<label>ComboField with options list</label>
			<label bold>Selected: {$form.string("values.country")}</label>
			<row>
				<ComboField
					icon={ui.icon.SEARCH}
					styles={{ iconSize: 20 }}
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
						onItemSelected="+CloseOverlay"
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
