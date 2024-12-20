import {
	$list,
	$view,
	ConfigOptions,
	UICell,
	UIColor,
	UIContainer,
	UIListView,
	ViewClass,
	ViewComposite,
	ui,
} from "talla-ui";
import { ScrollArea } from "./ScrollArea.js";

/**
 * Style configuration for a {@link TableList} composite
 *
 * Objects of this type are passed to {@link TableList} as the `styles` preset property.
 */
export class TableListStyles extends ConfigOptions {
	/** Default styles that are used when no other styles are specified */
	static defaults = new TableListStyles();

	/** Fixed height, for scrollable tables */
	scrollHeight?: number;

	/** Row height, defaults to 40 */
	rowHeight = 40;

	/** Row padding, defaults to 8 */
	rowInset = 8;

	/** Cell style for the container cell */
	containerStyle?: ui.CellStyle = { grow: 0 };

	/** Styles for the separator between rows, if any */
	rowSeparator?: UIContainer.Layout["separator"];

	/** Background color for selected table rows */
	selectedBackground: UIColor = ui.color.PRIMARY_BG;
	/** Text color for selected table rows */
	selectedTextColor: UIColor = ui.color.PRIMARY_BG.text();
}

/**
 * View composite for a table list
 *
 * A table list composite contains multiple table rows, each with a fixed number of columns to form a table grid.
 *
 * Table rows are automatically created using a preset TableRow view within the table's `UIListView`, based on the elements of a bound array or managed list in {@link items}. Table rows therefore all have the same number of columns and size.
 *
 * A table list view composite can be preset with a single {@link TableRow} constructor, or a {@link TableHeader} and {@link TableRow} constructor. Styles may be included, including a fixed height value, which makes the table scrollable within a {@link ScrollArea} view.
 *
 * @see {@link TableListStyles}+
 * @see {@link TableRow}+
 */
export class TableList extends ViewComposite.define({
	/** The list of items to display in the table */
	items: undefined as Iterable<unknown> | undefined,
	/** A set of styles that are applied to this composite, an instance of {@link TableListStyles} */
	styles: TableListStyles.defaults,
	/** UI component identifier */
	name: "TableList",
	/** Render options for the list view */
	renderOptions: { async: true } as UIListView["renderOptions"],
}) {
	protected defineView(headingOrRow?: ViewClass, row?: ViewClass) {
		let listRow = row || headingOrRow || ui.row();
		let content: ViewClass[] = [
			ui.list(
				{
					items: $view.list("items"),
					renderOptions: this.renderOptions,
				},
				listRow,
				ui.column({
					accessibleRole: "table",
					layout: { separator: this.styles.rowSeparator },
				}),
				ui.spacer()
			),
		];
		if (row && headingOrRow) {
			content.unshift(headingOrRow);
		}
		return this.styles.scrollHeight
			? ui.use(
					ScrollArea,
					{
						height: this.styles.scrollHeight,
						cellStyle: this.styles.containerStyle,
						name: this.name,
					},
					...content
			  )
			: ui.cell(
					{
						style: ui.style(this.styles.containerStyle),
						name: this.name,
					},
					...content
			  );
	}
}

/**
 * View composite for a table row
 *
 * This class is used to define the view content of each row in a {@link TableList}. Content in the table must be preset using constructors of this type.
 */
export class TableRow<TItem extends any = unknown> extends ViewComposite.define(
	{
		/** The widths of each column in the row */
		widths: [] as (number | string | undefined)[],
		/** True if the row is currently hidden */
		hidden: false,
		/** True if the row is currently selected */
		selected: false,
		/** Style for the containing cell */
		style: undefined as ui.CellStyle | undefined,
	}
) {
	protected beforeRender() {
		if (UIListView.whence(this)) {
			$list.bind("item").bindTo(this, "item");
		}
		let tableList = TableList.whence(this);
		(this.body as UICell).style = ui.style(this.style, {
			height: tableList?.styles.rowHeight,
		});
	}

	/** The item bound to this row (undefined for table header) */
	item?: TItem;

	defineView(...content: ViewClass[]) {
		return ui.cell(
			{
				hidden: $view.boolean("hidden"),
				background: $view
					.boolean("selected")
					.and("styles.selectedBackground")
					.else(undefined),
				textColor: $view
					.boolean("selected")
					.and("styles.selectedTextColor")
					.else(undefined),
				layout: { axis: "horizontal", gravity: "center" },
				style: this.style,
				padding: $view.bind("styles.rowInset"),
				accessibleRole: "row",
			},
			...content.map((c, i) =>
				ui.cell(
					{
						style: {
							width: this.widths[i] || 0,
							maxWidth: this.widths[i] || undefined,
						},
						layout: { clip: false, axis: "horizontal", distribution: "fill" },
						accessibleRole: "cell",
					},
					c
				)
			)
		);
	}
}

/**
 * A table row composite with specific styles for a table header
 *
 * A table header row composite can be used as the first content preset of a {@link TableList}, to display a header above all table rows.
 */
export class TableHeader extends TableRow {
	style: ui.CellStyle = ui.style.CELL.extend({
		background: ui.color.BACKGROUND.contrast(-0.1),
		grow: 0,
		borderColor: ui.color.SEPARATOR,
		borderThickness: { bottom: 1 },
		padding: { x: 8 },
		css: { position: "sticky", zIndex: "10" },
	});
}
