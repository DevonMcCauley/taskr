import { Raleway } from "next/font/google";
import "./globals.css";
import Footer from "@/components/UI/Footer";
import Header from "@/components/UI/Header";
import { Providers } from "@/components/Provider";
const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
	title: "Taskr",
	description: "Your favorite personal task manager",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" data-theme="emerald">
			<body className={`${raleway.className} min-h-screen flex flex-col`}>
				<Providers>
					<Header />
					<div className="flex-1 mt-8">{children}</div>
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
