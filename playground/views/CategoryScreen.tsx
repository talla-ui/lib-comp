import {
	DetailNavButton,
	EmptyStateView,
	ListNavColumn,
	ScrollPane,
	SidebarSplitView,
} from "@talla-ui/lib-comp";
import {
	$list,
	$view,
	$viewport,
	Activity,
	StringConvertible,
	ui,
	View,
	UIComponent,
} from "talla-ui";
import icons from "~/icons/icons";

export default UIComponent.define(
	{
		title: StringConvertible.EMPTY,
		samples: undefined as Iterable<Activity> | undefined,
		current: undefined as View | undefined,
	},
	(values) => (
		<SidebarSplitView
			name="nav"
			showContent={$viewport.boolean("col3").or($view.boolean("current"))}
			showSidebar={$viewport.boolean("col3").or($view.not("current"))}
			styles={{
				separator: {
					vertical: true,
					lineThickness: 1,
					lineColor: ui.color.SEPARATOR,
				},
			}}
		>
			<ScrollPane
				navigateBack
				title={$view.string("title")}
				headerMode={$viewport.not("col3").select("dynamic", "fixed")}
			>
				<cell style={ui.style.CELL_BG} borderRadius={8} margin={{ x: -8 }}>
					<ListNavColumn>
						<list items={$view.list("samples")}>
							<DetailNavButton
								width="100%"
								label={$list.string("item.title")}
								detail={$list("item.title")}
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
				<render view={$view("current")} />
				<conditional state={$view.not("current")}>
					<EmptyStateView
						icon={icons.layout}
						title={"Select a view"}
						helpText={"Select a view from the list to see a sample here."}
					/>
				</conditional>
			</cell>
		</SidebarSplitView>
	)
);
