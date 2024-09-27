import { $view, bind, StringConvertible, ui, ViewComposite } from "talla-ui";

/**
 * View composite for a form entry block
 *
 * A form entry composite groups together a form input field and several labels for field names, help text, and/or error messages.
 *
 * The contained form field can be of any type, including built-in components (i.e. text field, toggle) and view composites such as {@link ButtonSwitch}, {@link SelectField}, and {@link DateInputField}.
 *
 * **Events** — All events from the contained form field and labels are delegated by this view composite.
 *
 * @class
 */
export const FormEntry = ViewComposite.define(
	{
		/** Text for the field name label */
		label: StringConvertible.EMPTY,
		/** Help text, displayed underneath the input element (e.g. format hints or other requirements) */
		helpText: StringConvertible.EMPTY,
		/** Error text, displayed underneath the input element and help text */
		errorText: StringConvertible.EMPTY,
		/** A form field ID, to bind the error text to a `FormContext` field validation error */
		errorFormField: undefined as string | undefined,
		/** The width of the container that groups all elements */
		width: undefined as number | string | undefined,
	},
	(values, ...content) => {
		let errorBinding = values.errorFormField
			? bind(`formContext.errors.${values.errorFormField}.message`)
			: $view.string("errorText");
		return ui.column(
			{
				align: "start",
				padding: { bottom: 8 },
				name: "FormEntry",
				width: values.width,
			},
			ui.cell({
				hidden: errorBinding.not(),
				position: { gravity: "overlay", top: 0, bottom: 0, left: -16 },
				style: { width: 4 },
				background: ui.color.DANGER,
			}),
			ui.label({
				hidden: $view.not("label"),
				text: values.label,
				width: "100%",
				style: { fontSize: 12 },
				onClick: "RequestFocusNext",
			}),
			...content,
			ui.label({
				hidden: $view.not("helpText"),
				text: $view.string("helpText"),
				style: { fontSize: 12, padding: { top: 4 } },
				dim: true,
				selectable: true,
			}),
			ui.label({
				hidden: errorBinding.not(),
				text: errorBinding,
				style: { fontSize: 12, padding: { top: 4 } },
				color: ui.color.DANGER,
				selectable: true,
			})
		);
	}
);
