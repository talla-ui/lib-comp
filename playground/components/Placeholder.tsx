import { ui, UIComponent } from "talla-ui";

export const Placeholder = UIComponent.define(
	{
		width: undefined as number | string | undefined,
		height: 200 as number | string | undefined,
		borderColor: ui.color.SEPARATOR,
	},
	(p, ...content) => (
		<cell
			style={{
				width: p.width,
				height: p.height,
				borderRadius: 16,
				borderColor: p.borderColor,
				borderThickness: 2,
				borderStyle: "dashed",
			}}
			layout={{ gravity: "center" }}
		>
			{content}
		</cell>
	)
);
