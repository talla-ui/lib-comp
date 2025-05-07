import {
	$view,
	ConfigOptions,
	StringConvertible,
	UIButton,
	UICell,
	UIRenderable,
	UIContainer,
	UIIconResource,
	UIStyle,
	UIComponent,
	ViewEvent,
	ui,
	UIColor,
} from "talla-ui";
import { bindFormField } from "./util.js";

const _boundValue = $view("value");

/**
 * Style configuration for a {@link ButtonSwitch} component
 *
 * Objects of this type are passed to {@link ButtonSwitch} as the `styles` preset property.
 */
export class ButtonSwitchStyles extends ConfigOptions {
	/** Default styles that are used when no other styles are specified */
	static default = new ButtonSwitchStyles();

	/** The size of all button icons, defaults to 24 */
	iconSize = 24;
	/** The margin after all button icons, defaults to 16 */
	iconMargin = 16;
	/** The color of all button icons, defaults to undefined */
	iconColor?: UIColor;
	/** The amount of space inserted between buttons, defaults to 0 */
	spacing: string | number = 0;
	/** The alignment of buttons within the switch container, defaults to `start` */
	align: UIContainer.Layout["distribution"] = "start";
	/** The margin around the switch container, defaults to 0 */
	margin: UIRenderable.Offsets = 0;

	/** The style applied to each button */
	switchButtonStyle: UIButton.StyleValue = ui.style.BUTTON_PLAIN.extend(
		{
			padding: { x: 24, y: 4 },
			borderRadius: 0,
			css: { transition: "background 0.2s, color 0.2s" },
		},
		{
			[UIStyle.STATE_HOVERED]: true,
			background: ui.color.TEXT.alpha(0.05),
		},
		{
			[UIStyle.STATE_PRESSED]: true,
			background: ui.color.PRIMARY_BG,
			textColor: ui.color.PRIMARY.text(),
		}
	);

	/** The style applied to the outer container */
	containerStyle: UICell.StyleValue = ui.style.CELL.extend({
		grow: 0,
		borderColor: ui.color.TEXT.alpha(0.25),
		borderThickness: 1,
		borderRadius: 32,
		background: ui.color.BACKGROUND,
	});
}

/**
 * An object that describes a button that's displayed within a {@link ButtonSwitch} component
 *
 * Objects of this type are passed to {@link ButtonSwitch} as the `buttons` preset property.

 * The {@link value} property is used to determine which button should be displayed in 'pressed' state, as well as to set the `value` property of the button switch itself when the button is pressed by the user.
 */
export type ButtonSwitchItem = {
	/** True if this button should be pressed if the switch value is undefined */
	default?: boolean;
	/** The associated button switch value */
	value?: unknown;
	/** The switch button label */
	label?: StringConvertible;
	/** The switch button icon */
	icon?: UIIconResource;
};

/**
 * Component that represents a button switch
 *
 * A button switch component contains multiple buttons in a row, within a cell that visually groups the buttons together. The button switch has a value, which is reflected by the 'pressed' state of one of the buttons.
 *
 * The current value of the button switch can be set programmatically using {@link value}, and by the user.
 *
 * Buttons are added using a preset list of {@link ButtonSwitchItem} objects, each containing a value, a label and/or icon.
 *
 * The button switch component emits a `Change` event after its value has changed. The new value is included in the `value` property of the event data.
 *
 * @see {@link ButtonSwitchItem}+
 * @see {@link ButtonSwitchStyles}+
 *
 * @example
 * {@sample :sample} (see docs in source repository)
 */
export class ButtonSwitch extends UIComponent.define({
	/** The list of buttons to show, as an array of {@link ButtonSwitchItem} objects */
	buttons: [] as ButtonSwitchItem[],
	/** The current value, one of the values from {@link buttons} */
	value: undefined as unknown,
	/** A form field ID, to add a two-way `FormContext` binding */
	formField: undefined as string | undefined,
	/** A set of styles that are applied to this component, an instance of {@link ButtonSwitchStyles} */
	styles: ButtonSwitchStyles.default,
	/** UI component identifier */
	name: "ButtonSwitch",
	/** UI component accessible label */
	accessibleLabel: undefined as string | undefined,
}) {
	protected defineView() {
		return ui.cell(
			{
				name: this.name,
				accessibleRole: "list",
				accessibleLabel: this.accessibleLabel,
				allowKeyboardFocus: true,
				position: { gravity: "center" },
				style: this.styles.containerStyle,
				margin: this.styles.margin,
			},
			ui.row(
				{
					align: this.styles.align,
					spacing: this.styles.spacing,
				},
				...this.buttons.map((b) =>
					ui.button({
						label: b.label,
						icon: b.icon,
						iconSize: this.styles.iconSize,
						iconMargin: this.styles.iconMargin,
						iconColor: this.styles.iconColor,
						style: this.styles.switchButtonStyle,
						disableKeyboardFocus: true,
						pressed: b.default
							? _boundValue.matches(b.value, undefined)
							: _boundValue.matches(b.value),
						value: b.value,
						accessibleRole: "listitem",
						onPress: "ItemSelected",
						onClick: "ItemSelected",
						onFocusIn: "FocusButtonSwitch",
					})
				)
			)
		);
	}

	protected beforeRender() {
		bindFormField(this);
	}

	protected onItemSelected(e: ViewEvent<UIButton>) {
		if (e.source.value !== undefined && this.value !== e.source.value) {
			let value = (this.value = e.source.value);
			this.emit("Change", { value });
		}
		return true;
	}

	protected onFocusButtonSwitch() {
		this.requestFocus();
		return true;
	}

	protected onArrowUpKeyPress() {
		return this._clickPrevious();
	}

	protected onArrowDownKeyPress() {
		return this._clickNext();
	}

	protected onArrowLeftKeyPress() {
		return this._clickPrevious();
	}

	protected onArrowRightKeyPress() {
		return this._clickNext();
	}

	protected onSpacebarPress(e: ViewEvent) {
		if (e.source === this.body) {
			return this._clickNext(true);
		}
	}

	private _clickPrevious() {
		let buttons = this.findViewContent(UIButton);
		for (let i = buttons.length - 1; i >= 0; i--) {
			if (buttons[i]?.pressed) {
				let prevButton = buttons[i - 1];
				if (!prevButton) break;
				prevButton.emit("Click");
				return true;
			}
		}
	}

	private _clickNext(wrap?: boolean) {
		let buttons = this.findViewContent(UIButton);
		for (let i = 0; i < buttons.length; i++) {
			if (buttons[i]?.pressed) {
				let nextButton = buttons[i + 1] || (wrap ? buttons[0] : undefined);
				if (!nextButton) return true;
				nextButton.emit("Click");
				return true;
			}
		}
		buttons[0]?.emit("Click");
	}
}
