import { ui } from "talla-ui";
import { EmptyStateView } from "@talla-ui/lib-comp";
import { calendarIcon } from "~/icons";

export default (
	<cell>
		{/*
			-------------------------------------------------------------------
			Sample: Default empty state
			-------------------------------------------------------------------
		*/}
		<EmptyStateView title="No items" />
		<separator margin={32} />

		{/*
			-------------------------------------------------------------------
			Sample: Empty state with help text
			-------------------------------------------------------------------
		*/}
		<EmptyStateView title="No items" helpText="Add an item to get started" />
		<separator margin={32} />

		{/*
			-------------------------------------------------------------------
			Sample: Full empty state, with extra content (button)
			-------------------------------------------------------------------
		*/}
		<EmptyStateView
			icon={calendarIcon}
			title="No appointments"
			helpText="You have no appointments. Create one to get started."
			styles={{ iconColor: ui.color.DANGER.alpha(0.5) }}
		>
			<button primary icon={ui.icon.PLUS}>
				Create
			</button>
		</EmptyStateView>
	</cell>
);
