import {
	DetailNavButton,
	NavColumn,
	NavContainerStyles,
} from "@talla-ui/lib-comp";
import { ui } from "talla-ui";
import { textboxIcon } from "~/icons";

export default (
	<row align="center">
		<cell width={300} grow={false} style={ui.style.CELL_BG}>
			{/* 
				---------------------------------------------------------------
				Sample: Navigation list
				---------------------------------------------------------------
			*/}
			<NavColumn styles={NavContainerStyles.LIST_COLUMN}>
				<DetailNavButton icon={textboxIcon} detail="" chevron="next">
					Properties
				</DetailNavButton>
				<DetailNavButton icon={ui.icon.PLUS} detail="notes" chevron="next">
					Notes
				</DetailNavButton>
				<DetailNavButton
					icon={ui.icon.SEARCH}
					detail="relations"
					chevron="next"
				>
					Relations
				</DetailNavButton>
			</NavColumn>
		</cell>
	</row>
);
