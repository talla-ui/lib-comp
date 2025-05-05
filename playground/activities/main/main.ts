import { Activity, app } from "talla-ui";
import mainView from "./main.view";

export class MainActivity extends Activity {
	title = "Playground";
	navigationPageId = "";

	protected async beforeActiveAsync() {
		if (app.renderer?.viewport.col2) {
			app.navigate("layouts");
		}
		if (!this._watching) {
			this._watching = true;
			this.watch(app.renderer!.viewport, () => {
				if (this.isActive() && app.renderer?.viewport.col2) {
					app.navigate("layouts");
				}
			});
		}
	}

	createView() {
		return mainView.create();
	}

	private _watching = false;
}
