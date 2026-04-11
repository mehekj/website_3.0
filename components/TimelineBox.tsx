"use client";

import { useState } from "react";

import { ChevronRight } from "react-feather";

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
			<div className="absolute -left-12 -translate-y-1/2 top-2 w-5 h-0.5 bg-black dark:bg-white" />
			<p className="uppercase text-sm font-medium">
				{entry.start} - {entry.end}
			</p>
			<div
				className={`group border p-4 my-1 hover:-translate-0.5 hover:shadow-[5px_5px] hover:border-main shadow-black dark:shadow-white hover:shadow-main transition duration-200 overflow-hidden ${open ? "shadow-[5px_5px] -translate-0.5" : ""}`}
				onPointerDown={(e) => {
					e.stopPropagation();
					setOpen(!open);
				}}
			>
				<div className={`cursor-pointer flex items-center justify-between`}>
					<div>
						<h3 className="text-lg font-bold">{entry.title}</h3>
						<h4 className="font-medium">{entry.subtitle}</h4>
					</div>
					<ChevronRight
						width={32}
						height={32}
						className={`group-hover:text-main transition duration-200 ${open ? "rotate-90" : "rotate-0"}`}
					/>
				</div>
				<div
					className={`transition-all duration-200 ${open ? " max-h-screen" : " max-h-0"}`}
					onPointerDown={(e) => {
						e.stopPropagation();
					}}
				>
					<ul className={`list-disc list-inside px-2 pt-4`}>
						{entry.bullets.map((bullet, index) => (
							<li key={index}>{bullet}</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
