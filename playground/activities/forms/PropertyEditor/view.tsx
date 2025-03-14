import { $activity, ui } from "talla-ui";
import SamplePane from "~/components/SamplePane";
import { PropertyEditor } from "@talla-ui/lib-comp";

export default (
	<SamplePane>
		<column spacing={16}>
			<label>Full width, 50/50</label>
			<PropertyEditor
				items={$activity.list("properties")}
				onChange="PropertiesChanged"
				styles={{ toggleType: "switch" }}
			/>
			<row>
				<button onClick="Serialize">View JSON</button>
			</row>
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

		<column spacing={16}>
			<label>Limited width, readonly</label>
			<column width={320}>
				<PropertyEditor
					readOnly
					items={$activity.list("properties")}
					styles={{ propertyLabelMaxWidth: 120 }}
				/>
			</column>
		</column>
		<spacer height={120} />
	</SamplePane>
);
