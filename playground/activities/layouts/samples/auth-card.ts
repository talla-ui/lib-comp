import { Activity, app, FormContext } from "talla-ui";
import { SourceCodeActivity } from "~/activities/source/source";
import authCardView from "./auth-card.view";

export class AuthCardActivity extends Activity {
	title = "Card auth layout";
	navigationPageId = "auth-card";

	formContext = new FormContext({
		email: { isString: { required: true, err: "Email is required" } },
		password: { isString: { required: true, err: "Password is required" } },
		remember: { isBoolean: {}, isOptional: true },
	});

	createView() {
		return authCardView.create();
	}

	onViewSource() {
		SourceCodeActivity.viewSource(import("./auth-card.view?raw"));
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
	app.hotReload(import.meta, AuthCardActivity);
}
