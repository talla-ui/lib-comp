import { ui } from "talla-ui";
import SamplePane from "~/components/SamplePane";
import { HeaderPaneToolbar, HeaderPane } from "@talla-ui/lib-comp";
import icons from "~/icons/icons";

const outerCellStyle = ui.style.CELL.extend({
	borderColor: ui.color.SEPARATOR,
	borderThickness: 1,
});

export default (
	<SamplePane>
		<column spacing={16}>
			<label>Default header pane</label>
			<cell style={outerCellStyle}>
				<HeaderPane title="Title">
					<label padding={32}>Content goes here</label>
				</HeaderPane>
			</cell>
			<separator margin={16} />
		</column>

		<column spacing={16}>
			<label>Without backdrop, with menu and toolbar</label>
			<cell style={outerCellStyle}>
				<HeaderPane title="Title" showMenu backdrop={false}>
					<HeaderPaneToolbar>
						<button style={ui.style.BUTTON_SMALL}>button</button>
						<button style={ui.style.BUTTON_ICON} icon={ui.icon.CHEVRON_NEXT} />
					</HeaderPaneToolbar>
					<label padding={32}>Content goes here</label>
				</HeaderPane>
			</cell>
			<separator margin={16} />
		</column>

		<column spacing={16}>
			<label>With styles</label>
			<cell style={outerCellStyle}>
				<HeaderPane
					title="HeaderPane"
					titleIcon={icons.sun}
					styles={{
						titleStyle: ui.style.LABEL.extend({
							fontFamily: "serif",
							fontSize: 26,
						}),
						headerHeight: 60,
						background: ui.color.YELLOW.alpha(0.1),
						headerBackdropBackground: ui.color.YELLOW,
						headerBackdropEffect: ui.effect.ELEVATE,
					}}
				>
					<cell padding={32}>
						<label padding={16}>Content goes here</label>
						<toggle state onChange="ToggleHeader">
							Show header
						</toggle>
						<toggle state onChange="ToggleBackdrop">
							Show backdrop
						</toggle>
					</cell>
				</HeaderPane>
			</cell>
			<separator margin={16} />
		</column>

		<spacer height={120} />
	</SamplePane>
);
