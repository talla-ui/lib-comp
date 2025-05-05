import {
	DetailNavButton,
	NavColumn,
	NavContainerStyles,
} from "@talla-ui/lib-comp";
import { ui } from "talla-ui";
import { Placeholder } from "~/components/Placeholder";
import { gearIcon, textboxIcon } from "~/icons";

export default (
	<row spacing={16}>
		{/* 
			-------------------------------------------------------------------
			Sample: Sidebar navigation
			> Note: refer to layouts for usage in split view instead of a cell
			-------------------------------------------------------------------
		*/}
		<cell width={200} grow={false} layout={{ clip: false }}>
			<NavColumn styles={NavContainerStyles.LIST_SIDEBAR} grow>
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
				<DetailNavButton icon={gearIcon} detail="settings">
					Settings
				</DetailNavButton>
			</NavColumn>
		</cell>
		<Placeholder height={400} />
	</row>
);
