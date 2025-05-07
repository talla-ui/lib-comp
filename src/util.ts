import { FormContext, UIComponent } from "talla-ui";

export function bindFormField(
	component: UIComponent & { value: any; formField?: string }
) {
	FormContext.listen(
		component,
		(v) => {
			component.value = v;
		},
		() => component.value
	);
}
