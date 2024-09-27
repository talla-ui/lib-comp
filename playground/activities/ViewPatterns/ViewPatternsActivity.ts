import { ui } from "talla-ui";
import { CategoryActivity } from "../Category/CategoryActivity";
import { EmptyStateViewSample } from "./EmptyStateView/EmptyStateViewSample";
import { ProgressDialogSample } from "./ProgressDialog/ProgressDialogSample";
import { ModalInputDialogSample } from "./ModalInputDialog/ModalInputDialogSample";
import { ToastNotificationSample } from "./ToastNotification/ToastNotificationSample";

export class ViewPatternsActivity extends CategoryActivity {
	static readonly instance = new ViewPatternsActivity();

	constructor() {
		super([
			EmptyStateViewSample,
			ProgressDialogSample,
			ModalInputDialogSample,
			ToastNotificationSample,
		]);
		this.title = "View patterns";
		this.navigationPageId = "patterns";
	}

	color = ui.color("#c50").alpha(0.8);
}
