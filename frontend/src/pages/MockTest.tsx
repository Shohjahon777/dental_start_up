import { Shell } from "@/components/layout/Shell";
import { AIPatient } from "@/components/patient/AIPatient";
import { FormContainer } from "@/components/forms/FormContainer";

export function MockTest() {
	return (
		<Shell>
			{/* Left side - AI Patient Section */}
			<div className="w-1/3 p-4 border-r border-slate-200">
				<AIPatient />
			</div>

			{/* Right side - Forms Section */}
			<div className="w-2/3 p-4">
				<FormContainer />
			</div>
		</Shell>
	);
}

export default MockTest;