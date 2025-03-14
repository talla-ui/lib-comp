import { $viewport, ui } from "talla-ui";
import SamplePane from "~/views/SamplePane";
import {
	LabeledView,
	LabeledViewStyles,
	SelectField,
} from "@talla-ui/lib-comp";
import icons from "~/icons/icons";

const propertyLabeledViewStyles = LabeledViewStyles.init({
	horizontalWhen: $viewport.boolean("col2"),
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
	<SamplePane>
		<column spacing={16}>
			<LabeledView title="Single labeled paragraph">
				<label wrap>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
					facilisis metus ac facilisis lacinia. In tincidunt tincidunt risus,
					vitae ultrices erat fermentum ut. Donec placerat est sit amet eros
					scelerisque, ac tincidunt ante pulvinar. Integer vitae ex eget ligula
					ultricies malesuada. Nullam interdum libero et velit congue pretium.
				</label>
			</LabeledView>

			<separator margin={16} />
		</column>

		<column spacing={16}>
			<label>Property list</label>

			<column padding={{ y: 8 }}>
				<LabeledView
					title="Name"
					icon={icons.person}
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
					<label
						style={{
							fontSize: 12,
							fontWeight: 500,
							textColor: ui.color.TEXT.alpha(0.8),
							background: ui.color.SUCCESS_BG.alpha(0.3),
							borderRadius: 4,
							padding: { x: 8, y: 2 },
						}}
					>
						Confirmed
					</label>
				</LabeledView>
			</column>

			<separator margin={16} />
		</column>

		<column spacing={16}>
			<label>List with other views</label>

			<cell
				style={ui.style.CELL_BG.extend({
					padding: { y: 24, x: 16 },
					borderRadius: 8,
					maxWidth: 600,
				})}
			>
				<row height={32}>
					<label bold fontSize={16}>
						Record data
					</label>
				</row>
				<column spacing={12} padding={{ y: 16 }}>
					<LabeledView
						title="Type"
						focusOnTitlePress
						styles={cardInputLabeledViewStyles}
					>
						<label icon={icons.person}>Customer</label>
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
					<LabeledView styles={cardInputLabeledViewStyles}>
						<row>
							<button primary>Submit</button>
							<button>Cancel</button>
						</row>
					</LabeledView>
				</column>
			</cell>

			<separator margin={16} />
		</column>

		<spacer height={120} />
	</SamplePane>
);
