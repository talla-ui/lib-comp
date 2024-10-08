import { ViewComposite, ui } from "talla-ui";

/**
 * View composite with an area that contains scrolling content
 *
 * A scroll area composite provides a way to constrain content to a containing cell, allowing the user to scroll content up and down.
 *
 * > Note: For scrolling left and right, you can use a {@link ScrollRow} instead.
 *
 * @class
 */
export const ScrollArea = ViewComposite.define(
	{
		/** Cell style for the outer container */
		cellStyle: undefined as ui.CellStyle | undefined,
		/** Height of the outer container */
		height: undefined as number | string | undefined,
		/** Width of the outer container */
		width: undefined as number | string | undefined,
		/** UI component name */
		name: "ScrollArea",
	},
	(values, ...content) =>
		ui.cell(
			{
				style: ui.style(ui.style.CELL, values.cellStyle, {
					height: values.height,
					width: values.width,
					grow: 0,
				}),
				name: values.name,
			},
			ui.scroll(...content)
		)
);
