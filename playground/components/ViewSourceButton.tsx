import { ui, UIComponent } from "talla-ui";
import { fileCodeIcon } from "~/icons";

export default UIComponent.define(
	{
		/** An ID that can be used to identify the source of the view, added to the emitted event data as `id`. */
		id: "",
		/** The label to display on the button. */
		label: "Source",
	},
	(p) => (
		<button
			icon={fileCodeIcon}
			style={ui.style.BUTTON_PLAIN.override({ opacity: 0.5 })}
			label={p.label}
		/>
	),
	(view) => ({
		Click: () => {
			view.emit("ViewSource", { id: view.id });
		},
	})
);
