import { FormEntry } from "@talla-ui/lib-comp";
import { ui } from "talla-ui";
import ViewSourceButton from "~/components/ViewSourceButton";
import { scribbleLoopIcon } from "~/icons";

export default (
	<cell>
		{/* Back button (sample page navigation) */}
		<row>
			<button
				icon={ui.icon.CHEVRON_BACK}
				style={ui.style.BUTTON_TEXT.override({ padding: 8 })}
				onClick="NavigateBack"
			>
				Back
			</button>
			<spacer />
			<ViewSourceButton />
		</row>

		{/* Auth form (centered) */}
		<cell>
			<column
				width={300}
				spacing={8}
				padding={16}
				position={{ gravity: "center" }}
			>
				{/* An icon and label */}
				<image icon={scribbleLoopIcon} width="100%" height={48} />
				<label bold align="center" fontSize={16}>
					Sign in to your account
				</label>
				<spacer height={8} />

				{/* Form fields */}
				<FormEntry label="Email" errorFormField="email">
					<textfield
						type="email"
						formField="email"
						requestFocus
						onEnterKeyPress="Submit"
					/>
				</FormEntry>
				<FormEntry label="Password" errorFormField="password">
					<textfield
						type="password"
						formField="password"
						onEnterKeyPress="Submit"
					/>
				</FormEntry>
				<toggle formField="remember">Remember me</toggle>
				<spacer height={8} />

				{/* Buttons */}
				<button primary onClick="Submit">
					Sign in
				</button>
				<row align="center">
					<button style={ui.style.BUTTON_LINK}>Having trouble?</button>
				</row>
			</column>
		</cell>
	</cell>
);
