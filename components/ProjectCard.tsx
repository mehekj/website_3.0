import Image from "next/image";

export interface ProjectInfo {
	start: string;
	end: string;
	title: string;
	blurb: string;
	image: string;
	full?: boolean;
}

export default function ProjectCard({ info }: { info: ProjectInfo }) {
	const gridCols = info.full ? `col-span-2` : "col-span-1";

	return (
		<div
			className={`group border-[0.5] my-1 hover:-translate-0.5 hover:shadow-[5px_5px] hover:border-main shadow-black dark:shadow-white hover:shadow-main transition duration-200 cursor-pointer ${gridCols}`}
		>
			<div className="relative overflow-hidden border-[0.5] border-inherit min-h-72">
				<Image
					src={info.image}
					alt={info.title}
					fill={true}
					className="object-cover saturate-25 group-hover:saturate-100 transition duration-200"
				/>
			</div>
			<div className="p-6 border-[0.5] border-inherit">
				<div className="flex justify-between items-baseline">
					<h3 className="text-2xl font-bold mb-2">{info.title}</h3>
					<p className="uppercase text-sm font-medium">
						{info.start} - {info.end}
					</p>
				</div>
				<p>{info.blurb}</p>
			</div>
		</div>
	);
}
