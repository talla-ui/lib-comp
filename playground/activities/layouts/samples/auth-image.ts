import { Activity, app, FormContext, UICell, ViewEvent } from "talla-ui";
import { SourceCodeActivity } from "~/activities/source/source";
import authImageView from "./auth-image.view";

export class AuthImageActivity extends Activity {
	title = "Image auth layout";
	navigationPageId = "auth-image";

	formContext = new FormContext({
		email: { isString: { required: true, err: "Email is required" } },
		password: { isString: { required: true, err: "Password is required" } },
		remember: { isBoolean: {}, isOptional: true },
	});

	createView() {
		return authImageView.create();
	}

	onViewSource() {
		SourceCodeActivity.viewSource(import("./auth-image.view?raw"));
	}

	onSubmit() {
		let values = this.formContext.validate();
		if (!values) return;
		app.showAlertDialogAsync("Hello, " + values.email);
	}

	onImageLoaded(e: ViewEvent) {
		let cell = UICell.whence(e.source);
		if (cell) cell.opacity = 1;
	}
}

// hot reload for vite
if (import.meta.hot) {
	import.meta.hot.accept();
	app.hotReload(import.meta, AuthImageActivity);
}
