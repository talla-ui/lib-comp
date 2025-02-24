import { FormContext, UIComponent } from "talla-ui";

export function bindFormField(
	composite: UIComponent & { value: any; formField?: string }
) {
	FormContext.listen(
		composite,
		(v) => {
			composite.value = v;
		},
		() => composite.value
	);
}
