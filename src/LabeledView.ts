import {
	$view,
	$viewport,
	Binding,
	ConfigOptions,
	StringConvertible,
	ui,
	UICell,
	UIColor,
	UIContainer,
	UIIconResource,
	UILabel,
	ViewBuilder,
	UIComponent,
} from "talla-ui";

/**
 * Style configuration for an {@link LabeledView} component
 *
 * Objects of this type are passed to {@link LabeledView} as the `styles` preset property.
 */
export class LabeledViewStyles extends ConfigOptions {
	/** Default styles that are used when no other styles are specified */
	static default = new LabeledViewStyles();

	/** Binding that's used to determine if elements should be shown in horizontal layout (when true), defaults to 3-column viewports */
	horizontalWhen = $viewport("col3");

	/** Cell style for the outer container */
	containerStyle: UICell.StyleValue = ui.style.CELL.extend({ shrink: 1 });

	/** Cell style for the embedded container */
	contentStyle: UICell.StyleValue = ui.style.CELL.extend({ shrink: 1 });

	/** Container layout for the embedded content */
	contentLayout: UIContainer.Layout = { gravity: "start", clip: false };

	/** Style for the title label */
	titleStyle: UILabel.StyleValue = ui.style.LABEL.extend({
		textColor: ui.color.TEXT.alpha(0.65),
		padding: { y: 4 },
	});

	/** Default width for the title label (in pixels or string with unit), defaults to 50% */
	titleWidth: number | string = "50%";

	/** Maximum width for the title label (in pixels or string with unit), defaults to 320 */
	maxTitleWidth: number | string = 320;

	/** The size of the title icon (in pixels or string with unit) */
	iconSize?: number | string;

	/** The title icon color, if different from label text color */
	iconColor?: UIColor;

	/** The title icon margin, if any */
	iconMargin?: number | string;
}

/**
 * Component that encapsulates a title label in front or above an embedded view
 *
 * A labeled view component combines a title label (with an optional icon), and an embedded view. The label can be shown above the view (vertical layout) or to the side (horizontal layout). The layout is bound to the viewport width so that horizontal layout is selected for wider viewports, as configured using {@link LabeledViewStyles}.
 */
export class LabeledView extends UIComponent.define({
	/** The title label text */
	title: StringConvertible.EMPTY,
	/** The title icon, if any */
	icon: undefined as UIIconResource | undefined,
	/** Styles configuration */
	styles: LabeledViewStyles.default,
	/** True if clicking the title label should focus an embedded input element */
	focusOnTitlePress: false,
}) {
	protected defineView(...content: ViewBuilder[]) {
		let boundHorz = this.styles.horizontalWhen;
		if (!(boundHorz instanceof Binding)) throw TypeError();
		return ui.cell(
			{
				style: this.styles.containerStyle,
				layout: boundHorz.select(
					{ axis: "horizontal", gravity: "start", clip: false },
					{ axis: "vertical", gravity: "start", clip: false }
				),
			},

			// title label
			ui.label({
				text: $view("title"),
				icon: $view("icon"),
				iconSize: this.styles.iconSize,
				iconColor: this.styles.iconColor,
				iconMargin: this.styles.iconMargin,
				style: boundHorz.select(
					ui.style(this.styles.titleStyle, {
						shrink: 0,
						width: this.styles.titleWidth,
						maxWidth: this.styles.maxTitleWidth,
					}),
					this.styles.titleStyle
				),
				onPress: this.focusOnTitlePress ? "RequestFocusNext" : undefined,
			}),

			// add other content within its own shrinking container
			ui.cell(
				{
					style: this.styles.contentStyle,
					layout: this.styles.contentLayout,
				},
				...content
			)
		);
	}
}
