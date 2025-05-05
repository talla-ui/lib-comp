import { EditInPlace } from "@talla-ui/lib-comp";
import { ui } from "talla-ui";
import { sunIcon, textboxIcon } from "~/icons";

export default (
	<column>
		{/* Sample 1: Plain edit-in-place field */}
		<row>
			<EditInPlace value="Edit this text..." />
		</row>
		<spacer height={8} />

		{/* Sample 2: Edit-in-place field with labels and icons */}
		<cell style={ui.style.CELL_BG} padding={16} layout={{ gravity: "center" }}>
			<column>
				<row>
					<label bold width={100} onPress="RequestFocusNext">
						Quantity:
					</label>
					<EditInPlace width={200} isNumber placeholder="Enter quantity" />
				</row>
				<row>
					<label bold width={100} onPress="RequestFocusNext">
						Days:
					</label>
					<EditInPlace
						width={200}
						isNumber
						icon={sunIcon}
						placeholder="Enter quantity"
					/>
				</row>
				<row>
					<label bold width={100} onPress="RequestFocusNext">
						Note:
					</label>
					<EditInPlace
						width={200}
						placeholder="Enter some text"
						icon={textboxIcon}
					/>
				</row>
			</column>
		</cell>
	</column>
);
