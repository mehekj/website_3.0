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
			<body>
				<NavBar />
				<div>{children}</div>
			</body>
		</html>
	);
}
