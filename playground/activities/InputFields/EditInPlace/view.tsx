import { $activity, ui } from "talla-ui";
import SamplePane from "~/views/SamplePane";
import { EditInPlace } from "@talla-ui/lib-comp";

export default (
	<SamplePane>
		<column align="start" spacing={8}>
			<label>In-place textfield</label>
			<row>
				<label bold style={{ shrink: 0 }} onPress="RequestFocusNext">
					Text:
				</label>
				<EditInPlace value="Hello, world!" />
			</row>
			<separator margin={16} />
		</column>

		<column align="start" spacing={8}>
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
						value={$activity.bind("total").asString("n")}
					/>
				</row>
			</cell>
			<separator margin={16} />
		</column>

		<spacer height={120} />
	</SamplePane>
);
