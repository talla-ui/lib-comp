import {
	DetailNavButton,
	NavContainerStyles,
	NavRow,
	ScrollRow,
	ValueNavButton,
} from "@talla-ui/lib-comp";
import { $activity, ui } from "talla-ui";
import { Placeholder } from "~/components/Placeholder";
import { gearIcon, textboxIcon } from "~/icons";

export default (
	<cell>
		{/*
			-------------------------------------------------------------------
			Sample: Tab bar (filled), using a scroll row for narrow viewports
			-------------------------------------------------------------------
		*/}
		<ScrollRow>
			<NavRow styles={NavContainerStyles.TAB_BAR} grow>
				<DetailNavButton detail="">Properties</DetailNavButton>
				<DetailNavButton detail="notes">Notes</DetailNavButton>
				<DetailNavButton detail="relations">Relations</DetailNavButton>
			</NavRow>
		</ScrollRow>
		<spacer height={16} />
		<Placeholder />
		<spacer height={32} />

		{/*
			-------------------------------------------------------------------
			Sample: Tab bar (underline style)
			-------------------------------------------------------------------
		*/}
		<NavRow styles={NavContainerStyles.UNDERLINE}>
			<DetailNavButton detail="">Properties</DetailNavButton>
			<DetailNavButton detail="notes">Notes</DetailNavButton>
			<DetailNavButton detail="relations">Relations</DetailNavButton>
		</NavRow>
		<separator margin={0} />
		<spacer height={16} />
		<Placeholder />
		<spacer height={32} />

		{/*
			-------------------------------------------------------------------
			Sample: Tab bar (underline style) with icons
			-------------------------------------------------------------------
		*/}
		<NavRow styles={{ ...NavContainerStyles.UNDERLINE, spacing: 16 }} grow>
			<DetailNavButton icon={textboxIcon} detail="">
				Properties
			</DetailNavButton>
			<DetailNavButton icon={ui.icon.PLUS} detail="notes">
				Notes
			</DetailNavButton>
			<DetailNavButton icon={ui.icon.SEARCH} detail="relations">
				Relations
			</DetailNavButton>
			<spacer />
			<DetailNavButton icon={gearIcon} detail="settings" />
		</NavRow>
		<separator margin={0} />
		<spacer height={16} />
		<Placeholder />
		<spacer height={32} />

		{/*
			-------------------------------------------------------------------
			Sample: Tab bar using a bound value
			-------------------------------------------------------------------
		*/}
		<NavRow
			styles={{ ...NavContainerStyles.UNDERLINE, spacing: 16 }}
			onClick="SetTabId"
		>
			<ValueNavButton match={$activity("tabId")} value="properties">
				Properties
			</ValueNavButton>
			<ValueNavButton match={$activity("tabId")} value="notes">
				Notes
			</ValueNavButton>
			<ValueNavButton match={$activity("tabId")} value="relations">
				Relations
			</ValueNavButton>
		</NavRow>
		<separator margin={0} />
		<spacer height={16} />
		<Placeholder height={100}>
			<label>Value selected: {$activity("tabId")}</label>
		</Placeholder>
	</cell>
);
