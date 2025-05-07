import {
	$view,
	ConfigOptions,
	ObservedEvent,
	StringConvertible,
	UICell,
	UIRenderable,
	UIIconResource,
	UITextField,
	View,
	ViewBuilder,
	UIComponent,
	ViewEvent,
	app,
	ui,
	UIShowView,
	$either,
} from "talla-ui";
import { bindFormField } from "./util.js";

/**
 * Style configuration for a {@link ComboField} component
 *
 * Objects of this type are passed to {@link ComboField} as the `styles` preset property.
 */
export class ComboFieldStyles extends ConfigOptions {
	/** Default styles that are used when no other styles are specified */
	static default = new ComboFieldStyles();

	/** The amount of space between the edge of the text field and the overlay, defaults to [0, 4] */
	overlayOffset?: number | [number, number] = [0, 4];
	/** Position of the disclosure icon within the text field, defaults to overlay gravity with a small inset */
	iconPosition?: UIRenderable.Position = { gravity: "overlay", end: 4, top: 3 };
	/** The size of the disclosure icon, if any */
	iconSize?: number;

	/** The style applied to the outer container */
	containerStyle: UICell.StyleValue = ui.style.CELL.extend({
		grow: 0,
		shrink: 0,
		minWidth: 240,
	});

	/** The style applied to the text field */
	textFieldStyle: UITextField.StyleValue = ui.style.TEXTFIELD.extend({
		height: 38,
		padding: { start: 8, end: 32 },
	});

	/** The style applied to the overlay container */
	overlayContainerStyle: UICell.StyleValue = ui.style.CELL_BG.extend({
		background: ui.color.BACKGROUND,
		width: "100%",
		borderRadius: 4,
	});

	/** The effect applied to the overlay container when shown */
	overlayEffect = ui.effect.ELEVATE;
}

/**
 * Component for a combo field
 *
 * A combo field component consists of a text field, an optional disclosure button, and an overlay cell that appears when the user interacts with the combo field. The overlay is initially hidden, and disappears automatically when the text field is no longer focused.
 *
 * The overlay content is preset on the combo field, and instantiated when needed. Events emitted by the overlay content are handled by the combo field, and may be used to set the combo field value, or close the overlay.
 *
 * Typically, the overlay cell presents a list of options, which gets filtered as the user types in the text field. A list box component works well for this, emitting a suitable change event that sets the combo field value in turn.
 *
 * **Events**
 * - `Change` is emitted when the value has changed. The new value is included in the `value` property of the event data.
 * - `OpenOverlay` is emitted just before the overlay is revealed.
 * - The text field emits events such as `Input`, `EnterKeyPress` and `EscapeKeyPress`.
 *
 * The combo field also **handles** the following events from the overlay cell.
 *
 * - `CloseOverlay`, `EscapeKeyPress` and `TabKeyPress` to close the overlay.
 * - `Clear` to clear the current value and text field.
 * - `SetComboValue` to set the current value to the value of the `label`, `text`, or `value` property of the event data (in that order).
 *
 * @see {@link ComboFieldStyles}+
 */
export class ComboField extends UIComponent.define({
	/** The current value of the combo field */
	value: StringConvertible.EMPTY,
	/** A form field ID, to add a two-way `FormContext` binding */
	formField: undefined as string | undefined,
	/** The placeholder text for the text field */
	placeholder: StringConvertible.EMPTY,
	/** The icon to show in the combo field */
	icon: undefined as UIIconResource | undefined,
	/** The width of the combo field */
	width: undefined as number | undefined,
	/** True if the combo field should grow to fill the available space, defaults to false */
	grow: false,
	/** A set of styles that are applied to this component, an instance of {@link ComboFieldStyles} */
	styles: ComboFieldStyles.default,
	/** True if the overlay should open when the text field gains focus */
	openOnFocus: false,
	/** True if a clear button should be shown when the field has a value */
	showClearButton: false,
	/** UI component identifier */
	name: "ComboField",
	/** UI component accessible label */
	accessibleLabel: undefined as string | undefined,
}) {
	protected defineView(...content: ViewBuilder[]) {
		return ui.cell(
			{
				style: this.styles.containerStyle,
				width: this.width,
				grow: this.grow,
				layout: { clip: false },
				name: this.name,
				accessibleLabel: this.accessibleLabel,
			},
			ui.textField({
				value: $view("value"),
				placeholder: $view("placeholder"),
				width: "100%",
				style: this.styles.textFieldStyle,
				onFocusIn: "OpenOverlayFocus",
				onFocusOut: "CloseOverlay",
				onArrowDownKeyPress: "FocusOverlay",
				onInput: "+TextInput",
				accessibleRole: "combobox",
			}),
			ui.row(
				{
					align: "end",
					spacing: 0,
					position: this.styles.iconPosition,
				},
				ui.button({
					hidden: $either($view.not("value"), $view.not("showClearButton")),
					icon: ui.icon.CLOSE,
					iconSize: this.styles.iconSize,
					style: ui.style.BUTTON_ICON,
					onClick: "Clear",
					disableKeyboardFocus: true,
				}),
				ui.button({
					hidden: $view.not("icon"),
					icon: $view("icon"),
					iconSize: this.styles.iconSize,
					style: ui.style.BUTTON_ICON,
					onFocusIn: "OpenOverlayAsync",
					disableKeyboardFocus: true,
				})
			),
			ui.show(
				{ when: false }, // never gets rendered along with the above
				ui.cell(
					{
						layout: { clip: false },
						position: { gravity: "overlay", top: "100%" },
						style: this.styles.overlayContainerStyle,
						effect: this.styles.overlayEffect,
					},
					...content
				)
			)
		);
	}

	protected beforeRender() {
		bindFormField(this);
	}

	requestFocus() {
		this.findViewContent(UITextField)[0]?.requestFocus();
		return this;
	}

	protected onTextInput(e: ViewEvent<UITextField>) {
		this.value = e.source.value;
		this._openOverlay();
		return true;
	}

	protected onClear() {
		this._setValue("");
		this.requestFocus();
		return true;
	}

	protected onSetComboValue(e: ViewEvent) {
		this._setValue(String(e.data.label || e.data.text || e.data.value || ""));
		return true;
	}

	protected onOpenOverlayFocus() {
		if (this.openOnFocus) this._openOverlay();
		return true;
	}

	protected onOpenOverlayAsync() {
		this.requestFocus();
		setTimeout(() => this._openOverlay(), 50);
		return true;
	}

	protected onOpenOverlay() {
		this._openOverlay();
		return true;
	}

	protected onFocusOverlay() {
		if (!this._overlay) {
			// show overlay first before focusing
			this._openOverlay();
		} else {
			// if already shown, focus 2 levels deep (conditional > cell > content)
			this._overlay
				?.findViewContent(View as any)[0]
				?.findViewContent(View as any)[0]
				?.requestFocus();
		}
		return true;
	}

	protected onCloseOverlay() {
		this._closeOverlay();
		return true;
	}

	protected onEscapeKeyPress() {
		this._closeOverlay(0);
	}

	protected onEnterKeyPress() {
		if (this._overlay) {
			this._closeOverlay(0);
			return true;
		}
	}

	private _setValue(value: string) {
		this.value = value;
		this.emit("Change", { value });
	}

	private _openOverlay() {
		if (this._overlay) return;
		this.emit("OpenOverlay", { value: this.value });
		let clone = this.createView() as UICell;
		let overlayView = this.attach(clone.content.last() as UIShowView, (e) =>
			this._delegateOverlayEvent(e)
		);
		this._overlay = overlayView;
		overlayView.when = true;
		app.render(overlayView, {
			mode: "overlay",
			ref: (this.body as UICell).lastRenderOutput,
			refOffset: this.styles.overlayOffset,
			transform: {
				show: ui.animation.SHOW_MENU,
				hide: ui.animation.HIDE_MENU,
			},
		});
	}

	/** Helper function to delegate overlay events manually to be able to filter them */
	private _delegateOverlayEvent(e: ObservedEvent) {
		if (e.noPropagation) return;
		switch (e.name) {
			case "FocusIn":
				this._overlayHasFocus = true;
				break; // don't delegate
			case "FocusOut":
				this._overlayHasFocus = false;
				this._closeOverlay();
				break; // don't delegate
			case "EscapeKeyPress":
			case "TabKeyPress":
			case "CloseOverlay":
				setTimeout(() => this.requestFocus(), 10);
			default:
				this.delegate(e) ||
					this.emit(new ObservedEvent(e.name, e.source, e.data, this, e));
		}
	}

	private _closeOverlay(delay = 50) {
		this.emit("CloseOverlay", { value: this.value });
		setTimeout(() => {
			if (this._overlayHasFocus) return;
			this._overlay?.unlink();
			this._overlay = undefined;
		}, delay);
	}

	private _overlayHasFocus?: boolean;
	private _overlay?: View;
}
