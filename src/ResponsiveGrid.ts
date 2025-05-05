import {
	$either,
	$view,
	$viewport,
	ui,
	UIComponent,
	UIListView,
	ViewBuilder,
} from "talla-ui";

// Helper function to get a view builder for the surrounding cell
function makeCellBuilder(p: any, ...content: ViewBuilder[]) {
	return ui.cell(
		{
			layout: {
				axis: "horizontal",
				distribution: "start",
				wrapContent: true,
				clip: false,
			},
			margin: { end: -p.gap, bottom: -p.gap },
		},
		...content
	);
}

// Helper function to wrap an item in an animated cell
function wrapItem(p: any, ...it: ViewBuilder[]) {
	return ui.animatedCell(
		{
			layout: { clip: false },
			style: { grow: 0, shrink: 1, maxWidth: p.maxItemWidth },
			width: $either(
				$viewport.not("col2").select(p.itemWidths[0]),
				$viewport.not("col3").select(p.itemWidths[1], p.itemWidths[2])
			),
			padding: { end: p.gap, bottom: p.gap },
		},
		...it
	);
}

/**
 * A responsive grid that adjusts the width of its items based on the viewport size.
 *
 * The grid will automatically adjust the width of its items based on the viewport size, using the `itemWidths` property to determine the width of each item at different viewport sizes. Items are therefore displayed in rows of 1, 2, or 3 columns (or more, for wider viewports), with a gap between each item.
 *
 * @class
 */
export const ResponsiveGrid = UIComponent.define(
	{
		/** The gap between grid items, defaults to 16 */
		gap: 16,
		/** The maximum width of each grid item, defaults to 432 */
		maxItemWidth: 432,
		/** The set widths of each item at col1, col2, and wider viewport sizes, defaults to `"100%"`, `"50%"`, and `320` respectively */
		itemWidths: ["100%", "50%", 320] as (string | number)[],
		/** An array or observed list of items, if any, to render as a list */
		listItems: undefined as Iterable<any> | undefined,
		/** The index of the first item to render in the list, if `listItems` is defined, defaults to 0 */
		listFirstIndex: 0 as number | undefined,
		/** The maximum number of items to render in the list, if `listItems` is defined, defaults to the length of the list */
		listMaxItems: undefined as number | undefined,
		/** The render options for the list, if `listItems` is defined, defaults to `"default"` */
		listRenderOptions: undefined as UIListView.RenderOptions | undefined,
	},
	(p, ...content): ViewBuilder =>
		p.listItems
			? ui.list(
					{
						items: p.listItems,
						firstIndex: $view("listFirstIndex"),
						maxItems: $view("listMaxItems"),
						renderOptions: $view("listRenderOptions"),
					},
					wrapItem(p, ...content),
					makeCellBuilder(p)
			  )
			: makeCellBuilder(p, ...content.map((it) => wrapItem(p, it)))
);
