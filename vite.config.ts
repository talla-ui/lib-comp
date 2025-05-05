import { defineConfig } from "vite";
import { version } from "./package.json";
import { version as frameworkVersion } from "./node_modules/talla-ui/package.json";
import path from "path";

export default defineConfig({
	publicDir: "playground/public",
	define: {
		__FRAMEWORK_VERSION__: JSON.stringify(frameworkVersion),
		__LIB_VERSION__: JSON.stringify(version),
	},
	resolve: {
		alias: {
			"~": path.resolve("playground"),
		},
	},
});
