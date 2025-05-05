import { ActivityList } from "talla-ui";
import { AuthCardActivity } from "./auth-card";
import { AuthImageActivity } from "./auth-image";
import { AuthSimpleActivity } from "./auth-simple";
import { DarkNavbarActivity } from "./dark-navbar";
import { DynamicNavbarActivity } from "./dynamic-navbar";
import { NavbarOnlyActivity } from "./navbar-only";
import { NavbarOverlapActivity } from "./navbar-overlap";
import { PageFormActivity } from "./page-form";
import { StackedHeadingActivity } from "./stacked-heading";
import { StackedHeadingWellActivity } from "./stacked-heading-well";
import { SidebarOnlyActivity } from "./sidebar-only";
import { DarkSidebarActivity } from "./dark-sidebar";
import { NavbarSidebarFixedActivity } from "./navbar-sidebar-fixed";
import { NavbarSidebarSubActivity } from "./navbar-sidebar-sub";
import { SidebarCompactActivity } from "./sidebar-compact";
import { SidebarDrawerActivity } from "./sidebar-drawer";

export default new ActivityList().add(
	new AuthSimpleActivity(),
	new AuthCardActivity(),
	new AuthImageActivity(),
	new PageFormActivity(),
	new NavbarOnlyActivity(),
	new DarkNavbarActivity(),
	new DynamicNavbarActivity(),
	new NavbarOverlapActivity(),
	new StackedHeadingActivity(),
	new StackedHeadingWellActivity(),
	new SidebarOnlyActivity(),
	new DarkSidebarActivity(),
	new NavbarSidebarFixedActivity(),
	new NavbarSidebarSubActivity(),
	new SidebarCompactActivity(),
	new SidebarDrawerActivity()
);
