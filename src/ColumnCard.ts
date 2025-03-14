import {
	$view,
	ConfigOptions,
	ui,
	UICell,
	UIRenderable,
	UIContainer,
	UIComponent,
} from "talla-ui";

/**
 * Style configuration for a {@link ColumnCard} composite
 *
 * Objects of this type are passed to {@link ColumnCard} as the `styles` preset property.
 */
export class ColumnCardStyles extends ConfigOptions {
	/** Default styles that are used when no other styles are specified */
	static default = new ColumnCardStyles();

	/** The padding applied to non-container elements within the card */
	contentPadding: UIRenderable.Offsets = { x: 20, y: 16 };

	/** The separator style between card elements */
	separator: UIContainer.SeparatorOptions = {
		lineThickness: 1,
		lineColor: ui.color.SEPARATOR,
	};

	/** The effect that's applied to the card container cell */
	effect = ui.effect.SHADOW;

	/** The base style for the column card container */
	containerStyle: UICell.StyleValue = ui.style.CELL_BG.extend({
		borderRadius: 16,
		maxWidth: "100%",
		grow: 0,
		shrink: 1,
	});
}

/**
 * View composite for a column-based card
 *
 * A column card composite groups together any number of elements as a column within a visually distinct 'card' view.
 *
 * The column card composite automatically inserts separators between view elements, and adds padding around any views that are not containers or view composites themselves.
 *
 * @see {@link ColumnCardStyles}+
 *
 * @class
 */
export const ColumnCard = UIComponent.define(
	{
		/** The margin around the card, defaults to `{ bottom: 8 }` for use in a grid */
		margin: { bottom: 8 } as UIRenderable.Offsets,
		/** The card position, defaults to `{ gravity: "start" }` for use in a grid */
		position: { gravity: "start" } as UIRenderable.Position,
		/** The width of the card, defaults to 320 */
		width: 320 as string | number | undefined,
		/** A set of styles that are applied to this composite, an instance of {@link ColumnCardStyles} */
		styles: ColumnCardStyles.default,
	},
	(view, ...content) =>
		ui.cell(
			{
				name: "ColumnCard",
				width: $view("width"),
				style: view.styles.containerStyle,
				position: view.position,
				margin: view.margin,
				layout: {
					distribution: "start",
					separator: view.styles.separator,
				},
				effect: view.styles.effect,
			},
			...content.map((c) =>
				c.View.prototype instanceof UIContainer ||
				c.View.prototype instanceof UIComponent
					? c
					: ui.row({ padding: view.styles.contentPadding }, c)
			)
		)
);
