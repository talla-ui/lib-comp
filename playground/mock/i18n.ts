import { I18nProvider, strf } from "talla-ui";

export const mock_i18n: I18nProvider = {
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
