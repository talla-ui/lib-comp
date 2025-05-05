import { TableHeader, TableList, TableRow } from "@talla-ui/lib-comp";
import { $activity, $list, $viewport, ui } from "talla-ui";
import { userCircleIcon } from "~/icons";

export default (
	<cell>
		{/*
			-------------------------------------------------------------------
			Sample: Simple table
			-------------------------------------------------------------------
		*/}
		<TableList
			items={[1, 2, 3, 4]}
			styles={{ containerStyle: ui.style.CELL_BG }}
		>
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
		<spacer height={16} />

		{/*
			-------------------------------------------------------------------
			Sample: Table with more complex, responsive rows
			-------------------------------------------------------------------
		*/}
		<TableList
			items={[1, 2, 3, 4]}
			styles={{
				rowSeparator: {
					lineThickness: 1,
					lineColor: ui.color.TEXT.alpha(0.1),
				},
				containerStyle: ui.style.CELL_BG.override({ minWidth: 360 }),
			}}
		>
			<TableHeader
				widths={[40, undefined, 80]}
				hideColumns={[, , $viewport.not("col2")]}
			>
				<spacer />
				<label>Name</label>
				<label>Number</label>
				<spacer />
			</TableHeader>
			<TableRow
				style={{ height: 60 }}
				widths={[40, undefined, 80]}
				hideColumns={[, , $viewport.not("col2")]}
			>
				<label icon={userCircleIcon} />
				<column>
					<label bold>Item %[item]</label>
					<label dim>Description</label>
				</column>
				<label>%[item]</label>
				<row align="end" grow>
					<button style={ui.style.BUTTON_PLAIN} chevron="next">
						View{"  "}
					</button>
					<button
						hidden={$viewport.not("col2")}
						style={ui.style.BUTTON_ICON}
						icon={ui.icon.MORE}
						iconSize={20}
					/>
				</row>
			</TableRow>
		</TableList>
		<spacer height={16} />

		{/*
			-------------------------------------------------------------------
			Sample: Table with selectable rows
			-------------------------------------------------------------------
		*/}
		<TableList
			items={$activity("selectable")}
			styles={{
				scrollHeight: 288,
				rowSeparator: { lineThickness: 1 },
				containerStyle: { background: ui.color.BACKGROUND },
			}}
		>
			<TableHeader widths={[60, 40]}>
				<toggle state={$activity("allSelected")} onChange="CountryToggleAll" />
				<label bold>ID</label>
				<label bold>Country</label>
			</TableHeader>
			<TableRow
				widths={[60, 40]}
				selected={$list("item.selected")}
				onClick="CountryToggle"
			>
				<toggle state={$list("item.selected")} onChange="CountryToggle" />
				<label>%[item.value]</label>
				<label>%[item.label]</label>
			</TableRow>
		</TableList>

		<row height={48} align="end">
			<label dim>
				%[numSelected] %[numSelected:plural|country|countries] selected.
			</label>
		</row>
	</cell>
);
