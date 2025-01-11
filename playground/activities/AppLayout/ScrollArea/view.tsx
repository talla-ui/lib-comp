import { ui } from "talla-ui";
import SamplePane from "~/views/SamplePane";
import { ColumnCard, ScrollArea } from "@talla-ui/lib-comp";

export default (
	<SamplePane>
		<column align="start" spacing={16}>
			<label>Fixed size scroll area</label>
			<ScrollArea height={200} width={300}>
				<column align="start">
					<label fontSize={16} bold>
						Content area
					</label>
					<label wrap>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
						facilisis metus ac facilisis lacinia. In tincidunt tincidunt risus,
						vitae ultrices erat fermentum ut. Donec placerat est sit amet eros
						scelerisque, ac tincidunt ante pulvinar. Integer vitae ex eget
						ligula ultricies malesuada. Nullam interdum libero et velit congue
						pretium. Mauris venenatis, mauris non convallis mollis, nulla lectus
						finibus sapien, ut elementum ex justo eu erat. Morbi porttitor, eros
						at interdum tincidunt, lacus tortor efficitur odio, nec vestibulum
						ipsum sapien quis magna.
					</label>
					<label wrap>
						Suspendisse vitae ornare lacus. Vivamus ultricies, lorem id interdum
						blandit, justo nunc tempor ligula, sed euismod mi sapien non ligula.
						Curabitur tempus sapien nec lorem pulvinar, sed porttitor nisi
						dictum. Aenean egestas neque a mi pretium, id egestas tellus luctus.
						Etiam at metus felis. Pellentesque laoreet pellentesque turpis at
						eleifend. Fusce ac vehicula arcu, ut dignissim nulla. Cras at lectus
						dolor. Phasellus ut lacus ut purus interdum fermentum.
					</label>
				</column>
			</ScrollArea>
			<separator margin={16} />
		</column>

		<column align="start" spacing={16}>
			<label>With styles (outer cell)</label>
			<ScrollArea height={200} cellStyle={ui.style.CELL_BG}>
				<list items={Array.from({ length: 40 }, (_, i) => i + 1)}>
					<ColumnCard margin={8} width={120}>
						<label>Item %[item]</label>
					</ColumnCard>
					<row layout={{ wrapContent: true }} padding={8} spacing={0} />
				</list>
			</ScrollArea>
			<separator margin={16} />
		</column>

		<spacer height={120} />
	</SamplePane>
);
