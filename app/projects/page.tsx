import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
	return (
		<div className="max-w-6xl m-auto px-8 py-24">
			<h1 className="font-bold text-5xl">Sometimes I code things</h1>
			<p className="my-4">
				here&apos;s some projects I&apos;ve actually finished (there&apos;s many
				more)
			</p>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
				<ProjectCard
					info={{
						start: "03/2025",
						end: "Present",
						title: "Project 1",
						blurb: "Next.js, Tailwind CSS, TypeScript",
						image: "/profile.jpeg",
						full: true,
					}}
				/>
				<ProjectCard
					info={{
						start: "03/2025",
						end: "Present",
						title: "Project 1",
						blurb: "Next.js, Tailwind CSS, TypeScript",
						image: "/profile.jpeg",
					}}
				/>
				<ProjectCard
					info={{
						start: "03/2025",
						end: "Present",
						title: "Project 1",
						blurb: "Next.js, Tailwind CSS, TypeScript",
						image: "/profile.jpeg",
					}}
				/>
				<ProjectCard
					info={{
						start: "03/2025",
						end: "Present",
						title: "Project 1",
						blurb: "Next.js, Tailwind CSS, TypeScript",
						image: "/profile.jpeg",
					}}
				/>
				<ProjectCard
					info={{
						start: "03/2025",
						end: "Present",
						title: "Project 1",
						blurb: "Next.js, Tailwind CSS, TypeScript",
						image: "/profile.jpeg",
					}}
				/>
			</div>
		</div>
	);
}
