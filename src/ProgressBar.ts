import {
	ConfigOptions,
	ManagedObject,
	ui,
	UIAnimatedCell,
	UICell,
	UIComponent,
	ViewComposite,
} from "talla-ui";

/**
 * Style configuration for a {@link ProgressBar} composite
 *
 * Objects of this type are passed to {@link ProgressBar} as the `styles` preset property.
 */
export class ProgressBarStyles extends ConfigOptions {
	/** Default styles that are used when no other styles are specified */
	static default = new ProgressBarStyles();

	/** Height of the progress bar */
	height = 8;

	/** Background color of the progress bar */
	backgroundColor = ui.color.CONTROL_BASE;

	/** Fill color of the progress bar */
	fillColor = ui.color.PRIMARY;

	/** Border radius of the progress bar */
	borderRadius = 8;

	/** Cell style for the outer container */
	containerStyle: UICell.StyleValue = ui.style.CELL;
}

/**
 * View composite for a progress bar
 *
 * A progress bar displays the completion progress of a task as a rectangular bar that fills from start to end.
 *
 * @see {@link ProgressBarStyles}+
 */
export class ProgressBar extends ViewComposite.define({
	/** The current progress value, between 0 and 1 */
	progress: 0,
	/** Margin around the outer container, defaults to 0 */
	margin: 0 as UIComponent.Offsets,
	/** A set of styles that are applied to this composite, an instance of {@link ProgressBarStyles} */
	styles: ProgressBarStyles.default,
}) {
	protected defineView() {
		return ui.cell(
			{
				style: this.styles.containerStyle,
				margin: this.margin,
				background: this.styles.backgroundColor,
				height: this.styles.height,
				borderRadius: this.styles.borderRadius,
				effect: ui.effect.INSET,
			},
			ui.animatedCell({
				background: this.styles.fillColor,
				borderRadius: this.styles.borderRadius,
				style: { width: 0 },
				position: {
					gravity: "overlay",
					top: 0,
					bottom: 0,
					start: 0,
				},
			})
		);
	}

	protected beforeRender() {
		this._setWidth();
		ManagedObject.observe(this, ["progress"], this._setWidth.bind(this));
	}

	private _setWidth() {
		let progress = Math.min(1, Math.max(0, this.progress));
		let view = this.findViewContent(UIAnimatedCell)[0];
		if (view) {
			view.style = { width: +(progress as any) * 100 + "%" };
		}
	}
}
