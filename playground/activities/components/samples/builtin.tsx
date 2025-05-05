import { ui } from "talla-ui";

export default (
	<column spacing={8} padding={{ y: 16 }} align="center">
		{/*
			-------------------------------------------------------------------
			Labels
			-------------------------------------------------------------------
		*/}
		<row>
			<label>Label</label>
			<label bold>Bold</label>
			<label dim>Dim</label>
			<label style={ui.style.LABEL_SMALL}>Small</label>
			<label selectable>Selectable</label>
		</row>
		<row>
			<label style={ui.style.LABEL_BADGE}>Badge</label>
			<label style={ui.style.LABEL_BADGE_SUCCESS}>Success</label>
			<label style={ui.style.LABEL_BADGE_DANGER}>Danger</label>
		</row>
		<label icon={ui.icon.SEARCH} padding={{ y: 4 }}>
			Icon
		</label>
		<row>
			<label
				style={{
					fontSize: 16,
					bold: true,
					textColor: ui.color.WHITE,
					background: ui.color.PURPLE,
					padding: { x: 16, y: 4 },
					borderRadius: { topEnd: 16, bottomEnd: 16 },
				}}
				icon={ui.icon("star", "💫")}
				iconSize={20}
				iconMargin={16}
			>
				Styled
			</label>
		</row>
		<spacer height={16} />

		{/*
			-------------------------------------------------------------------
			Buttons
			-------------------------------------------------------------------
		*/}
		<row wrap>
			<button>Button</button>
			<button primary>Primary</button>
			<button style={ui.style.BUTTON_SUCCESS}>Success</button>
			<button style={ui.style.BUTTON_DANGER}>Danger</button>
		</row>
		<row wrap spacing={16}>
			<button style={ui.style.BUTTON_SMALL}>Small</button>
			<button style={ui.style.BUTTON_PLAIN}>Plain</button>
			<button style={ui.style.BUTTON_TEXT}>Text</button>
			<button style={ui.style.BUTTON_LINK}>Link</button>
		</row>
		<row wrap>
			<button chevron="next">Chevron</button>
			<button icon={ui.icon.SEARCH}>Icon</button>
			<button icon={ui.icon.SEARCH} style={ui.style.BUTTON_ICON} />
			<button icon={ui.icon.CLOSE} style={ui.style.BUTTON_ICON} />
		</row>
		<row wrap>
			<button icon={ui.icon.SEARCH} style={ui.style.BUTTON_ICONTOP}>
				Icon top
			</button>
			<button icon={ui.icon.SEARCH} style={ui.style.BUTTON_ICONTOP_START}>
				Icon top start
			</button>
			<button icon={ui.icon.SEARCH} style={ui.style.BUTTON_ICONTOP_END}>
				Icon top end
			</button>
		</row>
		<row>
			<button
				style={{
					background: ui.color.PURPLE,
					textColor: ui.color.WHITE,
					borderRadius: 24,
					borderColor: ui.color.ORANGE,
					borderThickness: 3,
				}}
			>
				Styled
			</button>
		</row>
		<spacer height={16} />

		{/*
			-------------------------------------------------------------------
			Toggles
			-------------------------------------------------------------------
		*/}
		<row spacing={16}>
			<toggle state />
			<toggle>Checkbox</toggle>
			<toggle state disabled>
				Disabled
			</toggle>
		</row>
		<row spacing={16}>
			<toggle type="switch" state />
			<toggle type="switch">Switch</toggle>
			<toggle type="switch" state disabled>
				Disabled
			</toggle>
		</row>
		<row>
			<toggle state labelStyle={{ textColor: ui.color.PURPLE, bold: true }}>
				Styled
			</toggle>
		</row>
		<spacer height={16} />

		{/*
			-------------------------------------------------------------------
			Text fields
			-------------------------------------------------------------------
		*/}
		<textfield value="Textfield" />
		<textfield placeholder="Placeholder" />
		<textfield readOnly value="Readonly" />
		<textfield disabled value="Disabled" />
		<textfield
			value="Styled"
			style={{
				background: ui.color.PURPLE,
				textColor: ui.color.WHITE,
				borderColor: ui.color.ORANGE,
				borderThickness: 3,
				borderRadius: 16,
			}}
		/>
	</column>
);
