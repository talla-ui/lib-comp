import { $activity, $list, $viewport, ui } from "talla-ui";
import {
	DetailNavButton,
	EmptyStateView,
	ListNavColumn,
	ScrollPane,
	SidebarSplitView,
} from "@talla-ui/lib-comp";
import icons from "~/icons/icons";

export default (
	<SidebarSplitView
		name="nav"
		showContent={$viewport.boolean("col3").or($activity.boolean("active"))}
		showSidebar={$viewport.boolean("col3").or($activity.not("active"))}
		contentEffect={ui.effect.ELEVATE}
	>
		<ScrollPane
			navigateBack
			title={$activity.string("title")}
			headerMode={$viewport.not("col3").select("dynamic", "fixed")}
		>
			<cell style={ui.style.CELL_BG} borderRadius={8} margin={{ x: -8 }}>
				<ListNavColumn>
					<list items={$activity.list("samples")}>
						<DetailNavButton
							width="100%"
							label={$list.string("item.title")}
							detail={$list.bind("item.title")}
							chevron="next"
						/>
						<column
							layout={{
								separator: {
									lineThickness: 1,
									lineColor: ui.color.SEPARATOR,
								},
							}}
						/>
					</list>
				</ListNavColumn>
			</cell>
		</ScrollPane>
		<cell background={ui.color.BACKGROUND} style={{ shrink: 1 }}>
			<render view={$activity.bind("active.view")} />
			<conditional state={$activity.not("active")}>
				<EmptyStateView
					icon={icons.art}
					title={"Select a view"}
					helpText={"Select a view from the list to see a sample here."}
				/>
			</conditional>
		</cell>
	</SidebarSplitView>
);
