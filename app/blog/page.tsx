import PostIndex from "@/components/PostIndex";
import { getAllPosts } from "../utils/blog";

export default function Blog() {
	const posts = getAllPosts();

	return (
		<div className="max-w-6xl w-full px-8 py-24">
			<h1 className="font-bold text-5xl">Other things I spend time on</h1>
			<p className="my-4">unpolished projects, hobbies, word vomit</p>
			<PostIndex posts={posts} />
		</div>
	);
}
