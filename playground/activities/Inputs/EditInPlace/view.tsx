import { $activity, ui } from "talla-ui";
import SamplePane from "~/views/SamplePane";
import { EditInPlace } from "@talla-ui/lib-comp";
import icons from "~/icons/icons";

export default (
	<SamplePane>
		<column spacing={16}>
			<label>In-place text field</label>
			<row>
				<label bold style={{ shrink: 0 }} onPress="RequestFocusNext">
					Text:
				</label>
				<EditInPlace value="Hello, world!" />
			</row>
			<separator margin={16} />
		</column>

		<column spacing={16}>
			<label>Text field with icon/placeholder</label>
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
						icon={icons.sun}
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
						icon={icons.edit}
					/>
				</row>
			</column>
			<separator margin={16} />
		</column>

		<column spacing={16}>
			<label>Number, bound to form field</label>
			<cell
				padding={{ x: 16 }}
				style={ui.style.CELL_BG.override({ maxWidth: 300, borderRadius: 8 })}
				effect={ui.effect.SHADOW}
			>
				<row>
					<label width={120} onPress="RequestFocusNext">
						Quantity
					</label>
					<EditInPlace isNumber formField="quantity" />
				</row>
				<separator margin={0} />
				<row>
					<label width={120} onPress="RequestFocusNext">
						Overhead
					</label>
					<EditInPlace isNumber formField="overhead" />
				</row>
				<separator margin={0} />
				<row>
					<label bold width={120}>
						Total
					</label>
					<spacer />
					<EditInPlace
						isNumber
						readOnly
						value={$activity("total").asString("n")}
					/>
				</row>
			</cell>
			<separator margin={16} />
		</column>

		<spacer height={120} />
	</SamplePane>
);
