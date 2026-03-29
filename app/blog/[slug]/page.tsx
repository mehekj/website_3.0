import { getPostFromSlug, getPostSlugs } from "@/app/utils/blog";
import { mdxComponents } from "@/app/utils/mdx-components";
import { compileMDX } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
	return getPostSlugs().map((slug) => ({
		slug: slug.replace(/\.mdx$/, ""),
	}));
}

export default async function BlogPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;

	const post = getPostFromSlug(slug);

	if (!post) {
		return notFound();
	}

	const { content } = await compileMDX({
		source: post.content,
		components: mdxComponents,
	});

	return (
		<div>
			<h1>{post.title}</h1>
			<p>{post.date}</p>
			<div>{content}</div>
		</div>
	);
}
