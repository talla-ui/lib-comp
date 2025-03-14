import { showWebTools } from "@talla-ui/lib-web-tools";
import { useWebContext } from "@talla-ui/web-handler";
import highlightCSS from "highlight.js/styles/github-dark.min.css?url";
import { strf } from "talla-ui";
import { FormsActivity } from "./activities/forms/FormsActivity";
import { HomeActivity } from "./activities/home/HomeActivity";
import { InputsActivity } from "./activities/inputs/InputsActivity";
import { LayoutsActivity } from "./activities/layouts/LayoutsActivity";
import { PatternsActivity } from "./activities/patterns/PatternsActivity";

const app = useWebContext((options) => {
	options.importCSS = [highlightCSS];
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

showWebTools(undefined, true);

app.addActivity(new HomeActivity());
app.addActivity(new InputsActivity());
app.addActivity(new FormsActivity());
app.addActivity(new LayoutsActivity());
app.addActivity(new PatternsActivity());
