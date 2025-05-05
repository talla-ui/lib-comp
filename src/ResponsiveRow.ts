import {
	$view,
	$viewport,
	ui,
	UIComponent,
	UIContainer,
	UIRenderable,
	UITheme,
} from "talla-ui";

/**
 * A responsive row that changes to vertical layout on small viewports.
 *
 * The row will automatically adjust its layout based on the viewport size, based on the defined breakpoint.
 *
 * @class
 */
export const ResponsiveRow = UIComponent.define(
	{
		/** The breakpoint below which the row changes to vertical layout, defaults to `"col2"`. */
		breakpoint: "col2" as "col2" | "col3" | "col4" | "col5",
		/** True if the row or column itself should grow to fill the available space, defaults to `false`. */
		grow: false,
		/** True if content should be displayed in reverse order (regardless of breakpoint, may be bound independently) */
		reverse: false,
		/** The default axis for wider viewports, defaults to `"horizontal"` */
		axis: "horizontal" as UIContainer.Layout["axis"],
		/** Gravity of items in vertical layout, defaults to `"start"`. */
		columnGravity: "start" as UIContainer.Layout["gravity"],
		/** Gravity of items in horizontal layout, defaults to `"start"`. */
		rowGravity: "start" as UIContainer.Layout["gravity"],
		/** Alignment of items in horizontal layout, defaults to `"start"`. */
		rowAlign: "start" as UIContainer.Layout["gravity"],
		/** Space between items, same as `UIRow` and `UIColumn` */
		spacing: UITheme.getSpacing() as number | string | undefined,
		/** Padding around the row, same as `UIRow` and `UIColumn`, defaults to `0` */
		padding: 0 as UIRenderable.Decoration["padding"],
		/** Name of the responsive row, defaults to `"ResponsiveRow"`. */
		name: "ResponsiveRow",
	},
	(p, ...content) =>
		ui.row(
			{
				name: p.name,
				layout: $viewport(p.breakpoint).select(
					...(((a, b) => (p.axis === "horizontal" ? [a, b] : [b, a]))(
						{
							axis: "horizontal",
							gravity: p.rowGravity,
							distribution: p.rowAlign,
						},
						{
							axis: "vertical",
							gravity: p.columnGravity,
						}
					) as [UIContainer.Layout, UIContainer.Layout])
				),
				reverse: $view("reverse"),
				grow: $view("grow"),
				spacing: $view("spacing"),
				padding: $view("padding"),
			},
			...content
		)
);
