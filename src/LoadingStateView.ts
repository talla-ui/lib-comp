import {
	$view,
	app,
	ConfigOptions,
	ObservedObject,
	StringConvertible,
	ui,
	UIColor,
	UIRenderable,
	UILabel,
	View,
	UIComponent,
} from "talla-ui";

/**
 * Style configuration for an {@link LoadingStateView} composite
 *
 * Objects of this type are passed to {@link LoadingStateView} as the `styles` preset property.
 */
export class LoadingStateViewStyles extends ConfigOptions {
	/** Default styles that are used when no other styles are specified */
	static default = new LoadingStateViewStyles();

	/** Height of the placeholder view, defaults to undefined to grow to the height of the parent view */
	height?: number | string;

	/** Width of the placeholder view, defaults to undefined to grow to the width of the parent view */
	width?: number | string;

	/** Animated bar widths, defaults to `["100%", "100%", "100%"]` */
	barWidths: Array<number | string | undefined> = ["100%", "100%", "100%"];

	/** Animated bar heights, defaults to 16 if not specified */
	barHeights: Array<number | string | undefined> = [];

	/** Animated bar colors, defaults to text color if not specified */
	barColors: Array<UIColor | undefined> = [];

	/** Alignment of the placeholder view, defaults to `"center"` */
	align: "center" | "start" | "end" = "center";

	/** Distribution of the placeholder view, defaults to `"center"` */
	distribute: "center" | "start" | "end" = "center";

	/** Spacing between the bars and/or labels, defaults to 16 */
	spacing: number = 16;

	/** Padding around the placeholder view, defaults to 16 */
	padding?: UIRenderable.Offsets = 16;

	/** Style for the text label */
	labelStyle: UILabel.StyleValue = ui.style.LABEL.extend({
		opacity: 0.5,
		lineBreakMode: "pre-wrap",
	});

	/** Style for the title label */
	titleStyle: UILabel.StyleValue = ui.style.LABEL.extend({
		opacity: 0.5,
		bold: true,
	});
}

/**
 * View composite for a renderer that displays a loading state placeholder while the bound content view is undefined
 *
 * A loading state view composite combines an animation and label text, as a placeholder for content that is loading.
 *
 * The content binding is passed to a <show> (`UIShowView`) instance, so the view needs to be attached to another observed object (e.g. an activity); refer to the `UIShowView` documentation for more information.
 *
 * @see {@link LoadingStateViewStyles}+
 *
 * @class
 */
export class LoadingStateView extends UIComponent.define({
	/** The text to display */
	text: StringConvertible.EMPTY,
	/** The title to display */
	title: StringConvertible.EMPTY,
	/** A set of styles that are applied to this composite, an instance of {@link LoadingStateViewStyles} */
	styles: LoadingStateViewStyles.default,
	/** The (bound) content view to display, hiding the loading state view when defined */
	view: undefined as View | undefined,
}) {
	defineView() {
		return ui.show({ insert: $view("view").or("placeholder") });
	}

	placeholder?: View = undefined;
	glow = false;

	protected beforeRender() {
		let builder = ui.cell(
			{
				height: this.styles.height,
				width: this.styles.width,
				padding: this.styles.padding,
			},
			ui.column(
				{
					width: "100%",
					align: this.styles.align,
					distribute: this.styles.distribute,
					spacing: this.styles.spacing,
					grow: true,
				},
				ui.label({
					hidden: $view.not("title"),
					text: $view("title"),
					style: this.styles.titleStyle,
				}),
				...this.styles.barWidths.map((width, index) =>
					ui.animatedCell({
						position: { gravity: "auto" },
						height: this.styles.barHeights[index] ?? 16,
						grow: false,
						width: width ?? "100%",
						background: this.styles.barColors[index] ?? ui.color.TEXT,
						borderRadius: 2,
						opacity: $view("glow").select(0.4, 0.05),
						animationDuration: 500 + index * 500,
					})
				),
				ui.label({
					hidden: $view.not("text"),
					text: $view("text"),
					style: this.styles.labelStyle,
				})
			)
		);
		this.placeholder = this.attach(builder.create());
		ObservedObject.observe(this, ["view"], () => {
			if (!this.view) this.update();
		});
		this.update();
	}

	update(t = 400) {
		if (this.isUnlinked() || this._scheduled) return;
		this._scheduled = true;
		setTimeout(() => {
			app.renderer?.schedule(() => {
				this._scheduled = false;
				if (this.isUnlinked() || this.view) return;
				this.glow = !this.glow;
				this.update(1200);
			}, true);
		}, t);
	}

	_scheduled = false;
}
