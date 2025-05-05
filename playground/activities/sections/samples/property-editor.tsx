import { PropertyEditor } from "@talla-ui/lib-comp";
import { $activity, ui } from "talla-ui";

export default (
	<cell>
		{/*
			-------------------------------------------------------------------
			Sample: Default property editor
			> Note: properties are defined in the parent activity,
			  as a list of observed objects with PropertyEditorItem properties
			-------------------------------------------------------------------
		*/}
		<PropertyEditor
			items={$activity("properties")}
			onRendered="PropertiesChanged"
			onChange="PropertiesChanged"
			styles={{ toggleType: "switch" }}
		/>
		<spacer height={16} />

		{/*
			-------------------------------------------------------------------
			Sample: Read-only property editor (same properties)
			-------------------------------------------------------------------
		*/}
		<label bold padding={8}>
			Read-only:
		</label>
		<PropertyEditor items={$activity("properties")} readOnly />
		<spacer height={16} />

		{/* Text field with serialized (JSON) content */}
		<label bold padding={8}>
			Serialized:
		</label>
		<textfield
			readOnly
			multiline
			style={{ height: 200, fontFamily: "monospace" }}
			value={$activity("serializedProperties")}
		/>
	</cell>
);
