import { $activity, $viewport, ui } from "talla-ui";
import { HeaderPaneToolbar, ScrollPane } from "../../../lib";

const textStyle = ui.style.LABEL.extend({
	fontFamily: "monospace",
	textColor: ui.color.WHITE,
	lineBreakMode: "pre",
	maxWidth: "none",
	fontSize: 12,
});

const textStyle_small = textStyle.override({
	fontSize: 10,
});

export default (
	<cell
		style={$viewport
			.boolean("col3")
			.select({ width: 800, maxWidth: "100%", shrink: 1 }, { shrink: 1 })}
		position={$viewport.boolean("col3").select({ gravity: "end" }, {})}
		effect={ui.effect.ELEVATE}
	>
		<ScrollPane
			title={$activity.string("title")}
			styles={{
				background: ui.color("#222"),
				headerBackdropBackground: ui.color.BLACK,
			}}
		>
			<HeaderPaneToolbar>
				<button
					style={ui.style.BUTTON_ICON}
					icon={ui.icon.CLOSE}
					onClick="CloseModal"
				/>
			</HeaderPaneToolbar>
			<label
				htmlFormat
				selectable
				text={$activity.string("code")}
				style={$viewport.boolean("col2").select(textStyle, textStyle_small)}
				position={{ gravity: "start" }}
			/>
		</ScrollPane>
	</cell>
);
