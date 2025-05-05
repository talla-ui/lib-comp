import { ui, UICell, UIRow, ViewBuilder, UIComponent } from "talla-ui";

/**
 * View composite with an area that contains horizontally scrolling content
 *
 * A scroll row composite provides a way to constrain content to a containing cell, allowing the user to scroll content left and right.
 *
 * > Note: For scrolling up and down, you can use a {@link ScrollArea} instead.
 */
export class ScrollRow extends UIComponent.define({
	/** Height of the outer container */
	height: undefined as UIRow["height"],
	/** Margin for the outer container */
	margin: undefined as UICell["margin"],
	/** Padding for the inner scrolling row */
	padding: undefined as UIRow["padding"],
	/** Gravity setting for the inner scrolling row */
	gravity: undefined as UIRow["gravity"],
	/** UI component name */
	name: "ScrollRow",
}) {
	protected defineView(...content: ViewBuilder[]) {
		return ui.cell(
			{
				style: { width: "100", grow: 0 },
				margin: this.margin,
				name: this.name,
			},
			ui.scroll(
				{
					name: this.name,
					horizontalScrollEnabled: true,
					verticalScrollEnabled: false,
					layout: { axis: "horizontal" },
				},
				ui.row(
					{
						position: { gravity: "start" },
						padding: this.padding,
						height: this.height,
						gravity: this.gravity,
						grow: true,
					},
					...content
				)
			)
		);
	}
}
