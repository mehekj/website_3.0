import TimelineBox, { TimelineEntry } from "./TimelineBox";

export default function Timeline({ entries }: { entries: TimelineEntry[] }) {
	return (
		<div className="relative pl-8 md:pl-12">
			<div className="absolute left-2 top-2 h-full w-0.5 bg-black dark:bg-white" />
			{entries.reverse().map((entry, index) => (
				<div key={index}>
					<TimelineBox key={index} entry={entry} />
				</div>
			))}
		</div>
	);
}
