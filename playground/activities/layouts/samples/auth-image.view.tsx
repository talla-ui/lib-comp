import { FormEntry } from "@talla-ui/lib-comp";
import { $viewport, ui } from "talla-ui";
import ViewSourceButton from "~/components/ViewSourceButton";
import { scribbleLoopIcon } from "~/icons";

export default (
	<cell>
		{/* Auth form (split view, absolute position) */}
		<row position={{ gravity: "cover" }}>
			<cell style={{ width: "40%", minWidth: 340 }}>
				<column
					width={340}
					spacing={8}
					padding={36}
					position={{ gravity: "center" }}
				>
					{/* An icon and label */}
					<image icon={scribbleLoopIcon} width={48} />
					<label bold fontSize={16}>
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
					<button style={ui.style.BUTTON_LINK}>Having trouble?</button>
				</column>
			</cell>

			{/* Random image, shrinks to fit */}
			<show when={$viewport("col2")}>
				<animatedcell
					opacity={0}
					animationDuration={500}
					width="60%"
					background={ui.color.GRAY}
				>
					<image
						url="https://picsum.photos/1200/800"
						height="100%"
						onLoad="ImageLoaded"
					/>
				</animatedcell>
			</show>
		</row>

		{/* Back button (sample page navigation) */}
		<cell
			position={{ gravity: "overlay" }}
			style={$viewport("col2").select(
				{ width: "40%", minWidth: 340 },
				{ width: "100%" }
			)}
		>
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
		</cell>
	</cell>
);
