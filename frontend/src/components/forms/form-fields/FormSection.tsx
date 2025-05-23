import React from 'react';
import { Separator } from "@/components/ui/separator";

type FormSectionProps = {
	title: string;
	children: React.ReactNode;
};

export function FormSection({ title, children }: FormSectionProps) {
	return (
		<div>
			<h3 className="text-lg font-medium mb-4">{title}</h3>
			<div className="space-y-4">
				{children}
			</div>
			<Separator className="mt-6" />
		</div>
	);
}