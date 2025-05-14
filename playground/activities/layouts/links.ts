import navBarOnlySvg from "./images/navbar-only.svg";
import darkNavbarSvg from "./images/dark-navbar.svg";
import dynamicNavbarSvg from "./images/dynamic-navbar.svg";
import navbarOverlapSvg from "./images/navbar-overlap.svg";
import stackedHeadingSvg from "./images/stacked-heading.svg";
import stackedHeadingWellSvg from "./images/stacked-heading-well.svg";
import sidebarOnlySvg from "./images/sidebar-only.svg";
import darkSidebarSvg from "./images/dark-sidebar.svg";
import navbarSidebarFixedSvg from "./images/navbar-sidebar-fixed.svg";
import navbarSidebarSubSvg from "./images/navbar-sidebar-sub.svg";
import sidebarCompactSvg from "./images/sidebar-compact.svg";
import sidebarDrawerSvg from "./images/sidebar-drawer.svg";
import authSimpleSvg from "./images/auth-simple.svg";
import authCardSvg from "./images/auth-card.svg";
import authImageSvg from "./images/auth-image.svg";
import pageFormSvg from "./images/page-form.svg";

export default {
	layouts: [
		{
			navigateTo: "navbar-only",
			image: navBarOnlySvg,
			title: "Navbar only",
		},
		{
			navigateTo: "dark-navbar",
			image: darkNavbarSvg,
			title: "Dark navbar",
		},
		{
			navigateTo: "dynamic-navbar",
			image: dynamicNavbarSvg,
			title: "Dynamic navbar",
		},
		{
			navigateTo: "navbar-overlap",
			image: navbarOverlapSvg,
			title: "Navbar with overlap",
		},
		{
			navigateTo: "stacked-heading",
			image: stackedHeadingSvg,
			title: "Stacked heading",
		},
		{
			navigateTo: "stacked-heading-well",
			image: stackedHeadingWellSvg,
			title: "Stacked heading with well",
		},
		{
			navigateTo: "sidebar-only",
			image: sidebarOnlySvg,
			title: "Sidebar only",
		},
		{
			navigateTo: "dark-sidebar",
			image: darkSidebarSvg,
			title: "Dark sidebar",
		},
		{
			navigateTo: "navbar-sidebar-fixed",
			image: navbarSidebarFixedSvg,
			title: "Navbar with fixed sidebar",
		},
		{
			navigateTo: "navbar-sidebar-sub",
			image: navbarSidebarSubSvg,
			title: "Navbar with sidebar below",
		},
		{
			navigateTo: "sidebar-compact",
			image: sidebarCompactSvg,
			title: "Sidebar (compact)",
		},
		{
			navigateTo: "sidebar-drawer",
			image: sidebarDrawerSvg,
			title: "Sidebar with drawer",
		},
	],
	pages: [
		{
			navigateTo: "auth-simple",
			image: authSimpleSvg,
			title: "Simple login",
		},
		{
			navigateTo: "auth-card",
			image: authCardSvg,
			title: "Login (with card)",
		},
		{
			navigateTo: "auth-image",
			image: authImageSvg,
			title: "Login (with image)",
		},
		{
			navigateTo: "page-form",
			image: pageFormSvg,
			title: "Form page",
		},
	],
};
