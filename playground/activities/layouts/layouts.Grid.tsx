import { ColumnCard, ResponsiveGrid } from "@talla-ui/lib-comp";
import { $list, $view, ui, UIComponent } from "talla-ui";

export default UIComponent.define(
	{
		list: undefined as any[] | undefined,
	},
	() => (
		<ResponsiveGrid listItems={$view("list")}>
			<ColumnCard width="100%" navigateTo={$list("item.navigateTo")}>
				<cell background={ui.color("#777")} effect={ui.effect.INSET}>
					<row align="center">
						<image url={$list("item.image")} height={150} />
					</row>
				</cell>
				<row spacing={0}>
					<button
						navigateTo={$list("item.navigateTo")}
						style={ui.style.BUTTON_PLAIN.override({
							background: ui.color.CLEAR,
							padding: { x: 16, y: 8 },
							textAlign: "start",
						})}
					>
						{$list("item.title")}
					</button>
				</row>
			</ColumnCard>
		</ResponsiveGrid>
	)
);
