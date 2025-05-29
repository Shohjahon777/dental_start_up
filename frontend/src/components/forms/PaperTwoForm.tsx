import {FormSection} from "@/components/forms/form-fields/FormSection.tsx";
import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";
import {YesNoWithDetails} from "@/components/forms/form-fields/YesNoWithDetails.tsx";
import {YesNoQuestion} from "@/components/forms/form-fields/RadioGroup.tsx";

export const PaperTwoForm = () => {
	return (
		<div className="space-y-6">
			<FormSection title="General Health Information">
				<div className="space-y-2">
					<Label htmlFor="physicianName">Physician Name and Contact</Label>
					<Input id="physicianName" placeholder="Enter physician name and contact information" />
				</div>
				<div className="space-y-2">
					<Label htmlFor="currentMedications">Current Medications</Label>
					<Input id="currentMedications" placeholder="List all medications, dosage, and frequency" />
				</div>
			</FormSection>

			<FormSection title="Medical History">
				<YesNoWithDetails
					id="medicalProblems"
					detailsPlaceholder="Describe your medical problems"
					question="Do you have any significant medical problems?"
				/>
				<YesNoWithDetails
					id="physicianCare"
					detailsPlaceholder="Specify the condition(s)"
					question="Are you currently under the care of a physician?"
				/>
				<YesNoWithDetails
					id="hospitalization"
					detailsPlaceholder="Describe hospitalization or surgeries"
					question="Have you been hospitalized or had any major surgeries in the past?"
				/>
				<YesNoWithDetails
					id="allergies"
					detailsPlaceholder="List allergens and reaction types"
					question="Are you allergic to any medications, food, or other substances?"
				/>
				<YesNoWithDetails
					id="adverseReaction"
					detailsPlaceholder="Describe the adverse reaction"
					question="Have you ever had an adverse reaction to any medication?"
				/>
			</FormSection>

			<FormSection title="Lifestyle and Habits">
				<YesNoWithDetails
					id="tobacco"
					detailsPlaceholder="Specify type, amount, and duration"
					question="Do you use tobacco (smoking, chewing)?"
				/>
				<YesNoWithDetails
					id="alcohol"
					detailsPlaceholder="Specify frequency and amount"
					question="Do you drink alcoholic beverages?"
				/>
				<YesNoWithDetails
					id="recreationalDrugs"
					detailsPlaceholder="Please specify"
					question="Do you use recreational drugs?"
				/>
				<YesNoWithDetails
					id="recreation"
					detailsPlaceholder="Describe your activities"
					question="Do you participate in active recreational activities?"
				/>
			</FormSection>

			<FormSection title="Cardiovascular History">
				<YesNoQuestion
					id="bleedingDisorders"
					question="Have you ever had any bleeding disorders or problems with blood clotting?"
				/>
				<YesNoQuestion
					id="heartDisease"
					question="Have you ever had heart disease or heart attack?"
				/>
				<YesNoQuestion
					id="heartFailure"
					question="Have you ever had heart failure?"
				/>
				<YesNoQuestion
					id="angina"
					question="Have you ever had angina pectoris?"
				/>
				<YesNoQuestion
					id="highBloodPressure"
					question="Do you have high blood pressure?"
				/>
				<YesNoQuestion
					id="lowBloodPressure"
					question="Do you have low blood pressure?"
				/>
				<YesNoQuestion
					id="congenitalHeart"
					question="Do you have congenital heart disease?"
				/>
				<YesNoQuestion
					id="heartMurmur"
					question="Do you have a heart murmur?"
				/>
				<YesNoQuestion
					id="artificialValve"
					question="Do you have an artificial heart valve?"
				/>
				<YesNoQuestion
					id="mitralValve"
					question="Do you have mitral valve prolapse?"
				/>
				<YesNoQuestion
					id="pacemaker"
					question="Do you have a heart pacemaker?"
				/>
				<YesNoQuestion
					id="rheumaticFever"
					question="Have you ever had a history of rheumatic fever?"
				/>
			</FormSection>

			<FormSection title="Respiratory History">
				<YesNoQuestion
					id="asthma"
					question="Do you have asthma?"
				/>
				<YesNoQuestion
					id="emphysema"
					question="Do you have emphysema?"
				/>
				<YesNoWithDetails
					id="chronicBronchitis"
					detailsPlaceholder="Describe your symptoms"
					question="Do you have chronic bronchitis?"
				/>
				<YesNoQuestion
					id="sleepApnea"
					question="Do you have sleep apnea?"
				/>
				<YesNoQuestion
					id="tuberculosis"
					question="Do you have tuberculosis?"
				/>
			</FormSection>

			<FormSection title="Endocrine and Neurological History">
				<YesNoQuestion
					id="diabetes"
					question="Do you have diabetes?"
				/>
				<YesNoQuestion
					id="thyroidProblems"
					question="Do you have thyroid problems (hyperthyroidism, hypothyroidism)?"
				/>
				<YesNoQuestion
					id="epilepsy"
					question="Do you have epilepsy or seizures?"
				/>
				<YesNoWithDetails
					id="faintingSpells"
					detailsPlaceholder="Describe the episodes"
					question="Do you have fainting spells?"
				/>
				<YesNoQuestion
					id="stroke"
					question="Have you ever had a stroke?"
				/>
				<YesNoQuestion
					id="multipleSclerosis"
					question="Do you have multiple sclerosis?"
				/>
				<YesNoQuestion
					id="alzheimers"
					question="Do you have Alzheimer's disease?"
				/>
			</FormSection>

			<FormSection title="Gastrointestinal History">
				<YesNoQuestion
					id="ulcers"
					question="Do you have ulcers?"
				/>
				<YesNoWithDetails
					id="acidReflux"
					detailsPlaceholder="Describe your symptoms"
					question="Do you have acid reflux?"
				/>
				<YesNoQuestion
					id="irritableBowel"
					question="Do you have irritable bowel syndrome?"
				/>
				<YesNoQuestion
					id="hepatitis"
					question="Do you have hepatitis (A, B, or C)?"
				/>
				<YesNoQuestion
					id="liverDisease"
					question="Do you have liver disease?"
				/>
			</FormSection>

			<FormSection title="Musculoskeletal History">
				<YesNoQuestion
					id="arthritis"
					question="Do you have arthritis?"
				/>
				<YesNoQuestion
					id="rheumatism"
					question="Do you have rheumatism?"
				/>
				<YesNoQuestion
					id="jointReplacement"
					question="Have you had joint replacement?"
				/>
				<YesNoQuestion
					id="osteoporosis"
					question="Do you have osteoporosis?"
				/>
				<YesNoQuestion
					id="bisphosphonate"
					question="Have you ever had a history of bisphosphonate use (for osteoporosis or other conditions)?"
				/>
			</FormSection>

			<FormSection title="Other Medical Conditions">
				<YesNoQuestion
					id="hivAids"
					question="Do you have HIV/AIDS?"
				/>
				<YesNoQuestion
					id="autoimmune"
					question="Do you have autoimmune diseases (e.g., lupus, rheumatoid arthritis)?"
				/>
				<YesNoQuestion
					id="anemia"
					question="Do you have anemia?"
				/>
				<YesNoQuestion
					id="bloodTransfusions"
					question="Have you ever had blood transfusions?"
				/>
				<YesNoWithDetails
					id="cancer"
					detailsPlaceholder="Specify type and treatment"
					question="Have you ever had cancer?"
				/>
				<YesNoQuestion
					id="kidneyDisease"
					question="Do you have kidney disease?"
				/>
				<YesNoQuestion
					id="glaucoma"
					question="Do you have glaucoma?"
				/>
				<YesNoQuestion
					id="radiationTherapy"
					question="Have you ever had a history of radiation therapy to the head or neck?"
				/>
			</FormSection>

			<FormSection title="Mental Health">
				<YesNoWithDetails
					id="anxiety"
					detailsPlaceholder="Describe your anxiety symptoms"
					question="Do you have anxiety?"
				/>
				<YesNoQuestion
					id="depression"
					question="Do you have depression?"
				/>
				<YesNoQuestion
					id="psychiatricConditions"
					question="Do you have other psychiatric conditions?"
				/>
			</FormSection>

			<FormSection title="General Health Assessment">
				<YesNoWithDetails
					id="goodHealth"
					detailsPlaceholder="Explain any concerns"
					question="Do you feel that you are in good health?"
				/>
				<YesNoWithDetails
					id="healthChanges"
					detailsPlaceholder="Explain the changes"
					question="Has there been any change in your general health in the past year?"
				/>
				<YesNoWithDetails
					id="additionalConditions"
					detailsPlaceholder="Describe any additional conditions"
					question="Do you have any disease, condition, or problem not listed above that you think the dentist should know about?"
				/>
			</FormSection>
		</div>
	);
};