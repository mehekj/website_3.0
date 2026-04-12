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
			<body className="min-h-screen flex flex-col w-screen">
				<NavBar />
				<div className="flex flex-col flex-1 justify-start items-start w-full">
					{children}
				</div>
				<footer className="mt-auto p-1 w-full text-center text-xs uppercase border-t">
					Made by Mehek Jethani 2026
				</footer>
			</body>
		</html>
	);
}
