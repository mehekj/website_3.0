import NavBar from "@/components/NavBar";
import "./globals.css";

import { Poppins } from "next/font/google";

const poppins = Poppins({
	weight: ["300", "500", "700"],
	variable: "--font-poppins",
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
