import { mdxComponents } from "@/app/utils/mdx-components";
import { getProjectFromSlug, getProjectSlugs } from "@/app/utils/projects";
import { compileMDX } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
	return getProjectSlugs().map((slug) => ({
		slug: slug.replace(/\.mdx$/, ""),
	}));
}

export default async function ProjectPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;

	const project = getProjectFromSlug(slug);

	if (!project) {
		return notFound();
	}

	const { content } = await compileMDX({
		source: project.content,
		components: mdxComponents,
	});

	return (
		<div>
			<h1>{project.title}</h1>
			<p>
				{project.start} - {project.end}
			</p>
			<div>{content}</div>
		</div>
	);
}
