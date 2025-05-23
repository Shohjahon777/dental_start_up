import {FormSection} from "@/components/forms/form-fields/FormSection.tsx";
import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";
import {YesNoQuestion} from "@/components/forms/form-fields/RadioGroup.tsx";

export const PaperTwoForm = () => {
	return (
		<div className="space-y-6">
			<FormSection title="Clinical Examination">
				<div className="space-y-2">
					<Label htmlFor="oralHygiene">Oral Hygiene Status</Label>
					<Input id="oralHygiene" placeholder="Describe oral hygiene" />
				</div>
				<YesNoQuestion
					id="bleeding"
					question="Is there gingival bleeding on probing?"
				/>
				<YesNoQuestion
					id="mobility"
					question="Is there tooth mobility?"
				/>
			</FormSection>

			<FormSection title="Diagnosis">
				<div className="space-y-2">
					<Label htmlFor="diagnosis">Primary Diagnosis</Label>
					<Input id="diagnosis" placeholder="Enter primary diagnosis" />
				</div>
				<div className="space-y-2">
					<Label htmlFor="differentialDiagnosis">Differential Diagnosis</Label>
					<Input id="differentialDiagnosis" placeholder="Enter differential diagnosis" />
				</div>
			</FormSection>

			<FormSection title="Treatment Plan">
				<div className="space-y-2">
					<Label htmlFor="treatment">Proposed Treatment</Label>
					<Input id="treatment" placeholder="Describe proposed treatment" />
				</div>
				<div className="space-y-2">
					<Label htmlFor="followUp">Follow-up Plan</Label>
					<Input id="followUp" placeholder="Describe follow-up plan" />
				</div>
				<YesNoQuestion
					id="referral"
					question="Is specialist referral needed?"
				/>
			</FormSection>
		</div>
	);
};