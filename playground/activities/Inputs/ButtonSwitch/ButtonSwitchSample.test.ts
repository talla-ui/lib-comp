import { ButtonSwitch } from "@talla-ui/lib-comp";
import {
	clickOutputAsync,
	expectOutputAsync,
	useTestContext,
} from "@talla-ui/test-handler";
import { beforeEach, expect, test } from "vitest";
import { UIComponent } from "talla-ui";
import { InputFieldsActivity } from "../InputFieldsActivity";

let activity: InputFieldsActivity;
beforeEach(() => {
	let app = useTestContext({ renderFrequency: 5 });
	activity = new InputFieldsActivity();
	app.addActivity(activity, true);
	app.navigate("input/ButtonSwitch");
});

test("ButtonSwitch exists", () => {
	expect(new ButtonSwitch()).toBeInstanceOf(UIComponent);
});

test("Buttons are displayed", async (t) => {
	await expectOutputAsync({ text: "One", pressed: true });
	await expectOutputAsync({ text: "Four" });
});

test("Clicking a button marks it as pressed", async (t) => {
	await clickOutputAsync({ text: "Two" });
	await expectOutputAsync({ text: "Two", pressed: true });
	await expectOutputAsync({ text: "One", pressed: false });
});
