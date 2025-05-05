import { Activity, app, FormContext } from "talla-ui";
import { SourceCodeActivity } from "~/activities/source/source";
import authSimpleView from "./auth-simple.view";

export class AuthSimpleActivity extends Activity {
	title = "Simple auth layout";
	navigationPageId = "auth-simple";

	formContext = new FormContext({
		email: { isString: { required: true, err: "Email is required" } },
		password: { isString: { required: true, err: "Password is required" } },
		remember: { isBoolean: {}, isOptional: true },
	});

	createView() {
		return authSimpleView.create();
	}

	onViewSource() {
		SourceCodeActivity.viewSource(import("./auth-simple.view?raw"));
	}

	onSubmit() {
		let values = this.formContext.validate();
		if (!values) return;
		app.showAlertDialogAsync("Hello, " + values.email);
	}
}

// hot reload for vite
if (import.meta.hot) {
	import.meta.hot.accept();
	app.hotReload(import.meta, AuthSimpleActivity);
}
