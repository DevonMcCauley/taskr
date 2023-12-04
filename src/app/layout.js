import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Providers } from "@/components/Provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Taskr",
	description: "Your favorite personal task manager",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${inter.className} min-h-screen flex flex-col`}>
				<Providers>
					<Header />
					<div className="flex-1">{children}</div>
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
