import NavBar from "@/components/NavBar";
import "./globals.css";

import { Poppins } from "next/font/google";

const poppins = Poppins({
	weight: ["200", "300", "400", "500", "600", "700"],
	variable: "--font-poppins",
	subsets: ["latin"],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${poppins.className}`}>
			<body className="min-h-screen flex flex-col justify-between">
				<NavBar />
				<div>{children}</div>
				<footer className="bottom-0 p-1 w-full text-center text-sm uppercase border-t-1">
					Made by Mehek Jethani 2026
				</footer>
			</body>
		</html>
	);
}
