"use client";

import { Search } from "react-feather";

export default function SearchBar() {
	return (
		<div className="my-8 relative">
			<div className="flex justify-between items-center group border-1 my-1 hover:translate-[-2px] hover:shadow-[5px_5px] hover:border-main shadow-black dark:shadow-white hover:shadow-main transition duration-200 overflow-hidden focus-within:shadow-[5px_5px] focus-within:translate-[-2px] w-full">
				<input
					className="outline-none w-full px-4 py-2"
					placeholder="Search..."
					onKeyDown={(e) => {
						if (e.key == "Enter") {
							const input = e.target as HTMLInputElement;
							input.blur();
						}
					}}
					onChange={(e) => {
						const input = e.target as HTMLInputElement;
						if (input.value != "") {
							const url = new URL(window.location.href);
							url.searchParams.set("search", input.value);
							window.history.pushState({}, "", url);
						} else {
							const url = new URL(window.location.href);
							url.searchParams.delete("search");
							window.history.pushState({}, "", url);
						}
					}}
				></input>
				<Search className="mr-2" width={20} height={20} />
			</div>
		</div>
	);
}
