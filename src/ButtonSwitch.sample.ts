import { ui } from "talla-ui";
import { ButtonSwitch } from "./ButtonSwitch.js";

{
	// @doc-start ButtonSwitch:sample
	const view = ui.cell(
		// ...
		ui.use(ButtonSwitch, {
			buttons: [{ label: "First" }],
		})
	);
	// @doc-end
}
