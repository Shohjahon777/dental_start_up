import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PaperOneForm } from "./PaperOneForm";
import { PaperTwoForm } from "./PaperTwoForm";

export function FormContainer() {
	const [currentTab, setCurrentTab] = useState("paper1");

	return (
		<Tabs
			value={currentTab}
			onValueChange={setCurrentTab}
			className="w-full h-full flex flex-col"
		>
			<div className="flex justify-between items-center mb-4">
				<h1 className="text-2xl font-bold">Dental Assessment Form</h1>
				<TabsList>
					<TabsTrigger value="paper1">Paper 1</TabsTrigger>
					<TabsTrigger value="paper2">Paper 2</TabsTrigger>
				</TabsList>
			</div>

			<TabsContent value="paper1" className="flex-1 mt-0">
				<ScrollArea className="h-[calc(100vh-120px)]">
					<Card>
						<CardContent className="p-6">
							<PaperOneForm />
						</CardContent>
					</Card>
				</ScrollArea>
			</TabsContent>

			<TabsContent value="paper2" className="flex-1 mt-0">
				<ScrollArea className="h-[calc(100vh-120px)]">
					<Card>
						<CardContent className="p-6">
							<PaperTwoForm />
						</CardContent>
					</Card>
				</ScrollArea>
			</TabsContent>
		</Tabs>
	);
}