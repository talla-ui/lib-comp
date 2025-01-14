import { ui, UIIconResource } from "talla-ui";

const icons: Icons = {} as any;
export default icons;
function addIcon(name: string, svg: string) {
	(icons as any)[name] = ui.icon(name, svg);
}

import loading from "./svg/loading.svg?raw";
addIcon("loading", loading);
interface Icons {
	loading: UIIconResource;
}

import link from "./svg/link.svg?raw";
addIcon("link", link);
interface Icons {
	link: UIIconResource;
}

import sun from "./svg/sun.svg?raw";
addIcon("sun", sun);
interface Icons {
	sun: UIIconResource;
}

import moon from "./svg/moon.svg?raw";
addIcon("moon", moon);
interface Icons {
	moon: UIIconResource;
}

import layout from "./svg/layout.svg?raw";
addIcon("layout", layout);
interface Icons {
	layout: UIIconResource;
}

import calendar from "./svg/calendar.svg?raw";
addIcon("calendar", calendar);
interface Icons {
	calendar: UIIconResource;
}

import clock from "./svg/clock.svg?raw";
addIcon("clock", clock);
interface Icons {
	clock: UIIconResource;
}

import restart from "./svg/restart.svg?raw";
addIcon("restart", restart);
interface Icons {
	restart: UIIconResource;
}

import code from "./svg/code.svg?raw";
addIcon("code", code);
interface Icons {
	code: UIIconResource;
}

import edit from "./svg/edit.svg?raw";
addIcon("edit", edit);
interface Icons {
	edit: UIIconResource;
}

import person from "./svg/person.svg?raw";
addIcon("person", person);
interface Icons {
	person: UIIconResource;
}
