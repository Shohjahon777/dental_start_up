import {FormSection} from "@/components/forms/form-fields/FormSection.tsx";
import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";
import {YesNoQuestion} from "@/components/forms/form-fields/RadioGroup.tsx";

export const PaperOneForm = () => {
	return (
		<div className="space-y-6">
			<FormSection title="Patient Information">
				<div className="grid grid-cols-2 gap-4">
					<div className="space-y-2">
						<Label htmlFor="fullName">Patient Full Name</Label>
						<Input id="fullName" placeholder="Enter patient name" />
					</div>
					<div className="space-y-2">
						<Label htmlFor="age">Age</Label>
						<Input id="age" placeholder="Enter age" type="number" />
					</div>
				</div>
				<div className="space-y-2">
					<Label htmlFor="mainComplaint">Main Complaint</Label>
					<Input id="mainComplaint" placeholder="Describe the main complaint" />
				</div>
			</FormSection>

			<FormSection title="Medical History">
				<YesNoQuestion
					id="heartCondition"
					question="Does the patient have any heart condition?"
				/>
				<YesNoQuestion
					id="diabetes"
					question="Does the patient have diabetes?"
				/>
				<YesNoQuestion
					id="allergies"
					question="Does the patient have any allergies?"
				/>
				<div className="space-y-2">
					<Label htmlFor="medications">Current Medications</Label>
					<Input id="medications" placeholder="List all current medications" />
				</div>
			</FormSection>

			<FormSection title="Dental History">
				<div className="space-y-2">
					<Label htmlFor="lastVisit">Last Dental Visit</Label>
					<Input id="lastVisit" placeholder="When was the last dental visit?" />
				</div>
				<YesNoQuestion
					id="recentTreatment"
					question="Has the patient had dental treatment in the last 6 months?"
				/>
				<div className="space-y-2">
					<Label htmlFor="brushingFrequency">Brushing Frequency</Label>
					<Input id="brushingFrequency" placeholder="How often does the patient brush?" />
				</div>
			</FormSection>
		</div>
	);
};