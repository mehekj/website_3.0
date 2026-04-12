import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
	const projects = [
		{
			start: "03/2025",
			end: "Present",
			title: "Project 1",
			blurb: "Next.js, Tailwind CSS, TypeScript",
			cover: "/test.MOV",
			full: true,
		},
		{
			start: "03/2025",
			end: "Present",
			title: "Project 1",
			blurb: "Next.js, Tailwind CSS, TypeScript",
			cover: "/test.MOV",
		},
		{
			start: "03/2025",
			end: "Present",
			title: "Project 1",
			blurb: "Next.js, Tailwind CSS, TypeScript",
			cover: "/test.MOV",
		},
		{
			start: "03/2025",
			end: "Present",
			title: "Project 1",
			blurb: "Next.js, Tailwind CSS, TypeScript",
			cover: "/test.MOV",
		},
		{
			start: "03/2025",
			end: "Present",
			title: "Project 1",
			blurb: "Next.js, Tailwind CSS, TypeScript",
			cover: "/test.MOV",
		},
	];

	return (
		<div className="max-w-6xl w-full m-auto px-8 py-12 md:py-24">
			<h1 className="font-bold text-4xl md:text-5xl">
				Sometimes I code things
			</h1>
			<p className="my-4">
				here&apos;s some projects I&apos;ve actually finished (there&apos;s many
				more)
			</p>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12 md:my-16">
				{projects.map((project, i) => (
					<ProjectCard key={i} info={project} />
				))}
			</div>
		</div>
	);
}
