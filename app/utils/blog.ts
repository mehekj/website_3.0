import path from "path";
import fs from "fs";
import matter from "gray-matter";


const BLOG_PATH = path.join(process.cwd(), "content", "_blog");

export function getPostSlugs() {
    return fs.readdirSync(BLOG_PATH).filter((file) => file.endsWith(".mdx"));
}

export function getPostFromSlug( slug: string ) {
    const strippedSlug = slug.replace(/\.mdx$/, "");
    const filePath = path.join(BLOG_PATH, `${strippedSlug}.mdx`);

    const fileContents = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContents);

    return {
        slug: strippedSlug,
        frontmatter: data,
        content,
    };
}

export function getAllPosts() {
    const slugs = getPostSlugs();
    const posts = slugs.map((slug) => getPostFromSlug(slug));
    
    return posts.sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());
}