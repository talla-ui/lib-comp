import { ui, UIComponent, UIRenderable } from "talla-ui";
import ViewSourceButton from "./ViewSourceButton";

export const TitledWell = UIComponent.define(
	{
		title: "",
		sourceId: "",
		padding: 16 as UIRenderable.Offsets,
		maxContentWidth: undefined as number | string | undefined,
	},
	(p, ...content) => (
		<column padding={{ bottom: 48 }} spacing={16}>
			<row height={48}>
				<label bold fontSize={20}>
					{p.title}
				</label>
				<spacer />
				<show when={!!p.sourceId}>
					<ViewSourceButton id={p.sourceId} />
				</show>
			</row>
			<cell
				padding={p.padding}
				background={ui.color.BACKGROUND.contrast(-0.05)}
				borderRadius={16}
				style={{ borderColor: ui.color.SEPARATOR, borderThickness: 1 }}
			>
				<cell
					style={{ width: "100%", maxWidth: p.maxContentWidth }}
					layout={{ clip: false }}
					margin="auto"
				>
					{...content}
				</cell>
			</cell>
		</column>
	)
);
