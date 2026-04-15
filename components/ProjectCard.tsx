"use client";
import { Project } from "@/app/utils/projects";
import Link from "next/link";

export default function ProjectCard({ project }: { project: Project }) {
	const gridCols = project.full ? `md:col-span-2` : "col-span-1";

	return (
		<Link href={`/projects/${project.slug}`} className={`${gridCols}`}>
			<div
				className={`group border-[0.5] my-1 hover:-translate-0.5 hover:shadow-[5px_5px] hover:border-main shadow-black dark:shadow-white hover:shadow-main transition duration-200 cursor-pointer`}
				onPointerEnter={(e) => {
					const video = e.currentTarget.firstChild
						?.firstChild as HTMLVideoElement;
					video.play();
				}}
				onPointerLeave={(e) => {
					const video = e.currentTarget.firstChild
						?.firstChild as HTMLVideoElement;
					video.pause();
				}}
			>
				<div className="relative overflow-hidden border-[0.5] border-inherit min-h-72">
					<video
						src={project.cover}
						loop
						muted
						playsInline
						controls={false}
						preload="auto"
						className="absolute top-0 left-0 w-full h-full object-cover saturate-25 group-hover:saturate-150 transition duration-200"
					/>
				</div>
				<div className="p-6 border-[0.5] border-inherit">
					<div className="flex flex-col md:flex-row justify-between items-baseline">
						<h3 className="text-2xl font-bold mb-2">{project.title}</h3>
						<p className="uppercase text-xs md:text-sm mb-2 font-medium">
							{project.start} - {project.end}
						</p>
					</div>
					<p className="text-sm md:text-base">{project.blurb}</p>
				</div>
			</div>
		</Link>
	);
}
