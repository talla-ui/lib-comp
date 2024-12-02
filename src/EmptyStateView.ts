import {
	$view,
	ConfigOptions,
	StringConvertible,
	ui,
	UIIconResource,
	ViewComposite,
} from "talla-ui";

/**
 * Style configuration for an {@link EmptyStateView} composite
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
	constainerStyle: ui.CellStyle = ui.style.CELL.extend({ minHeight: 240 });
	/** Style for the title label */
	titleStyle: ui.LabelStyle = ui.style.LABEL.extend({
		bold: true,
		fontSize: 18,
		padding: 8,
	});
	/** Style for the help text label */
	helpTextStyle: ui.LabelStyle = ui.style.LABEL.extend({
		textAlign: "center",
		opacity: 0.5,
		lineBreakMode: "pre-wrap",
	});
}

/**
 * View composite for an empty state view
 *
 * An empty state view composite combines a title label, an icon, and help text (all optional), as a placeholder for content that is missing or has yet to be created.
 *
 * The 'search' icon is used by default if no icon is specified. Additional content may be added to the empty state view, such as a button to allow the user to add an item in the current context.
 *
 * @see {@link EmptyStateViewStyles}+
 *
 * @class
 */
export const EmptyStateView = ViewComposite.define(
	{
		/** The icon to display (overrides the default icon in styles) */
		icon: undefined as UIIconResource | undefined,
		/** The title text to display */
		title: StringConvertible.EMPTY,
		/** The help text to display */
		helpText: StringConvertible.EMPTY,
		/** A set of styles that are applied to this composite, an instance of {@link EmptyStateViewStyles} */
		styles: EmptyStateViewStyles.default,
	},
	(values, ...content) =>
		ui.cell(
			{ style: values.styles.constainerStyle },
			ui.column(
				{ distribute: "center" },
				ui.spacer({ height: 16 }),
				ui.label({
					icon: $view.bind("icon").or("styles.icon"),
					iconColor: values.styles.iconColor,
					iconSize: values.styles.iconSize,
				}),
				ui.label({
					text: $view.string("title"),
					style: values.styles.titleStyle,
				}),
				ui.label({
					text: $view.string("helpText"),
					style: values.styles.helpTextStyle,
				}),
				ui.spacer({ height: 32 }),
				...content
			)
		)
);
