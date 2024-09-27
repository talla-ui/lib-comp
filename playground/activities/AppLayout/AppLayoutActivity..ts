import { ui } from "talla-ui";
import { CategoryActivity } from "../Category/CategoryActivity";
import { ColumnCardSample } from "./ColumnCard/ColumnCardSample";
import { TableListSample } from "./TableList/TableListSample";
import { ScrollAreaSample } from "./ScrollArea/ScrollAreaSample";
import { ScrollRowSample } from "./ScrollRow/ScrollRowSample";
import { ScrollPaneSample } from "./ScrollPane/ScrollPaneSample";
import { HeaderPaneSample } from "./HeaderPane/HeaderPaneSample";
import { SidebarSplitViewSample } from "./SidebarSplitView/SidebarSplitViewSample";
import { NavContainerSample } from "./NavContainer/NavContainerSample";

export class AppLayoutActivity extends CategoryActivity {
	static readonly instance = new AppLayoutActivity();

	constructor() {
		super([
			ColumnCardSample,
			TableListSample,
			ScrollAreaSample,
			ScrollRowSample,
			ScrollPaneSample,
			HeaderPaneSample,
			NavContainerSample,
			SidebarSplitViewSample,
		]);
		this.title = "App layout";
		this.navigationPageId = "app-layout";
	}

	color = ui.color("#b6a").alpha(0.8);
}
