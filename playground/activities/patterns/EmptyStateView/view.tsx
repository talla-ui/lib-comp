import { $activity, ui } from "talla-ui";
import SamplePane from "~/components/SamplePane";
import { ColumnCard, EmptyStateView } from "@talla-ui/lib-comp";
import icons from "~/icons/icons";

export default (
	<SamplePane>
		<column spacing={16}>
			<label>Simple empty state</label>
			<EmptyStateView title="Empty state" />
			<separator margin={16} />
		</column>

		<column spacing={16}>
			<label>Toggled, animated empty state</label>
			<row>
				<button onClick="Toggle">Toggle</button>
			</row>
			<animate
				showAnimation={ui.animation.FADE_IN_UP}
				hideAnimation={ui.animation.FADE_OUT}
			>
				<EmptyStateView hidden={$activity.not("toggle")} title="Empty state" />
			</animate>
			<separator margin={16} />
		</column>

		<column spacing={16}>
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

		<column spacing={16}>
			<label>Empty state card</label>
			<ColumnCard>
				<row padding={{ y: 12, x: 20 }}>
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
