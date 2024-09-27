import { FormContext, ViewComposite } from "talla-ui";

export function bindFormField(
	composite: ViewComposite & { value: any; formField?: string }
) {
	FormContext.listen(
		composite,
		(v) => {
			composite.value = v;
		},
		() => composite.value
	);
}
