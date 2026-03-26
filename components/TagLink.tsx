"use client";

import { useEffect, useState } from "react";

export default function TagLink({ tag }: { tag: string }) {
	const strippedTag = tag.split(" ")[1];
	const [selected, setSelected] = useState(false);

	const toggleTag = () => {
		setSelected(!selected);
		const url = new URL(window.location.href);
		if (!selected) {
			const tags = url.searchParams.get("tags");
			if (tags) {
				url.searchParams.set("tags", tags + "," + strippedTag);
			} else {
				url.searchParams.set("tags", strippedTag);
			}
		} else {
			const tags = url.searchParams.get("tags");
			if (tags) {
				const newTags = tags
					.split(",")
					.filter((t) => t !== strippedTag)
					.join(",");
				if (newTags) {
					url.searchParams.set("tags", newTags);
				} else {
					url.searchParams.delete("tags");
				}
			}
		}
		window.history.pushState({}, "", url);
	};

	useEffect(() => {
		const url = new URL(window.location.href);
		const tags = url.searchParams.get("tags");
		if (tags) {
			setSelected(tags.split(",").includes(strippedTag));
		}
	}, [tag]);

	return (
		<li
			className={`inline-block cursor-pointer hover:text-main transition duration-200 ${selected ? "text-main underline font-medium" : ""}`}
			onPointerDown={toggleTag}
		>
			{tag}
		</li>
	);
}
