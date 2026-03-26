import path from "path";
import fs from "fs";


const BLOG_PATH = path.join(process.cwd(), "content", "_blog");

export async function getBlogPosts() {
    const posts = fs.readdirSync(BLOG_PATH);
    return posts;
}