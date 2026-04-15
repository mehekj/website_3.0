import path from "path";
import fs from "fs";
import matter from "gray-matter";

const PROJECT_PATH = path.join(process.cwd(), "content", "_projects");

export interface Project {
    slug: string;
    title: string;
    start: string;
    end: string;
    blurb: string;
    cover: string;
    full: boolean;
    content: string;
}

export function getProjectSlugs() {
    return fs.readdirSync(PROJECT_PATH).filter((file) => file.endsWith(".mdx"));
}

export function getProjectFromSlug( slug: string ) : Project {
    const strippedSlug = slug.replace(/\.mdx$/, "");
    const filePath = path.join(PROJECT_PATH, `${strippedSlug}.mdx`);

    const fileContents = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContents);

    return {
        slug: strippedSlug,
        title: data.title,
        start: data.start,
        end: data.end,
        blurb: data.blurb,
        cover: data.cover,
        full: data.full,
        content,
    };
}

export function getAllProjects() {
    const slugs = getProjectSlugs();
    const projects = slugs.map((slug) => getProjectFromSlug(slug));
    
    return projects.sort((a, b) => new Date(b.start).getTime() - new Date(a.start).getTime());
}