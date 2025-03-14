import { $activity, $form, ui } from "talla-ui";
import SamplePane from "~/components/SamplePane";
import { SelectField } from "@talla-ui/lib-comp";
import icons from "~/icons/icons";

export default (
	<SamplePane>
		<column spacing={16}>
			<label>Plain SelectField</label>
			<row>
				<SelectField
					label="Placeholder"
					options={[
						{ label: "One", value: "1" },
						{ label: "Two", value: "2" },
						{ label: "Three", value: "3" },
					]}
				/>
			</row>
			<separator margin={16} />
		</column>

		<column spacing={16}>
			<label>With icons</label>
			<row>
				<SelectField
					value="night"
					options={[
						{ label: "Day", value: "day", icon: icons.sun },
						{ label: "Night", value: "night", icon: icons.moon },
					]}
				/>
			</row>
			<separator margin={16} />
		</column>

		<column spacing={16}>
			<label>With custom styles</label>
			<row>
				<SelectField
					value="night"
					options={[
						{ label: "Day", value: "day", icon: icons.sun },
						{ label: "Night", value: "night", icon: icons.moon },
					]}
					width={160}
					styles={{
						buttonStyle: ui.style.BUTTON_PRIMARY.extend({
							textAlign: "start",
							borderRadius: 32,
						}),
					}}
				/>
			</row>
			<separator margin={16} />
		</column>

		<row wrap spacing={0}>
			<column spacing={16} padding={{ end: 16 }} grow>
				<label>Just-in-time options</label>
				<row>
					<SelectField label="Select..." onBeforeSelect="OpenJITSelect" grow />
				</row>
				<separator margin={16} />
			</column>
			<column spacing={16} padding={{ end: 16 }} grow>
				<label>Bound options</label>
				<row>
					<SelectField
						label="Select..."
						options={$activity("selectBoundOptions")}
						onChange="ChangeBoundSelect"
						grow
					/>
				</row>
				<separator margin={16} />
			</column>
			<column spacing={16} padding={{ end: 16 }} grow>
				<label>Many options</label>
				<row>
					<SelectField
						value="NL"
						options={$activity("countryOptionsList")}
						grow
					/>
				</row>
				<separator margin={16} />
			</column>
		</row>

		<column spacing={16}>
			<label>Bound to form field</label>
			<row>
				<SelectField
					formField="select1"
					options={[
						{ label: "Yes", value: true },
						{ label: "No", value: false },
					]}
				/>
			</row>
			<row>
				<toggle formField="select1" type="switch" />
				<label>Value: {$form.string("values.select1")}</label>
			</row>
			<separator margin={16} />
		</column>

		<column spacing={16}>
			<label>Read-only</label>
			<row>
				<SelectField
					formField="select1"
					readOnly
					options={[
						{ label: "Yes", value: true },
						{ label: "No", value: false },
					]}
				/>
			</row>
			<separator margin={16} />
		</column>

		<spacer height={120} />
	</SamplePane>
);
