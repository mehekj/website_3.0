"use client";

export interface ProjectInfo {
	start: string;
	end: string;
	title: string;
	blurb: string;
	cover: string;
	full?: boolean;
}

export default function ProjectCard({ info }: { info: ProjectInfo }) {
	const gridCols = info.full ? `md:col-span-2` : "col-span-1";

	return (
		<div
			className={`group border-[0.5] my-1 hover:-translate-0.5 hover:shadow-[5px_5px] hover:border-main shadow-black dark:shadow-white hover:shadow-main transition duration-200 cursor-pointer ${gridCols}`}
		>
			<div className="relative overflow-hidden border-[0.5] border-inherit min-h-72">
				<video
					src={info.cover}
					loop
					muted
					playsInline
					controls={false}
					preload="auto"
					className="absolute top-0 left-0 w-full h-full object-cover saturate-25 group-hover:saturate-150 transition duration-200"
					onPointerEnter={(e) => {
						const video = e.currentTarget as HTMLVideoElement;
						video.play();
					}}
					onPointerLeave={(e) => {
						const video = e.currentTarget as HTMLVideoElement;
						video.pause();
					}}
				/>
			</div>
			<div className="p-6 border-[0.5] border-inherit">
				<div className="flex flex-col md:flex-row justify-between items-baseline">
					<h3 className="text-2xl font-bold mb-2">{info.title}</h3>
					<p className="uppercase text-xs md:text-sm mb-2 font-medium">
						{info.start} - {info.end}
					</p>
				</div>
				<p className="text-sm md:text-base">{info.blurb}</p>
			</div>
		</div>
	);
}
