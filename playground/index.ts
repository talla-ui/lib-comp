import { setWebToolsToggleKey, showWebTools } from "@talla-ui/lib-web-tools";
import { useWebContext } from "@talla-ui/web-handler";
import highlightCSS from "highlight.js/styles/nord.min.css?url";
import { UIColor } from "talla-ui";
import pages from "./activities/pages";
import { mock_i18n } from "./mock/i18n";

const app = useWebContext((options) => {
	options.importCSS = [highlightCSS];
	options.focusDecoration = { css: { outline: "2px solid #6af" } };
	options.controlTextStyle = {
		fontFamily: "Inter, sans-serif",
		fontSize: 14,
	};
	options.darkTheme = options.theme.clone();
	options.darkTheme.colors.set("Background", new UIColor("#111"));
	options.insertHistory = "root";
});

app.i18n = mock_i18n;
app.activities.add(...pages);

showWebTools(undefined, true);
setWebToolsToggleKey("C", { ctrl: true, shift: true }, true);
