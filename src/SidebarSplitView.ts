import {
	$view,
	app,
	ConfigOptions,
	RenderContext,
	ui,
	UICell,
	UIContainer,
	ViewBuilder,
	UIComponent,
	ViewEvent,
} from "talla-ui";

/**
 * Style configuration for a {@link SidebarSplitView} component
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
 * Component for a sidebar split view
 *
 * A sidebar split view component displays two content areas, separated by a vertical gutter that can be moved by the user. Optionally, the position of the gutter can be stored in application settings.
 *
 * Both content areas can be hidden using individual boolean properties, which allows the component to be used for responsive list/detail views.
 *
 * @see {@link SidebarSplitViewStyles}+
 */
export class SidebarSplitView extends UIComponent.define({
	/** Unique identifier for the split view, used for storing gutter position */
	name: undefined as string | undefined,
	/** True if the sidebar should be visible */
	showSidebar: true,
	/** True if the content area should be visible */
	showContent: true,
	/** True if the sidebar should be placed on the opposite side */
	reverse: false,
	/** A set of styles that are applied to this component, an instance of {@link SidebarSplitViewStyles} */
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
				ui.show(
					{ when: $view("showSidebar") },
					ui.cell(
						{
							effect: this.styles.sidebarEffect,
							onBeforeRender: "BeforeSidebarRender",
						},
						content[0] || ui.cell(),
						ui.cell({
							hidden: $view("showSidebar").and("showContent").not(),
							position: this.reverse
								? { gravity: "overlay", top: 0, start: 0, bottom: 0 }
								: { gravity: "overlay", top: 0, end: 0, bottom: 0 },
							style: {
								width: this.styles.gutterWidth,
								cursor: "col-resize",
							},
							effect: ui.effect("DragRelative"),
						})
					)
				),
				ui.show(
					{ when: $view("showContent") },
					ui.cell(
						{
							style: { width: "100%", shrink: 1 },
							effect: this.styles.contentEffect,
						},
						content[1] || ui.cell()
					)
				)
			)
		);
	}

	protected onBeforeSidebarRender() {
		if (this.name) {
			app.renderer?.schedule(async () => {
				let [r, _err] = await app.localData.readAsync(
					"SidebarSplitView_" + this.name,
					{ width: { isNumber: {} } }
				);
				if (r?.width) this.setWidth(r.width as any);
			});
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
		let body = this.body as UICell;
		let cells = body?.findViewContent(UICell);
		if (cells?.length > 1) {
			let cell1 = cells[0] as UICell;
			cell1.style = { width: 10, minWidth: width, grow: 1, shrink: 0 };
		}

		// persist width if name is set
		if (!this.name) return;
		if (this._throttle) clearTimeout(this._throttle);
		this._throttle = setTimeout(() => {
			this._throttle = undefined;
			app.localData.writeAsync("SidebarSplitView_" + this.name, { width });
		}, 500);
	}

	private _throttle?: any;
}
