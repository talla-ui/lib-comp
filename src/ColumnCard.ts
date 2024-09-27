import {
	ConfigOptions,
	ui,
	UIComponent,
	UIContainer,
	ViewComposite,
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
	contentPadding: UIComponent.Offsets = { x: 16, y: 8 };

	/** The separator style between card elements */
	separator: UIContainer.SeparatorOptions = {
		lineThickness: 1,
		lineColor: ui.color.SEPARATOR,
	};

	/** The effect that's applied to the card container cell */
	effect = ui.effect.SHADOW;

	/** The base style for the column card container */
	containerStyle = ui.style.CELL_BG.extend({
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
export const ColumnCard = ViewComposite.define(
	{
		/** The margin around the card, defaults to `{ bottom: 8 }` for use in a grid */
		margin: { bottom: 8 } as UIComponent.Offsets,
		/** The card position, defaults to `{ gravity: "start" }` for use in a grid */
		position: { gravity: "start" } as UIComponent.Position,
		/** The width of the card, defaults to 320 */
		width: 320 as string | number | undefined,
		/** Minimum height of the card, defaults to undefined */
		minHeight: undefined as string | number | undefined,
		/** Maximum height of the card, defaults to undefined */
		maxHeight: undefined as string | number | undefined,
		/** A set of styles that are applied to this composite, an instance of {@link ColumnCardStyles} */
		styles: ColumnCardStyles.default,
	},
	(values, ...content) =>
		ui.cell(
			{
				name: "ColumnCard",
				style: ui.style(values.styles.containerStyle, {
					width: values.width,
					minHeight: values.minHeight,
					maxHeight: values.maxHeight,
				}),
				position: values.position,
				margin: values.margin,
				layout: {
					distribution: "start",
					separator: values.styles.separator,
				},
				effect: values.styles.effect,
			},
			...content.map((c) =>
				c.prototype instanceof UIContainer ||
				c.prototype instanceof ViewComposite
					? c
					: ui.row({ padding: values.styles.contentPadding }, c)
			)
		)
);
