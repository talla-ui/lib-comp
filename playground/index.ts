import { Binding, strf, ui } from "talla-ui";
import { useWebContext } from "@talla-ui/web-handler";
import { HomeActivity } from "./activities/Home/HomeActivity";
import { InputFieldsActivity } from "./activities/InputFields/InputFieldsActivity";
import { ViewPatternsActivity } from "./activities/ViewPatterns/ViewPatternsActivity";
import highlightCSS from "highlight.js/styles/github-dark.min.css?url";
import { FormLayoutActivity } from "./activities/FormLayout/FormLayoutActivity";
import { AppLayoutActivity } from "./activities/AppLayout/AppLayoutActivity.";
import { showWebTools } from "@talla-ui/lib-web-tools";

const app = useWebContext((options) => {
	options.importCSS = [highlightCSS];
	options.theme.colors.set("Background", ui.color("#111"));
	options.focusDecoration = { css: { outline: "2px solid #6af" } };
	options.insertHistory = "root";
});

app.i18n = {
	format(value, type) {
		switch (type) {
			case "date":
				let date = value instanceof Date ? value : new Date(value);
				return strf(
					"%02i-%02i-%04i",
					date.getDate(),
					date.getMonth() + 1,
					date.getFullYear()
				).toString();
		}
		return "???";
	},
	getAttributes() {
		return { locale: "test" };
	},
	getPlural(n, forms) {
		return forms[n == 1 ? 0 : 1] || "";
	},
	getText(text) {
		return text;
	},
};

Binding.debugHandler = (a) => {
	app.log.debug("BIND", a);
};

showWebTools(undefined, true);

app.addActivity(new HomeActivity());
app.addActivity(new InputFieldsActivity());
app.addActivity(new FormLayoutActivity());
app.addActivity(new AppLayoutActivity());
app.addActivity(new ViewPatternsActivity());
