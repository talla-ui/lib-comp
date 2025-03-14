import { ui } from "talla-ui";
import SamplePane from "~/components/SamplePane";
import { HeaderPaneToolbar, ScrollPane } from "@talla-ui/lib-comp";
import icons from "~/icons/icons";

const outerCellStyle = ui.style.CELL.extend({
	height: 180,
	borderColor: ui.color.SEPARATOR,
	borderThickness: 1,
});

export default (
	<SamplePane>
		<column spacing={16}>
			<label>Scroll pane with fixed header (default)</label>
			<cell style={outerCellStyle}>
				<ScrollPane title="Title">
					<list items={Array.from({ length: 40 }, (_, i) => i + 1)}>
						<row>
							<label>Line %[item]</label>
						</row>
					</list>
				</ScrollPane>
			</cell>
			<separator margin={16} />
		</column>

		<column spacing={16}>
			<label>Dynamic header, back button, toolbar</label>
			<cell style={outerCellStyle}>
				<ScrollPane title="Title" headerMode="dynamic" navigateBack>
					<HeaderPaneToolbar>
						<button
							icon={icons.calendar}
							iconSize={20}
							style={ui.style.BUTTON_ICON}
						/>
						<button
							icon={ui.icon.MORE}
							iconSize={20}
							style={ui.style.BUTTON_ICON}
						/>
					</HeaderPaneToolbar>
					<list items={Array.from({ length: 40 }, (_, i) => i + 1)}>
						<row>
							<label>Line %[item]</label>
						</row>
					</list>
				</ScrollPane>
			</cell>
			<separator margin={16} />
		</column>

		<column spacing={16}>
			<label>Dynamic header, max width</label>
			<cell style={outerCellStyle}>
				<ScrollPane
					title="Title"
					headerMode="dynamic"
					navigateBack
					styles={{ maxInnerWidth: 600, maxHeaderWidth: 600 }}
				>
					<HeaderPaneToolbar>
						<button
							icon={icons.calendar}
							iconSize={20}
							style={ui.style.BUTTON_ICON}
						/>
						<button
							icon={ui.icon.MORE}
							iconSize={20}
							style={ui.style.BUTTON_ICON}
						/>
					</HeaderPaneToolbar>
					<list items={Array.from({ length: 40 }, (_, i) => i + 1)}>
						<row>
							<label>Line %[item]</label>
						</row>
					</list>
				</ScrollPane>
			</cell>
			<separator margin={16} />
		</column>

		<column spacing={16}>
			<label>Fixed header with menu button</label>
			<cell style={outerCellStyle}>
				<ScrollPane
					title="Title"
					showMenu
					styles={{
						headerBackdropBackground: ui.color.PRIMARY_BG,
						headerBackdropEffect: undefined,
					}}
				>
					<HeaderPaneToolbar>
						<button
							icon={ui.icon.MORE}
							iconSize={20}
							style={ui.style.BUTTON_ICON}
						/>
					</HeaderPaneToolbar>
					<label>Content goes here</label>
				</ScrollPane>
			</cell>
			<separator margin={16} />
		</column>

		<spacer height={120} />
	</SamplePane>
);
