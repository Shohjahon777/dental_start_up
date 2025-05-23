// Form field types
export type YesNoValue = "yes" | "no";

// Paper One form data
export interface PaperOneData {
	patientInfo: {
		fullName: string;
		age: number | null;
		mainComplaint: string;
	};
	medicalHistory: {
		heartCondition: YesNoValue;
		diabetes: YesNoValue;
		allergies: YesNoValue;
		medications: string;
	};
	dentalHistory: {
		lastVisit: string;
		recentTreatment: YesNoValue;
		brushingFrequency: string;
	};
}

// Paper Two form data
export interface PaperTwoData {
	clinicalExamination: {
		oralHygiene: string;
		bleeding: YesNoValue;
		mobility: YesNoValue;
	};
	diagnosis: {
		primary: string;
		differential: string;
	};
	treatmentPlan: {
		proposed: string;
		followUp: string;
		referral: YesNoValue;
	};
}