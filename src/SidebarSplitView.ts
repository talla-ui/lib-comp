import {
	$view,
	app,
	ConfigOptions,
	RenderContext,
	ui,
	UICell,
	UIContainer,
	ViewBuilder,
	ViewComposite,
	ViewEvent,
} from "talla-ui";

/**
 * Style configuration for a {@link SidebarSplitView} composite
 *
 * Objects of this type are passed to {@link SidebarSplitView} as the `styles` preset property.
 */
export class SidebarSplitViewStyles extends ConfigOptions {
	/** Default styles that are used when no other styles are specified */
	static default = new SidebarSplitViewStyles();

	/** Width of the gutter between sidebar and content */
	gutterWidth = 8;

	/** Default width of the sidebar */
	sidebarWidth: number | string = 320;

	/** Minimum width of the sidebar */
	sidebarMinWidth = 120;

	/** Maximum width of the sidebar */
	sidebarMaxWidth = 480;

	/** Separator options for the split view */
	separator?: UIContainer.SeparatorOptions & { vertical: true };

	/** Visual effect for the sidebar */
	sidebarEffect?: RenderContext.OutputEffect;

	/** Visual effect for the content area */
	contentEffect?: RenderContext.OutputEffect;
}

/**
 * View composite for a sidebar split view
 *
 * A sidebar split view composite displays two content areas, separated by a vertical gutter that can be moved by the user. Optionally, the position of the gutter can be stored in application settings.
 *
 * Both content areas can be hidden using individual boolean properties, which allows the composite to be used for responsive list/detail views.
 *
 * @see {@link SidebarSplitViewStyles}+
 */
export class SidebarSplitView extends ViewComposite.define({
	/** Unique identifier for the split view, used for storing gutter position */
	name: undefined as string | undefined,
	/** True if the sidebar should be visible */
	showSidebar: true,
	/** True if the content area should be visible */
	showContent: true,
	/** True if the sidebar should be placed on the opposite side */
	reverse: false,
	/** A set of styles that are applied to this composite, an instance of {@link SidebarSplitViewStyles} */
	styles: SidebarSplitViewStyles.default,
}) {
	protected defineView(...content: ViewBuilder[]) {
		return ui.cell(
			{ name: this.name, style: { shrink: 1 } },
			ui.row(
				{
					height: "100%",
					spacing: 0,
					reverse: this.reverse,
					layout: { separator: this.styles.separator },
				},
				ui.cell(
					{
						hidden: $view.not("showSidebar"),
						effect: this.styles.sidebarEffect,
					},
					content[0] || ui.cell(),
					ui.cell({
						hidden: $view.boolean("showSidebar").and("showContent").not(),
						position: this.reverse
							? { gravity: "overlay", top: 0, start: 0, bottom: 0 }
							: { gravity: "overlay", top: 0, end: 0, bottom: 0 },
						style: {
							width: this.styles.gutterWidth,
							css: { cursor: "col-resize" },
						},
						effect: ui.effect("DragRelative"),
					})
				),
				ui.cell(
					{
						style: { width: "100%", shrink: 1 },
						hidden: $view.not("showContent"),
						effect: this.styles.contentEffect,
					},
					content[1] || ui.cell()
				)
			)
		);
	}

	protected beforeRender() {
		if (this.name) {
			let [r, _err] = app.localData.read("SidebarSplitView_" + this.name, {
				width: {},
			});
			if (r?.width) this.styles.sidebarWidth = r.width as any;
		}
		this.setWidth(this.styles.sidebarWidth);
	}

	protected onDragRelative(e: ViewEvent) {
		let width = Math.round(
			((this.reverse ? e.data.parentRight : e.data.parentLeft) as number) +
				this.styles.gutterWidth / 2
		);
		this.setWidth(
			Math.min(
				this.styles.sidebarMaxWidth,
				Math.max(this.styles.sidebarMinWidth, width)
			)
		);
		return true;
	}

	/** Set the width of the sidebar */
	setWidth(width: string | number) {
		let cell1 = (this.body as UICell).findViewContent(UICell)[0] as UICell;
		cell1.style = { width: 10, minWidth: width, grow: 1, shrink: 0 };

		// persist width if name is set
		if (!this.name) return;
		if (this._throttle) clearTimeout(this._throttle);
		this._throttle = setTimeout(() => {
			this._throttle = undefined;
			app.localData.write("SidebarSplitView_" + this.name, { width });
		}, 500);
	}

	private _throttle?: any;
}
