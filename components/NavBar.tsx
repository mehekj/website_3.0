"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function NavBar() {
	const pathname = usePathname();

	const navLinks = [
		["lore", "/about"],
		["job?", "/experience"],
		["stuff i made", "/projects"],
		["brain dump", "/blog"],
		["find me", "/contact"],
	];

	return (
		<nav className="flex border-black dark:border-white border-b-1 items-center justify-between h-14">
			<div className="h-full">
				<Link
					href={"/"}
					className="flex px-4 py-2 bg-black dark:bg-white justify-center items-center h-full"
				>
					<svg
						className="h-full w-full max-h-10"
						viewBox="0 0 51 33"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M36.8591 0V22.0418H28.9309V12.8169L21.6518 33H15.2536L7.92819 12.7713L7.92818 33H0L5.72205e-06 0H9.36546L18.4991 22.1673L27.54 0H36.8591Z"
							className="fill-main"
						/>
						<path
							d="M51 0V22.4637C51 25.839 50.0264 28.4388 48.0791 30.2633C46.1627 32.0878 43.5664 33 40.29 33C36.8591 33 34.1082 32.0422 32.0373 30.1265C29.9664 28.2108 28.9309 25.4893 28.9309 21.962H36.8591C36.8591 23.2999 37.0909 24.3186 37.6473 25.018C38.2036 25.6869 39.0073 26.0214 40.0582 26.0214C41.0164 26.0214 41.7582 25.7173 42.2836 25.1092C42.8091 24.501 43.0718 23.6192 43.0718 22.4637V0H51Z"
							className="fill-white dark:fill-black"
						/>
					</svg>
				</Link>
			</div>
			<div className="flex w-full h-full justify-end items-center">
				<ul className="flex mx-4">
					{navLinks.map(([page, href], i) => (
						<li
							key={i}
							className={`${
								pathname === href ? "underline" : ""
							} underline-offset-4 uppercase mx-4`}
						>
							<Link href={href}>{page}</Link>
						</li>
					))}
				</ul>
			</div>
			<div className="h-full">
				<ThemeToggle />
			</div>
		</nav>
	);
}
