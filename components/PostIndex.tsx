"use client";

import { Post } from "@/app/utils/blog";
import Fuse from "fuse.js";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Search } from "react-feather";

export default function PostIndex({ posts }: { posts: Post[] }) {
	const [search, setSearch] = useState("");
	const [selectedTags, setSelectedTags] = useState<string[]>([]);

	const tags = Array.from(new Set(posts.map((posts) => posts.tags).flat()));

	const TagLink = ({
		tag,
		clickable,
	}: {
		tag: string;
		clickable?: boolean;
	}) => {
		return (
			<li
				className={`inline-block transition duration-200 ${selectedTags.includes(tag) ? "text-main underline font-medium" : ""} ${clickable ? "hover:text-main cursor-pointer" : "cursor-default"}`}
				onPointerDown={() => clickable && toggleTag(tag)}
			>
				{tag}
			</li>
		);
	};

	const toggleTag = (tag: string) => {
		if (selectedTags.includes(tag)) {
			setSelectedTags(selectedTags.filter((t) => t !== tag));
		} else {
			setSelectedTags([...selectedTags, tag]);
		}
	};

	const fuse = useMemo(() => {
		return new Fuse(posts, {
			keys: ["title", "tags"],
			threshold: 0.3,
		});
	}, [posts]);

	const filteredPosts = useMemo(() => {
		let filtered = posts;
		if (selectedTags.length > 0) {
			filtered = posts.filter((post) =>
				selectedTags.some((tag) => post.tags?.includes(tag)),
			);
		}

		if (!search) return filtered;

		return fuse
			.search(search, { limit: 100 })
			.map((result) => result.item)
			.filter((post) => selectedTags.every((tag) => post.tags?.includes(tag)))
			.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
	}, [search, selectedTags, posts, fuse]);

	return (
		<div className="my-12">
			{posts.length > 0 && (
				<div className="my-8">
					<div className="flex gap-16">
						<p className="min-w-30">Filter by tags:</p>
						<ul className="flex flex-wrap gap-x-8 gap-y-2">
							{tags
								.sort((a, b) => (a.split(" ")[1] > b.split(" ")[1] ? 1 : -1))
								.map((tag, i) => (
									<TagLink key={i} tag={tag} clickable />
								))}
						</ul>
					</div>
				</div>
			)}
			{posts.length > 0 && (
				<div className="my-8 relative">
					<div className="flex justify-between items-center group border my-4 hover:-translate-0.5 hover:shadow-[5px_5px] hover:border-main shadow-black dark:shadow-white hover:shadow-main transition duration-200 overflow-hidden focus-within:shadow-[5px_5px] focus-within:-translate-0.5 w-full">
						<input
							className="outline-none w-full px-4 py-2"
							placeholder="Search..."
							value={search}
							onChange={(e) => setSearch(e.target.value)}
							onKeyDown={(e) => {
								if (e.key == "Enter") {
									const input = e.target as HTMLInputElement;
									input.blur();
								}
							}}
						></input>
						<Search className="mr-2" width={20} height={20} />
					</div>
				</div>
			)}
			<div className="flex flex-col gap-10">
				{filteredPosts.length === 0 ? (
					<p className="text-center opacity-50">No posts found.</p>
				) : (
					filteredPosts.map((post, i) => (
						<div key={post.slug} className="relative gap-2 flex flex-col ml-32">
							{(i == 0 ||
								filteredPosts[i - 1].date.split("/")[2] !==
									post.date.split("/")[2]) && (
								<div className="absolute flex gap-4 items-center -left-32 top-1 text-sm font-medium">
									<p>{post.date.split("/")[2]}</p>
									<div className="-top-8 w-16 h-0.5 bg-black dark:bg-white"></div>
								</div>
							)}
							<div className="flex justify-between items-baseline">
								<Link
									href={`/blog/${post.slug}`}
									className="text-lg font-bold hover:text-main transition duration-200"
								>
									{post.title}
								</Link>
								<p className="font-medium text-sm">{post.date}</p>
							</div>
							<div className="flex gap-4">
								{post.tags.map((tag: string, j: number) => (
									<TagLink key={`${tag}${i}${j}`} tag={tag} />
								))}
							</div>
						</div>
					))
				)}
			</div>
		</div>
	);
}
