import { $activity, ui } from "talla-ui";
import SamplePane from "~/views/SamplePane";
import { PropertyEditor } from "@talla-ui/lib-comp";

export default (
	<SamplePane>
		<column align="start" spacing={16}>
			<label>Full width, 50/50</label>
			<PropertyEditor
				widths={["50%"]}
				items={$activity.list("properties")}
				onChange="PropertiesChanged"
				styles={{ toggleType: "switch" }}
			/>
			<button onClick="Serialize">View JSON</button>
			<cell hidden={$activity.not("serialized")}>
				<textfield
					readOnly
					multiline
					width="100%"
					value={$activity.string("serialized")}
					style={{ height: 200, fontFamily: "monospace" }}
				/>
			</cell>
			<separator margin={16} />
		</column>

		<column align="start" spacing={16}>
			<label>Limited width, readonly</label>
			<column width={320}>
				<PropertyEditor
					widths={[undefined, 200]}
					readOnly
					items={$activity.list("properties")}
				/>
			</column>
		</column>
		<spacer height={120} />
	</SamplePane>
);
