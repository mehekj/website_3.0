"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function NavBar() {
	const pathname = usePathname();

	const navLinks = [
		["home", "/"],
		["lore", "/about"],
		["job?", "/experience"],
		["stuff i made", "/projects"],
		["brain dump", "/blog"],
		["find me", "/contact"],
	];

	return (
		<nav>
			<div>
				<ul>
					{navLinks.map(([page, href], i) => (
						<li key={i} className={`${pathname === href ? "underline" : ""}`}>
							<Link href={href}>{page}</Link>
						</li>
					))}
				</ul>
			</div>
			<ThemeToggle />
		</nav>
	);
}
