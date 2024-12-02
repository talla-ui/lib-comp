import { $activity, $list, $viewport, ui } from "talla-ui";
import { HeaderPaneToolbar, ScrollPane, ScrollRow } from "@talla-ui/lib-comp";
import icons from "~/icons/icons";
import HomeCard from "./views/HomeCard";

export default (
	<animate
		showAnimation={ui.animation.FADE_IN_RIGHT}
		ignoreFirstShow={$activity.boolean("firstActivation")}
	>
		<ScrollPane
			title="Playground"
			headerMode="dynamic"
			styles={{
				pageTitleStyle: { fontSize: 32, fontWeight: 800 },
				scrollThreshold: 32,
				headerHeight: 64,
				maxInnerWidth: 800,
				clip: false,
				padding: 32,
				paddingNarrow: 12,
			}}
		>
			<HeaderPaneToolbar>
				<button
					style={ui.style.BUTTON_ICON}
					pressed={$activity.bind("mode").matches("light")}
					icon={icons.sun}
					onPress="LightMode"
				/>
				<button
					style={ui.style.BUTTON_ICON}
					pressed={$activity.bind("mode").matches("dark")}
					icon={icons.moon}
					onPress="DarkMode"
				/>
			</HeaderPaneToolbar>

			<spacer height={$viewport.boolean("row3").select(64, 24)} />

			<row height={64}>
				<label fontSize={16} bold>
					Links
				</label>
			</row>
			<ScrollRow>
				<button icon={icons.world} chevron="next" onPress="GoGitHub">
					GitHub
				</button>
				<button icon={icons.world} chevron="next" onPress="GoWebsite">
					Tälla framework
				</button>
			</ScrollRow>
			<separator margin={16} />

			<row height={64}>
				<label fontSize={16} bold>
					Categories
				</label>
			</row>
			<cell margin={{ x: -8 }} layout={{ clip: false }}>
				<list
					items={$activity.bind("categories")}
					renderOptions={{ delayEach: 50 }}
				>
					<animate showAnimation={ui.animation.FADE_IN_DOWN}>
						<HomeCard
							color={$list.bind("item.color")}
							title={$list.string("item.title")}
							numSamples={$list.number("item.samples.count")}
							page={$list.bind("item.navigationPageId")}
						/>
					</animate>
					<row layout={{ wrapContent: true }} spacing={0} />
				</list>
			</cell>
			<spacer height={64} />
		</ScrollPane>
	</animate>
);
