import {
	ColumnCard,
	LabeledView,
	LabeledViewStyles,
	SelectField,
} from "@talla-ui/lib-comp";
import { $viewport, ui } from "talla-ui";
import { userIcon } from "~/icons";

// Styles used in the samples below:
const propertyLabeledViewStyles = LabeledViewStyles.init({
	horizontalWhen: $viewport("col2"),
	iconSize: 16,
	iconColor: ui.color.TEXT,
	containerStyle: ui.style.CELL.extend({
		padding: { y: 8 },
		borderThickness: { top: 1 },
		borderColor: ui.color.SEPARATOR,
	}),
});

const cardInputLabeledViewStyles = LabeledViewStyles.init({
	titleStyle: { padding: { y: 8 } },
	maxTitleWidth: 200,
});

export default (
	<cell>
		<spacer height={16} />

		{/*
			-------------------------------------------------------------------
			Sample: Single labeled paragraph
			-------------------------------------------------------------------
		*/}
		<LabeledView title="Single labeled paragraph">
			<label wrap>
				Labeled views consist of a label and other components, positioned
				horizontally (next to each other) in wider viewports. In narrow
				vieports, the label is displayed above the other components.
			</label>
		</LabeledView>
		<spacer height={32} />

		{/*
			-------------------------------------------------------------------
			Sample: Record data in a card
			-------------------------------------------------------------------
		*/}
		<ColumnCard width="100%">
			<column padding={16}>
				<label bold>Record data</label>
				<spacer height={16} />
				<LabeledView
					title="Name"
					icon={userIcon}
					styles={propertyLabeledViewStyles}
				>
					<label>John Doe</label>
				</LabeledView>
				<LabeledView title="Email" styles={propertyLabeledViewStyles}>
					<label>johndoe@example.com</label>
				</LabeledView>
				<LabeledView title="Phone" styles={propertyLabeledViewStyles}>
					<label>+1 234 567 890</label>
				</LabeledView>
				<LabeledView title="Status" styles={propertyLabeledViewStyles}>
					<label style={ui.style.LABEL_BADGE_DANGER}>Expired</label>
				</LabeledView>
			</column>
		</ColumnCard>
		<spacer height={16} />

		{/*
			-------------------------------------------------------------------
			Sample: Input fields in a card
			-------------------------------------------------------------------
		*/}
		<ColumnCard width="100%">
			<column padding={16} spacing={8}>
				<LabeledView
					title="Type"
					focusOnTitlePress
					styles={cardInputLabeledViewStyles}
				>
					<label icon={userIcon} iconSize={18}>
						Customer
					</label>
				</LabeledView>
				<LabeledView
					title="Name"
					focusOnTitlePress
					styles={cardInputLabeledViewStyles}
				>
					<textfield width="100%" value="John Doe" />
				</LabeledView>
				<LabeledView
					title="Status"
					focusOnTitlePress
					styles={cardInputLabeledViewStyles}
				>
					<SelectField width="100%" label="Confirmed" />
				</LabeledView>
				<LabeledView
					title="Subscribe"
					focusOnTitlePress
					styles={cardInputLabeledViewStyles}
				>
					<toggle />
				</LabeledView>
				<spacer height={8} />
				<LabeledView styles={cardInputLabeledViewStyles}>
					<row>
						<button primary>Submit</button>
						<button>Cancel</button>
					</row>
				</LabeledView>
			</column>
		</ColumnCard>
	</cell>
);
