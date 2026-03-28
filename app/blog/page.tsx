import SearchBar from "@/components/SearchBar";
import TagLink from "@/components/TagLink";
import Link from "next/link";
import { getAllPosts } from "../utils/blog";

export default function Blog() {
	const posts = getAllPosts();

	const tags = Array.from(
		new Set(posts.map((posts) => posts.frontmatter.tags).flat()),
	);

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
							.map((tag, i) => (
								<TagLink key={`${tag}${i}`} tag={tag} />
							))}
					</ul>
				</div>
				<div className="mb-20">
					<SearchBar />
				</div>
				<div className="flex flex-col gap-10">
					{posts.map((post, i) => (
						<div key={post.slug} className="relative gap-2 flex flex-col ml-32">
							{(i == 0 ||
								posts[i - 1].frontmatter.date.split("/")[2] !==
									post.frontmatter.date.split("/")[2]) && (
								<div className="absolute flex gap-4 items-center -left-32 top-1 text-sm font-medium">
									<p>{post.frontmatter.date.split("/")[2]}</p>
									<div className="-top-8 w-16 h-[2px] bg-black dark:bg-white"></div>
								</div>
							)}
							<div className="flex justify-between items-baseline">
								<Link
									href={`/blog/${post.slug}`}
									className="text-lg font-bold hover:text-main transition duration-200"
								>
									{post.frontmatter.title}
								</Link>
								<p className="font-medium text-sm">{post.frontmatter.date}</p>
							</div>
							<div className="flex gap-4">
								{post.frontmatter.tags.map((tag: string, j: number) => (
									<p key={`${tag}${i}${j}`} className="">
										{tag}
									</p>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
