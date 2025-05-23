import React from 'react';

type ShellProps = {
	children: React.ReactNode;
};

export function Shell({ children }: ShellProps) {
	return (
		<div className="flex h-screen bg-slate-50">
			{children}
		</div>
	);
}