"use client";

import { useState } from "react";

import { ChevronDown, ChevronRight } from "react-feather";

export interface TimelineEntry {
	start: string;
	end: string;
	title: string;
	subtitle: string;
	bullets: string[];
}

export default function TimelineBox({ entry }: { entry: TimelineEntry }) {
	const [open, setOpen] = useState(false);

	return (
		<div className="my-8 relative">
			<div className="absolute -left-12 -translate-y-1/2 top-2 w-5 h-[2px] bg-black dark:bg-white" />
			<p className="uppercase text-sm font-medium">
				{entry.start} - {entry.end}
			</p>
			<div
				className={`border-1 p-4 my-1 hover:shadow-[5px_5px] hover:border-main shadow-black dark:shadow-white hover:shadow-main transition duration-200 ${open ? "shadow-[5px_5px]" : ""}`}
			>
				<div
					className={`cursor-pointer flex items-center justify-between ${open ? "mb-4" : ""}`}
					onPointerDown={(e) => {
						e.stopPropagation();
						setOpen(!open);
					}}
				>
					<div>
						<h3 className="text-lg font-bold">{entry.title}</h3>
						<h4 className="font-medium">{entry.subtitle}</h4>
					</div>
					{open ? (
						<ChevronDown width={32} height={32} />
					) : (
						<ChevronRight width={32} height={32} />
					)}
				</div>
				{open && (
					<ul className="list-disc list-inside p-2">
						{entry.bullets.map((bullet, index) => (
							<li key={index}>{bullet}</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
}
