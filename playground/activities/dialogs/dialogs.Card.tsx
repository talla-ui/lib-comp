import { StringConvertible, UIComponent, UIIconResource, ui } from "talla-ui";
import ViewSourceButton from "~/components/ViewSourceButton";
import { browsersIcon } from "~/icons";

export default UIComponent.define(
	{
		title: StringConvertible.EMPTY,
		description: StringConvertible.EMPTY,
		icon: undefined as UIIconResource | undefined,
		dialogId: "" as string,
	},
	(p) => (
		<cell
			padding={{ y: 16, x: 8 }}
			style={{ width: "100%", maxWidth: 500, shrink: 1 }}
		>
			<column>
				<label bold icon={p.icon} fontSize={16}>
					{p.title}
				</label>
				<spacer height={8} />
				<label wrap>{p.description}</label>
				<spacer height={24} />
				<row>
					<button
						onClick="Show"
						icon={browsersIcon}
						iconColor={ui.color.BRAND}
						chevron="next"
					>
						Show
					</button>
					<ViewSourceButton id={p.dialogId} />
				</row>
			</column>
		</cell>
	),
	(view) => ({
		Show: () => {
			view.emit("ShowDialog", { id: view.dialogId });
		},
	})
);
