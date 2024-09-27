import { Activity, app, ManagedEvent, FormContext } from "talla-ui";

/**
 * Base activity for a modal input dialog
 *
 * The modal input dialog base activity class can be extended to create an activity that shows a form dialog, with confirm and cancel buttons.
 *
 * The base class handles `Confirm`, `Cancel`, and escape key press events, by calling either the {@link confirm()} or {@link cancel()} methods — which can be overridden if needed. By default, {@link cancel()} immediately unlinks the activity; {@link confirm()} calls the {@link validate()} method, and if that returns true, unlinks the activity as well. Both methods emit different events before unlinking (see below). On the base class, the {@link validate()} method uses `FormContext` validation to determine if all inputs are valid before returning true.
 *
 * On an extended modal input dialog class:
 * - Add a constructor to set form values and add validation rules to `formContext`
 * - Add a `createView` method that returns the content of the dialog
 * - In the view, include buttons that emit `Confirm` and `Cancel` events
 * - If needed, override the {@link validate()} method to add more validation logic
 *
 * From elsewhere in your application, the resulting dialog activity should be created and attached to a parent activity, and displayed using the {@link showDialogAsync()} method. This method returns the (then unlinked) activity instance if the user performed the Confirm action, or undefined otherwise. It also accepts a callback to perform any actions before the dialog is unlinked.
 */
export class ModalInputDialog extends Activity {
	/** Creates a new modal input dialog, should be overridden to initialize the form context */
	constructor() {
		super();
		this.renderOptions = { dialog: true };
	}

	/** An empty form context without validation rules, should be initialized by the constructor */
	formContext = new FormContext();

	/** Delegates Confirm, Cancel, and EscapeKeyPress events from the view */
	override delegate(event: ManagedEvent) {
		switch (event.name) {
			case "EscapeKeyPress":
			case "Cancel":
				return this.cancel();
			case "Confirm":
				return this.confirm();
		}
		return super.delegate(event);
	}

	/**
	 * Displays the dialog view and waits for user input
	 * @param callback A callback that will be invoked with a true or false parameter when the user confirms or cancels, before the activity is unlinked
	 * @returns A promise that resolves to the activity itself if confirmed; undefined otherwise
	 */
	async showDialogAsync(callback?: (confirmed: boolean) => void) {
		app.addActivity(this, true);
		for await (let e of this.listen(true)) {
			if (e.name === "ModalInputConfirmed") callback?.(true);
			if (e.name === "ModalInputCanceled") callback?.(false);
		}
		return this._confirmed ? this : undefined;
	}

	/** Validates the current inputs */
	protected validate() {
		if (this.formContext) {
			this.formContext.validate();
			return this.formContext.valid;
		}
		return true;
	}

	/** Unlinks the activity if the current inputs are valid */
	protected confirm() {
		if (this._confirmed || !this.validate()) return;
		this._confirmed = true;
		this.emit("ModalInputConfirmed");
		this.unlink();
	}

	/** Unlinks the activity */
	protected cancel() {
		if (this._confirmed) return;
		this.emit("ModalInputCanceled");
		this.unlink();
	}

	private _confirmed = false;
}
