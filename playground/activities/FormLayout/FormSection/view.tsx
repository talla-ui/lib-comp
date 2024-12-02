import { ui } from "talla-ui";
import SamplePane from "~/views/SamplePane";
import {
	ColumnCardStyles,
	FormEntry,
	FormSection,
	FormSectionDescription,
	SelectField,
} from "@talla-ui/lib-comp";
import icons from "~/icons/icons";

const _dangerCardStyles = ColumnCardStyles.init({
	effect: undefined,
	separator: { lineColor: ui.color.DANGER, lineThickness: 1 },
	containerStyle: ui.style(ColumnCardStyles.default.containerStyle, {
		borderColor: ui.color.DANGER,
	}),
});

export default (
	<SamplePane>
		<FormSection>
			<FormSectionDescription title="Personal information">
				<label wrap htmlFormat>
					We use this information to personalize your experience. We'll never
					share your email with anyone else.
					{"<br><br>"}
					{"<a href='#'>"}Privacy policy{"</a>"}
				</label>
			</FormSectionDescription>
			<column padding={16}>
				<FormEntry label="Full name">
					<textfield width="100%" />
				</FormEntry>
				<FormEntry label="Email address">
					<textfield type="email" width="100%" />
				</FormEntry>
				<FormEntry label="Address (optional)">
					<textfield width="100%" placeholder="Street address" />
					<spacer height={2} />
					<textfield width="100%" />
				</FormEntry>
				<FormEntry>
					<row>
						<textfield width="100%" placeholder="City" />
						<textfield placeholder="Postal code" />
					</row>
				</FormEntry>
			</column>
			<column padding={16}>
				<FormEntry label="Company name (optional)">
					<textfield width="100%" />
				</FormEntry>
				<FormEntry label="Company size">
					<SelectField
						width={180}
						label="Select"
						options={[
							{ label: "1-10", value: 1 },
							{ label: "11-50", value: 2 },
							{ label: "51-200", value: 3 },
							{ label: "201-500", value: 4 },
							{ label: "More than 500", value: 5 },
						]}
					/>
				</FormEntry>
			</column>
			<row align="end" padding={16}>
				<button onClick="UpdateProfile" primary>
					Update
				</button>
			</row>
		</FormSection>
		<separator margin={16} />

		<FormSection title="Security" styles={_dangerCardStyles}>
			<label bold>Password</label>
			<column align="start" spacing={16} padding={16}>
				<label wrap>
					You're using a password to log in to your account. You can update your
					password here.
				</label>
				<button style={ui.style.BUTTON_SMALL} chevronSize={24} chevron="next">
					Update your password
				</button>
			</column>
		</FormSection>

		<separator margin={16} />
		<FormSection title="Notifications">
			<FormSectionDescription>
				You can receive notifications by email or just see them in the app.
			</FormSectionDescription>
			<row padding={16}>
				<toggle width="100%" type="switch">
					Receive email notifications
				</toggle>
			</row>
		</FormSection>

		<separator margin={16} />
		<FormSection>
			<FormSectionDescription title="Language">
				Choose the language you want to use in the app.
			</FormSectionDescription>
			<column padding={16} align="start" spacing={8}>
				<SelectField
					width={180}
					label="Select"
					value="en"
					options={[
						{ label: "English", value: "en" },
						{ label: "Deutsch", value: "de" },
						{ label: "Español", value: "es" },
						{ label: "Français", value: "fr" },
						{ label: "Italiano", value: "it" },
						{ label: "Nederlands", value: "nl" },
						{ label: "Português", value: "pt" },
						{ label: "Русский", value: "ru" },
						{ label: "中文", value: "zh" },
					]}
				/>
				<label>
					Your language settings will apply after restarting the app.
				</label>
				<spacer />
				<button
					icon={icons.restart}
					style={ui.style.BUTTON_SMALL}
					onClick="RestartApp"
				>
					Restart now
				</button>
			</column>
		</FormSection>

		<separator margin={16} />
		<row padding={{ y: 16 }}>
			<label icon={ui.icon.CHEVRON_DOWN} htmlFormat>
				Using {"<code>rowTitleAfter</code>"} property
			</label>
		</row>
		<FormSection rowTitleAfter>
			<FormSectionDescription>
				<label bold>Integrations</label>
				<label wrap padding={{ y: 8 }}>
					Enable and configure the integrations using this list. You may need to
					log in to the third party software and have a role that has
					administrative privileges.
				</label>
				<separator margin={16} />
				<label wrap>
					You can add custom integrations using standard API configurations.
				</label>
				<spacer height={16} />
				<button icon={ui.icon.PLUS} onClick="CreateIntegration">
					Add custom
				</button>
			</FormSectionDescription>
			<cell style={{ height: 500, grow: 0 }}></cell>
		</FormSection>

		<spacer height={120} />
	</SamplePane>
);
