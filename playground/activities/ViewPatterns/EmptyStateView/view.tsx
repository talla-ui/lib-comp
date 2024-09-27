import { ui } from "talla-ui";
import SamplePane from "~/views/SamplePane";
import { ColumnCard, EmptyStateView } from "@talla-ui/lib-comp";
import icons from "~/icons/icons";

export default (
	<SamplePane>
		<column align="start" spacing={8}>
			<label>Simple empty state</label>
			<EmptyStateView title="Empty state" />
			<separator margin={16} />
		</column>

		<column align="start" spacing={8}>
			<label>Empty state with styles, help text and action</label>
			<EmptyStateView
				icon={icons.calendar}
				title="No appointments"
				helpText="You have no appointments. Create one to get started."
				styles={{ iconColor: ui.color.DANGER.alpha(0.5) }}
			>
				<button primary icon={ui.icon.PLUS}>
					Create
				</button>
			</EmptyStateView>
			<separator margin={16} />
		</column>

		<column align="start" spacing={8}>
			<label>Empty state card</label>
			<ColumnCard>
				<row padding={{ y: 8, x: 16 }}>
					<label bold style={{ fontSize: 16 }}>
						Appointments
					</label>
					<spacer />
					<button style={ui.style.BUTTON_ICON} icon={ui.icon.PLUS} />
				</row>
				<EmptyStateView
					icon={icons.calendar}
					title="No appointments"
					helpText="You have no appointments. Create one to get started."
				/>
			</ColumnCard>
			<separator margin={16} />
		</column>

		<spacer height={120} />
	</SamplePane>
);