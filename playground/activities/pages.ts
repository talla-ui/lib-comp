import { ActivityList } from "talla-ui";
import { ComponentsActivity } from "./components/components";
import { DialogsActivity } from "./dialogs/dialogs";
import { LayoutsActivity } from "./layouts/layouts";
import layouts from "./layouts/samples";
import { MainActivity } from "./main/main";
import { SectionsActivity } from "./sections/sections";

export default new ActivityList().add(
	new MainActivity(),
	new LayoutsActivity(),
	new DialogsActivity(),
	new SectionsActivity(),
	new ComponentsActivity(),
	...layouts
);
