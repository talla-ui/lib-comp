import { ui } from "talla-ui";
import SamplePane from "~/views/SamplePane";
import { FormEntry, SelectField } from "@talla-ui/lib-comp";

export default (
	<SamplePane>
		<column align="start" spacing={8}>
			<label>Form entry with text field</label>
			<FormEntry label="Text field">
				<textfield placeholder="Text" width="100%" />
			</FormEntry>
			<separator margin={16} />
		</column>

		<column align="start" spacing={8}>
			<label>With help text</label>
			<FormEntry label="Text field" helpText="* Required">
				<textfield placeholder="Text" width="100%" />
			</FormEntry>
			<FormEntry
				label="URL"
				helpText="Including http or https, e.g. http://www.example.com"
			>
				<textfield placeholder="Text" width="100%" />
			</FormEntry>
			<separator margin={16} />
		</column>

		<column align="start" spacing={8} accessibleRole="form">
			<label>With form context and error message binding</label>
			<FormEntry label="Full name" errorFormField="fullName">
				<textfield formField="fullName" width="100%" />
			</FormEntry>
			<FormEntry label="Age" errorFormField="age">
				<textfield formField="age" width={80} type="numeric" />
			</FormEntry>
			<button primary onClick="FormSubmit">
				Submit
			</button>
			<separator margin={16} />
		</column>

		<column align="start" spacing={8}>
			<label>With select field</label>
			<FormEntry label="Category">
				<SelectField
					label="Select..."
					options={[
						{ label: "Fiction", value: "fiction" },
						{ label: "Non-fiction", value: "nonfiction" },
					]}
				/>
			</FormEntry>
			<button primary onClick="SelectCategory">
				Select
			</button>
			<separator margin={16} />
		</column>

		<spacer height={120} />
	</SamplePane>
);
