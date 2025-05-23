import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

type YesNoQuestionProps = {
	id: string;
	question: string;
	defaultValue?: "yes" | "no";
};

export function YesNoQuestion({ id, question, defaultValue = "no" }: YesNoQuestionProps) {
	return (
		<div className="space-y-2">
			<Label>{question}</Label>
			<RadioGroup id={id} defaultValue={defaultValue} className="flex space-x-4">
				<div className="flex items-center space-x-2">
					<RadioGroupItem value="yes" id={`${id}-yes`} />
					<Label htmlFor={`${id}-yes`}>Yes</Label>
				</div>
				<div className="flex items-center space-x-2">
					<RadioGroupItem value="no" id={`${id}-no`} />
					<Label htmlFor={`${id}-no`}>No</Label>
				</div>
			</RadioGroup>
		</div>
	);
}