import { FormEntry, SelectField } from "@talla-ui/lib-comp";
import { ui } from "talla-ui";

export default (
	<cell layout={{ clip: false }}>
		{/*
			-------------------------------------------------------------------
			Sample: Simple form entries
			-------------------------------------------------------------------
		*/}
		<column spacing={8}>
			<FormEntry label="Name" errorFormField="name">
				<textfield formField="name" grow />
			</FormEntry>
			<FormEntry label="Email" errorFormField="email">
				<textfield formField="email" grow />
			</FormEntry>
			<FormEntry label="Type" errorFormField="type">
				<SelectField
					label="Select..."
					width={180}
					formField="type"
					options={[
						{ label: "Friend", value: "friend" },
						{ label: "Enemy", value: "enemy" },
					]}
				/>
			</FormEntry>
			<spacer height={8} />
			<row>
				<button onClick="ValidateForm">Validate</button>
			</row>
		</column>
		<separator margin={32} />

		{/*
			-------------------------------------------------------------------
			Sample: Form entry with row content
			-------------------------------------------------------------------
		*/}
		<FormEntry
			label="URL"
			helpText="Including http or https, e.g. http://www.example.com"
		>
			<row>
				<textfield placeholder="Text" grow />
				<button>Check</button>
			</row>
		</FormEntry>
	</cell>
);
