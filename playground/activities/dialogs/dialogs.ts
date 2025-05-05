import { Activity, app, NavigationTarget, ViewEvent } from "talla-ui";
import { SourceCodeActivity } from "../source/source";
import dialogsView from "./dialogs.view";
import { showBuiltinAlert } from "./samples/builtin-alert";
import { showBuiltinConfirm } from "./samples/builtin-confirm";
import { showDropdownChoice } from "./samples/dropdown-choice";
import { showFormInputDialog } from "./samples/form-input";
import { showIndeterminateProgress } from "./samples/indeterminate-progress";
import { showListChoice } from "./samples/list-choice";
import { showPercentageProgress } from "./samples/percentage-progress";
import { showPermanentToast } from "./samples/permanent-toast";
import { showSimpleToast } from "./samples/simple-toast";
import { showTextInputDialog } from "./samples/text-input";
import { showToggleInputDialog } from "./samples/toggle-input";
import { showWarningToast } from "./samples/warning-toast";

export class DialogsActivity extends Activity {
	title = "Dialogs — Playground";
	navigationPageId = "dialogs";

	createView() {
		return dialogsView.create();
	}

	onViewSource(e: ViewEvent) {
		let source: any;
		switch (e.data.id) {
			case "builtin-alert":
				source = import("./samples/builtin-alert.tsx?raw");
				break;
			case "builtin-confirm":
				source = import("./samples/builtin-confirm.tsx?raw");
				break;
			case "text-input":
				source = import("./samples/text-input.tsx?raw");
				break;
			case "toggle-input":
				source = import("./samples/toggle-input.tsx?raw");
				break;
			case "form-input":
				source = import("./samples/form-input.tsx?raw");
				break;
			case "dropdown-choice":
				source = import("./samples/dropdown-choice.tsx?raw");
				break;
			case "list-choice":
				source = import("./samples/list-choice.tsx?raw");
				break;
			case "indeterminate-progress":
				source = import("./samples/indeterminate-progress.tsx?raw");
				break;
			case "percentage-progress":
				source = import("./samples/percentage-progress.tsx?raw");
				break;
			case "simple-toast":
				source = import("./samples/simple-toast.tsx?raw");
				break;
			case "warning-toast":
				source = import("./samples/warning-toast.tsx?raw");
				break;
			case "permanent-toast":
				source = import("./samples/permanent-toast.tsx?raw");
				break;
		}
		if (!source) return;
		SourceCodeActivity.viewSource(source);
	}

	onShowDialog(e: ViewEvent) {
		switch (e.data.id) {
			case "builtin-alert":
				showBuiltinAlert();
				break;
			case "builtin-confirm":
				showBuiltinConfirm();
				break;
			case "text-input":
				showTextInputDialog();
				break;
			case "toggle-input":
				showToggleInputDialog();
				break;
			case "form-input":
				showFormInputDialog();
				break;
			case "dropdown-choice":
				showDropdownChoice();
				break;
			case "list-choice":
				showListChoice();
				break;
			case "indeterminate-progress":
				showIndeterminateProgress();
				break;
			case "percentage-progress":
				showPercentageProgress();
				break;
			case "simple-toast":
				showSimpleToast();
				break;
			case "warning-toast":
				showWarningToast();
				break;
			case "permanent-toast":
				showPermanentToast();
				break;
		}
	}

	protected async navigateAsync(target: NavigationTarget) {
		app.navigate(target, {
			// replace page only on narrow viewport
			replace: app.renderer?.viewport.col2 ? undefined : "page",
		});
	}
}

// hot reload for vite
if (import.meta.hot) {
	import.meta.hot.accept();
	app.hotReload(import.meta, DialogsActivity);
}
