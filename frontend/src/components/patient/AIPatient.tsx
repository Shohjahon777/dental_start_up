import { Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function AIPatient() {
	return (
		<Card className="h-full flex flex-col">
			<CardContent className="flex-1 flex flex-col items-center justify-center p-6">
				<div className="rounded-full bg-slate-200 w-24 h-24 flex items-center justify-center mb-4">
					<Mic className="h-10 w-10 text-slate-500" />
				</div>
				<h2 className="text-xl font-medium text-center mb-2">AI Patient</h2>
				<p className="text-slate-500 text-center mb-6">
					The AI will simulate a patient conversation. Listen carefully and fill the form accordingly.
				</p>
				<Button className="bg-blue-600 hover:bg-blue-700">
					Start Conversation
				</Button>
			</CardContent>
		</Card>
	);
}