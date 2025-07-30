"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "react-feather";

export default function ThemeToggle() {
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
	}, []);

	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [darkMode]);

	const toggleDarkMode = () => setDarkMode(!darkMode);

	return (
		<button className="bg-black dark:bg-white h-full w-full px-3 cursor-pointer">
			{darkMode ? (
				<Sun onPointerDown={toggleDarkMode} className="text-black w-8 h-8" />
			) : (
				<Moon onPointerDown={toggleDarkMode} className="text-white w-8 h-8" />
			)}
		</button>
	);
}
