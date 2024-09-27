import {
	$viewport,
	StringConvertible,
	ui,
	UIButton,
	UIStyle,
	ViewComposite,
	ViewEvent,
} from "talla-ui";
import { ColumnCard, ColumnCardStyles } from "@talla-ui/lib-comp";

const _cardTitleStyle = ui.style.LABEL.extend({
	fontSize: 18,
	bold: true,
});

const _cardTitleStyleNarrow = ui.style.LABEL.extend({
	fontSize: 16,
	bold: true,
});

const _cardDescriptionStyle = ui.style.LABEL_SMALL.extend({
	padding: 0,
	opacity: 0.75,
});

export default class extends ViewComposite.define({
	title: StringConvertible.EMPTY,
	numSamples: 0,
	color: ui.color.PRIMARY_BG,
	page: "",
}) {
	createView() {
		let view = (
			<ColumnCard
				width={$viewport.bind("col2").select(160, 140)}
				margin={8}
				styles={{
					effect: ui.effect.ELEVATE,
					containerStyle: ColumnCardStyles.default.containerStyle.extend(
						{
							background: this.color,
							textColor: this.color.text(),
							css: { cursor: "pointer", transition: "all 0.2s ease" },
						},
						{
							[UIStyle.STATE_HOVERED]: true,
							css: { scale: "105%" },
						}
					),
				}}
			>
				<column align="start" padding={{ x: 12, y: 4 }}>
					<label
						style={$viewport
							.bind("col2")
							.select(_cardTitleStyle, _cardTitleStyleNarrow)}
					>
						{this.title}
					</label>
					<label style={_cardDescriptionStyle}>{this.numSamples} samples</label>
					<spacer height={16} />
					<row align="end">
						<button
							icon={ui.icon.CHEVRON_NEXT}
							style={ui.style.BUTTON_ICON}
							navigateTo={this.page}
						/>
					</row>
				</column>
			</ColumnCard>
		);
		return view.create();
	}
	onClick(e: ViewEvent) {
		if (!(e.source instanceof UIButton)) {
			this.findViewContent(UIButton)[0]?.emit("Navigate");
		}
	}
}
