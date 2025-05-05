import {
	FormEntry,
	FormSection,
	FormSectionDescription,
	SelectField,
} from "@talla-ui/lib-comp";
import { ui } from "talla-ui";
import { Placeholder } from "~/components/Placeholder";
import { arrowCounterClockwiseIcon } from "~/icons";

export default (
	<cell>
		{/* 
			-------------------------------------------------------------------
			Sample: Form with description
			-------------------------------------------------------------------
		*/}
		<FormSection>
			<FormSectionDescription title="Personal information">
				<label wrap htmlFormat>
					We use this information to personalize your experience. We'll never
					share your email with anyone else.
				</label>
				<spacer height={8} />
				<label htmlFormat>
					{"<a href='#'>"}Privacy policy{"</a>"}
				</label>
			</FormSectionDescription>
			<column padding={16} spacing={8}>
				<FormEntry label="Full name">
					<textfield />
				</FormEntry>
				<FormEntry label="Email address">
					<textfield type="email" />
				</FormEntry>
				<FormEntry label="Address (optional)">
					<textfield placeholder="Street address" />
					<spacer height={8} />
					<textfield />
				</FormEntry>
				<FormEntry>
					<row>
						<textfield placeholder="City" />
						<textfield placeholder="Postal code" />
					</row>
				</FormEntry>
			</column>
			<column padding={16} spacing={8}>
				<FormEntry label="Company name (optional)">
					<textfield />
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

		{/* 
			-------------------------------------------------------------------
			Sample: Single toggle
			-------------------------------------------------------------------
		*/}
		<FormSection title="Notifications">
			<FormSectionDescription>
				You can receive notifications by email or just see them in the app.
			</FormSectionDescription>
			<column padding={16}>
				<toggle type="switch">Receive email notifications</toggle>
			</column>
		</FormSection>
		<separator margin={16} />

		{/* 
			-------------------------------------------------------------------
			Sample: Select field
			-------------------------------------------------------------------
		*/}
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
					icon={arrowCounterClockwiseIcon}
					iconSize={16}
					style={ui.style.BUTTON_SMALL}
					onClick="RestartApp"
				>
					Restart now
				</button>
			</column>
		</FormSection>
		<separator margin={16} />

		{/* 
			-------------------------------------------------------------------
			Sample: Switched order of sections in wide viewport
			-------------------------------------------------------------------
		*/}
		<row padding={{ y: 16 }}>
			<label icon={ui.icon.CHEVRON_DOWN} htmlFormat wrap>
				Using {"<code>rowTitleAfter</code>"} property (switches on wide
				viewport)
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
			<Placeholder height={500} />
		</FormSection>
	</cell>
);
