import { ButtonSwitch } from "@talla-ui/lib-comp";
import { describe, expect, test, useTestContext } from "@talla-ui/test-handler";
import { ViewComposite } from "talla-ui";
import { InputFieldsActivity } from "../InputFieldsActivity";

describe("ButtonSwitchSample", (ctx) => {
	let activity: InputFieldsActivity;
	ctx.beforeEach(() => {
		let app = useTestContext({ renderFrequency: 5 });
		activity = new InputFieldsActivity();
		app.addActivity(activity, true);
		app.navigate("input/ButtonSwitch");
	});

	test("ButtonSwitch exists", () => {
		expect(new ButtonSwitch()).toBeInstanceOf(ViewComposite);
	});

	test("Buttons are displayed", async (t) => {
		await t.expectOutputAsync({ text: "One", pressed: true });
		await t.expectOutputAsync({ text: "Four" });
	});

	test("Clicking a button marks it as pressed", async (t) => {
		await t.clickOutputAsync({ text: "Two" });
		await t.expectOutputAsync({ text: "Two", pressed: true });
		await t.expectOutputAsync({ text: "One", pressed: false });
	});
});
