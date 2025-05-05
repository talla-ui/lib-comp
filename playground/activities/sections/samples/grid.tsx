import { ColumnCard, ResponsiveGrid } from "@talla-ui/lib-comp";
import { $activity, $list, ui } from "talla-ui";

export default (
	<column>
		{/* Sample grid with cards */}
		<ResponsiveGrid listItems={$activity("countries")} listMaxItems={6}>
			<ColumnCard width="100%">
				<label bold>{$list("item.label")}</label>
				<label wrap>
					This is a card. It has an automatic separator, padding, and fixed
					width.
				</label>
			</ColumnCard>
		</ResponsiveGrid>
	</column>
);
