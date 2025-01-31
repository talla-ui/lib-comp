import { $activity, ui } from "talla-ui";
import SamplePane from "~/views/SamplePane";
import { ButtonSwitch, SidebarSplitView } from "@talla-ui/lib-comp";

const outerCellStyle = ui.style.CELL.extend({
	height: 140,
	borderColor: ui.color.SEPARATOR,
	borderThickness: 1,
});

export default (
	<SamplePane>
		<column spacing={16}>
			<label>Default split view, with separator</label>
			<cell style={outerCellStyle}>
				<SidebarSplitView
					styles={{ separator: { vertical: true, lineThickness: 1 } }}
				>
					<cell>
						<label align="center">Sidebar</label>
					</cell>
					<cell>
						<label align="center">Content</label>
					</cell>
				</SidebarSplitView>
			</cell>
			<separator margin={16} />
		</column>

		<column spacing={16}>
			<label>With sidebar shadow</label>
			<cell style={outerCellStyle}>
				<SidebarSplitView styles={{ sidebarEffect: ui.effect.SHADOW }}>
					<cell>
						<label align="center">Sidebar</label>
					</cell>
					<cell background={ui.color.BACKGROUND.contrast(-0.05)}>
						<label align="center">Content</label>
					</cell>
				</SidebarSplitView>
			</cell>
			<separator margin={16} />
		</column>

		<column spacing={16}>
			<label>With content shadow, min/max width</label>
			<cell style={outerCellStyle}>
				<SidebarSplitView
					styles={{
						contentEffect: ui.effect.SHADOW,
						sidebarWidth: 200,
						sidebarMinWidth: 100,
						sidebarMaxWidth: 300,
						separator: { vertical: true, lineThickness: 1 },
					}}
				>
					<cell>
						<label align="center">Sidebar</label>
					</cell>
					<cell>
						<label align="center">Content</label>
					</cell>
				</SidebarSplitView>
			</cell>
			<cell style={outerCellStyle}>
				<SidebarSplitView
					reverse
					styles={{
						contentEffect: ui.effect.SHADOW,
						sidebarWidth: 200,
						sidebarMinWidth: 100,
						sidebarMaxWidth: 300,
						separator: { vertical: true, lineThickness: 1 },
					}}
				>
					<cell>
						<label align="center">Sidebar</label>
					</cell>
					<cell>
						<label align="center">Content</label>
					</cell>
				</SidebarSplitView>
			</cell>
			<separator margin={16} />
		</column>

		<column spacing={16}>
			<label>List/detail view (named)</label>
			<ButtonSwitch
				value={$activity("switchValue")}
				buttons={[
					{ label: "List", value: 1 },
					{ label: "Detail", value: 2 },
					{ label: "Both", value: 3 },
				]}
				onChange="SetDetail"
			/>
			<cell style={outerCellStyle}>
				<SidebarSplitView
					name="ListDetailSample"
					showContent={$activity("showContent")}
					showSidebar={$activity("showSidebar")}
					styles={{ separator: { vertical: true, lineThickness: 1 } }}
				>
					<row align="center" wrap>
						<label padding={16}>List</label>
						<button chevron="next" onClick="ShowDetail">
							Show detail
						</button>
					</row>
					<column align="center">
						<label padding={16}>Detail</label>
						<button
							style={ui.style.BUTTON_ICON}
							icon={ui.icon.CLOSE}
							onClick="CloseDetail"
						/>
					</column>
				</SidebarSplitView>
			</cell>
			<separator margin={16} />
		</column>

		<spacer height={120} />
	</SamplePane>
);
