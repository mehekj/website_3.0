import path from "path";
import fs from "fs";
import matter from "gray-matter";

const BLOG_PATH = path.join(process.cwd(), "content", "_blog");

export interface Post {
    slug: string;
    title: string;
    date: string;
    tags: string[];
    content: string;
}

export function getPostSlugs() {
    return fs.readdirSync(BLOG_PATH).filter((file) => file.endsWith(".mdx"));
}

export function getPostFromSlug( slug: string ) : Post {
    const strippedSlug = slug.replace(/\.mdx$/, "");
    const filePath = path.join(BLOG_PATH, `${strippedSlug}.mdx`);

    const fileContents = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContents);

    return {
        slug: strippedSlug,
        title: data.title,
        date: data.date,
        tags: data.tags,
        content,
    };
}

export function getAllPosts() {
    const slugs = getPostSlugs();
    const posts = slugs.map((slug) => getPostFromSlug(slug));
    
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}