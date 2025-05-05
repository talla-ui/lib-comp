import { ui } from "talla-ui";
import { ColumnCard, FormEntry } from "@talla-ui/lib-comp";
import { scribbleLoopIcon } from "~/icons";
import ViewSourceButton from "~/components/ViewSourceButton";

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

		{/* Auth page */}
		<cell>
			<column width={300} position={{ gravity: "center" }}>
				{/* An icon and label, animated */}
				<show showAnimation={ui.animation.FADE_IN_UP}>
					<column>
						<image icon={scribbleLoopIcon} width="100%" height={48} />
						<label bold align="center" fontSize={16}>
							Sign in to your account
						</label>
					</column>
				</show>
				<spacer height={32} />

				{/* The form, inside of a card */}
				<ColumnCard>
					<column padding={16} spacing={8}>
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

						<button primary onClick="Submit">
							Sign in
						</button>
						<row align="center">
							<button style={ui.style.BUTTON_LINK}>Having trouble?</button>
						</row>
					</column>
				</ColumnCard>
			</column>
		</cell>
	</cell>
);
