import { ui } from "talla-ui";
import SamplePane from "~/components/SamplePane";
import { FormEntry, SelectField } from "@talla-ui/lib-comp";

export default (
	<SamplePane>
		<column spacing={16}>
			<label>Form entry with text field</label>
			<FormEntry label="Text field">
				<textfield placeholder="Text" grow={false} />
			</FormEntry>
			<separator margin={16} />
		</column>

		<column spacing={16}>
			<label>With help text, text field in row</label>
			<FormEntry label="Text field" helpText="* Required">
				<row>
					<textfield placeholder="Text" />
				</row>
			</FormEntry>
			<FormEntry
				label="URL"
				helpText="Including http or https, e.g. http://www.example.com"
			>
				<row>
					<textfield placeholder="Text" />
					<button>Check</button>
				</row>
			</FormEntry>
			<separator margin={16} />
		</column>

		<column spacing={16} accessibleRole="form">
			<label>With form context and error message binding</label>
			<column>
				<FormEntry label="Full name" errorFormField="fullName">
					<textfield formField="fullName" width="100%" />
				</FormEntry>
				<FormEntry label="Age" errorFormField="age">
					<textfield formField="age" width={80} type="numeric" />
				</FormEntry>
			</column>
			<row>
				<button primary onClick="FormSubmit">
					Submit
				</button>
			</row>
			<separator margin={16} />
		</column>

		<column spacing={16}>
			<label>With select field</label>
			<FormEntry label="Category">
				<SelectField
					label="Select..."
					width={180}
					options={[
						{ label: "Fiction", value: "fiction" },
						{ label: "Non-fiction", value: "nonfiction" },
					]}
				/>
			</FormEntry>
			<row>
				<button primary onClick="SelectCategory">
					Select
				</button>
			</row>
			<separator margin={16} />
		</column>

		<spacer height={120} />
	</SamplePane>
);
