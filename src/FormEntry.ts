import {
	$form,
	$view,
	StringConvertible,
	ui,
	UIComponent,
	UIRenderable,
} from "talla-ui";

/**
 * Component for a form entry block
 *
 * A form entry component groups together a form input field and several labels for field names, help text, and/or error messages.
 *
 * The contained form field can be of any type, including built-in components (i.e. text field, toggle) and UI components such as {@link ButtonSwitch}, {@link SelectField}, and {@link DateInputField}.
 *
 * **Events** — All events from the contained form field and labels are delegated by this component.
 *
 * @class
 */
export const FormEntry = UIComponent.define(
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
		/** Padding around the container that groups all elements */
		padding: undefined as UIRenderable.Offsets | undefined,
	},
	(values, ...content) => {
		let errorBinding = values.errorFormField
			? $form(`errors.${values.errorFormField}.message`)
			: $view("errorText");
		return ui.column(
			{
				name: "FormEntry",
				width: values.width,
				padding: values.padding,
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
				style: ui.style.LABEL_SMALL,
				padding: { y: 6 },
				onClick: "RequestFocusNext",
			}),
			...content,
			ui.label({
				hidden: $view.not("helpText"),
				text: $view("helpText"),
				style: ui.style.LABEL_SMALL,
				padding: { top: 8 },
				dim: true,
				wrap: true,
				selectable: true,
			}),
			ui.label({
				hidden: errorBinding.not(),
				text: errorBinding,
				style: ui.style.LABEL_SMALL,
				color: ui.color.DANGER,
				padding: { top: 8 },
				selectable: true,
			})
		);
	}
);
