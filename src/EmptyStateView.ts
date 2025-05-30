import {
	$view,
	ConfigOptions,
	StringConvertible,
	ui,
	UICell,
	UIIconResource,
	UILabel,
	UIComponent,
} from "talla-ui";

/**
 * Style configuration for an {@link EmptyStateView} component
 *
 * Objects of this type are passed to {@link EmptyStateView} as the `styles` preset property.
 */
export class EmptyStateViewStyles extends ConfigOptions {
	/** Default styles that are used when no other styles are specified */
	static default = new EmptyStateViewStyles();

	/** Default icon to display when no other icon is specified */
	icon = ui.icon.SEARCH;
	/** Size of the icon */
	iconSize = 48;
	/** Color of the icon */
	iconColor = ui.color.TEXT.alpha(0.3);

	/** Cell style for the outer container */
	containerStyle: UICell.StyleValue = ui.style.CELL.extend({
		height: 240,
	});

	/** Style for the title label */
	titleStyle: UILabel.StyleValue = ui.style.LABEL.extend({
		bold: true,
		fontSize: 18,
		padding: 8,
	});

	/** Style for the help text label */
	helpTextStyle: UILabel.StyleValue = ui.style.LABEL.extend({
		textAlign: "center",
		opacity: 0.5,
		lineBreakMode: "pre-wrap",
	});
}

/**
 * Component for an empty state view
 *
 * An empty state view component combines a title label, an icon, and help text (all optional), as a placeholder for content that is missing or has yet to be created.
 *
 * The 'search' icon is used by default if no icon is specified. Additional content may be added to the empty state view, such as a button to allow the user to add an item in the current context.
 *
 * @see {@link EmptyStateViewStyles}+
 *
 * @class
 */
export const EmptyStateView = UIComponent.define(
	{
		/** True if the empty state view should not be rendered */
		hidden: false,
		/** The icon to display (overrides the default icon in styles) */
		icon: undefined as UIIconResource | undefined,
		/** The title text to display */
		title: StringConvertible.EMPTY,
		/** The help text to display */
		helpText: StringConvertible.EMPTY,
		/** A set of styles that are applied to this component, an instance of {@link EmptyStateViewStyles} */
		styles: EmptyStateViewStyles.default,
	},
	(values, ...content) =>
		ui.show(
			{ unless: $view("hidden") },
			ui.cell(
				{ style: values.styles.containerStyle },
				ui.column(
					{ align: "center", distribute: "center" },
					ui.spacer({ height: 16 }),
					ui.label({
						icon: $view("icon").or("styles.icon"),
						iconColor: values.styles.iconColor,
						iconSize: values.styles.iconSize,
					}),
					ui.label({
						text: $view("title"),
						style: values.styles.titleStyle,
					}),
					ui.label({
						text: $view("helpText"),
						style: values.styles.helpTextStyle,
					}),
					ui.spacer({ height: 32 }),
					...content
				)
			)
		)
);
