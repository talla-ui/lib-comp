import { $activity, $list, ui } from "talla-ui";
import SamplePane from "~/views/SamplePane";
import { TableHeader, TableList, TableRow } from "@talla-ui/lib-comp";

export default (
	<SamplePane>
		<column align="start" spacing={16}>
			<label>Default table with header, equal columns</label>
			<TableList items={[1, 2, 3, 4]}>
				<TableHeader>
					<label>Name</label>
					<label>Number</label>
					<label>Description</label>
				</TableHeader>
				<TableRow>
					<label>Item</label>
					<label>%[item]</label>
					<label>Item %[item]</label>
				</TableRow>
			</TableList>
			<separator margin={16} />
		</column>

		<column align="start" spacing={16}>
			<label>Scrolling table with styles</label>
			<TableList
				items={$activity.list("countries")}
				styles={{
					containerStyle: ui.style.CELL.override({
						borderColor: ui.color.TEXT.alpha(0.5),
						borderThickness: 2,
						borderRadius: 8,
					}),
					scrollHeight: 200,
					rowHeight: 48,
					rowSeparator: { lineThickness: 1 },
					rowInset: 16,
				}}
			>
				<TableHeader widths={[60]}>
					<label bold>ID</label>
					<label bold>Country</label>
					<row align="end">
						<label bold>Length</label>
					</row>
				</TableHeader>
				<TableRow widths={[60, , 40]}>
					<label>%[item.value]</label>
					<label>%[item.label]</label>
					<row align="end">
						<label>%[item.label.length]</label>
					</row>
				</TableRow>
			</TableList>
			<separator margin={16} />
		</column>

		<column align="start" spacing={16}>
			<label>Selectable list</label>
			<TableList
				items={$activity.list("selectable")}
				styles={{
					scrollHeight: 280,
					rowSeparator: { lineThickness: 1 },
				}}
			>
				<TableHeader widths={[60, 40]}>
					<toggle
						state={$activity.boolean("allSelected")}
						onChange="CountryToggleAll"
					/>
					<label bold>ID</label>
					<label bold>Country</label>
				</TableHeader>
				<TableRow
					widths={[60, 40]}
					selected={$list.boolean("item.selected")}
					onClick="CountryToggle"
				>
					<toggle
						state={$list.boolean("item.selected")}
						onChange="CountryToggle"
					/>
					<label>%[item.value]</label>
					<label>%[item.label]</label>
				</TableRow>
			</TableList>
			<label dim>
				%[numSelected] %[numSelected:plural|country|countries] selected.
			</label>
			<separator margin={16} />
		</column>

		<spacer height={120} />
	</SamplePane>
);
