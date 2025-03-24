"use client";

import { useState, useEffect } from "react";
import { Moon } from "react-feather";

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
		<button>
			<Moon onPointerDown={toggleDarkMode} />
		</button>
	);
}
