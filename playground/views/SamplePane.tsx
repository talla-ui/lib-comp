import { $activity, $viewport, ViewComposite, ui } from "talla-ui";
import { HeaderPaneToolbar, ScrollPane } from "@talla-ui/lib-comp";
import icons from "~/icons/icons";

export default ViewComposite.define({}, (_, ...content) => (
	<animate
		showAnimation={$viewport.not("col3").select(ui.animation.FADE_IN_LEFT)}
	>
		<ScrollPane
			title={$activity.string("title")}
			headerMode={$viewport.not("col3").select("dynamic", "fixed")}
			navigateBack={$viewport.not("col3")}
		>
			<HeaderPaneToolbar>
				<button
					style={ui.style.BUTTON_ICON}
					icon={icons.code}
					onPress="ViewCode"
				/>
			</HeaderPaneToolbar>
			{...content}
		</ScrollPane>
	</animate>
));