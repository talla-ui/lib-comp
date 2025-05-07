import { UICell, UIComponent, UIRenderable, ui } from "talla-ui";

/**
 * Component with an area that contains scrolling content
 *
 * A scroll area component provides a way to constrain content to a containing cell, allowing the user to scroll content up and down.
 *
 * > Note: For scrolling left and right, you can use a {@link ScrollRow} instead.
 *
 * @class
 */
export const ScrollArea = UIComponent.define(
	{
		/** Cell style for the outer container */
		cellStyle: undefined as UICell.StyleValue | undefined,
		/** Height of the outer container */
		height: undefined as number | string | undefined,
		/** Width of the outer container */
		width: undefined as number | string | undefined,
		/** Padding within the scroll area */
		padding: undefined as UIRenderable.Offsets | undefined,
		/** True if horizontal scrolling is enabled */
		horizontalScrollEnabled: false as boolean,
		/** UI component name */
		name: "ScrollArea",
	},
	(values, ...content) =>
		ui.cell(
			{
				style: values.cellStyle,
				height: values.height,
				width: values.width,
				grow: false,
				name: values.name,
			},
			ui.scroll(
				{
					padding: values.padding,
					horizontalScrollEnabled: values.horizontalScrollEnabled,
				},
				...content
			)
		)
);
