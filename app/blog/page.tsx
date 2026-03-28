import SearchBar from "@/components/SearchBar";
import TagLink from "@/components/TagLink";
import Link from "next/link";
import { getAllPosts } from "../utils/blog";

export default function Blog() {
	const posts = getAllPosts();

	const tags = [
		"🌯 restauranting",
		"💯 lists",
		"🎲 misc",
		"🎨 arts & crafts",
		"🤷‍♀️ life stuff",
	];

	return (
		<div className="max-w-6xl m-auto px-12 py-24">
			<h1 className="font-bold text-5xl">Other things I spend time on</h1>
			<p className="my-4">unpolished projects, hobbies, word vomit</p>
			<div className="my-12">
				<div className="flex gap-16">
					<p>Filter by tags:</p>
					<ul className="flex gap-8">
						{tags
							.sort((a, b) => (a.split(" ")[1] > b.split(" ")[1] ? 1 : -1))
							.map((tag) => (
								<TagLink key={tag} tag={tag} />
							))}
					</ul>
				</div>
				<div>
					<SearchBar />
				</div>
				<div>
					{posts.map((post) => (
						<div key={post.slug} className="my-8">
							<Link
								href={`/blog/${post.slug}`}
								className="text-2xl font-semibold"
							>
								{post.frontmatter.title}
							</Link>
							<p>{post.frontmatter.date}</p>
							<p>{post.frontmatter.description}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
