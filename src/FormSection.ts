import { $viewport, StringConvertible, ui, ViewComposite } from "talla-ui";
import { ColumnCard, ColumnCardStyles } from "./ColumnCard.js";

/**
 * View composite that can be used as a part of a {@link FormSection}
 *
 * The form section description is displayed in the title area of the form section — i.e. above the field set on narrow viewports, or beside it on wider viewports. The description may include a title and description text, but may also contain any other content, which is displayed using a column layout.
 */
export class FormSectionDescription extends ViewComposite.define(
	{
		/** The form section title, displayed in bold */
		title: undefined as StringConvertible | undefined,
		/** The description text, displayed underneath the title, if any */
		text: undefined as StringConvertible | undefined,
		name: "FormSectionDescription",
	},
	(values, ...content) => {
		if (values.title) {
			content = [ui.label({ bold: true, text: values.title }), ...content];
		}
		if (values.text) {
			content = [...content, ui.label({ text: values.text, wrap: true })];
		}
		return ui.column({ align: "start", name: values.name }, ...content);
	}
) {}

/**
 * View composite for a form section
 *
 * A form section displays a visual grouping of a form field set (i.e. a {@link ColumnCard} with one or more content areas) along with a description that appears either at the top or on the side — depending on the current viewport width.
 *
 * On narrow viewports, a title and description is displayed above the field set card; on wider viewports (4 columns and above), these are displayed in a column to the left or right of the field set card.
 *
 * **Content**
 * - If a title is specified as a property, it is displayed in the title area;
 * - If a {@link FormSectionDescription} is preset as content of the form section, it is displayed in the title area instead.
 * - Any other content is added to the {@link ColumnCard}, separated using a horizontal divider. Containers and view composites do not receive any padding, but individual input components do.
 *
 * @see {@link FormSectionDescription}+
 *
 * @class
 */
export const FormSection = ViewComposite.define(
	{
		/** The title of the form section, if not using a {@link FormSectionDescription} */
		title: undefined as StringConvertible | undefined,
		/** True if the title should appear on the opposite side (i.e. right, on LTR locales) on wide viewports */
		rowTitleAfter: false,
		/** Column card styles, an instance of {@link ColumnCardStyles}, removes the cell shadow by default */
		styles: ColumnCardStyles.init({ effect: undefined }),
	},
	(values, ...content) => {
		if (values.title) {
			content = [
				ui.use(FormSectionDescription, { title: values.title }),
				...content,
			];
		}
		let titleColumn = content.filter((c) => c.View === FormSectionDescription);
		content = content.filter((c) => c.View !== FormSectionDescription);
		return ui.cell(
			{
				layout: { clip: false },
				name: "FormSection",
			},
			ui.row(
				{
					spacing: 0,
					layout: { wrapContent: true },
					reverse: values.rowTitleAfter ? $viewport.boolean("col4") : false,
				},
				ui.cell(
					{
						layout: { clip: false, distribution: "start" },
						position: { gravity: "start" },
						margin: values.rowTitleAfter
							? $viewport
									.boolean("col4")
									.select({ start: 16, bottom: 16 }, { bottom: 16 })
							: { end: 16, bottom: 16 },
						style: $viewport
							.not("col4")
							.select({ width: "100%", shrink: 1 }, { width: 300, grow: 0 }),
					},
					...titleColumn
				),
				ui.cell(
					{
						layout: { clip: false, distribution: "start" },
						position: { gravity: "start" },
						style: $viewport
							.not("col4")
							.select({ width: "100%", shrink: 1 }, { width: 0 }),
					},
					ui.use(
						ColumnCard,
						{
							position: { gravity: "stretch" },
							styles: values.styles,
							width: undefined,
						},
						...content
					)
				)
			)
		);
	}
);
