import { Label } from "@/components/ui/label";
import {useState} from "react";
import {Textarea} from "@/components/ui/textarea.tsx";

interface YesNoWithDetailsProps {
	id: string;
	question: string;
	detailsPlaceholder: string;
}

export const YesNoWithDetails = ({ id, question, detailsPlaceholder}: YesNoWithDetailsProps) => {
	const [showDetails, setShowDetails] = useState(false);

	return (
		<div className="space-y-2">
			<Label>{question}</Label>
			<div className="flex space-x-4">
				<label className="flex items-center">
					<input
						type="radio"
						name={id}
						value="yes"
						onChange={() => setShowDetails(true)}
						className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
					/>
					<span className="text-sm text-gray-700">Yes</span>
				</label>
				<label className="flex items-center">
					<input
						type="radio"
						name={id}
						value="no"
						onChange={() => setShowDetails(false)}
						className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
					/>
					<span className="text-sm text-gray-700">No</span>
				</label>
			</div>
			{showDetails && (
				<div className="mt-2 ml-6">
					<Textarea
						id={`${id}_details`}
						placeholder={detailsPlaceholder}
						rows={2}
					/>
				</div>
			)}
		</div>
	);
};