import { Raleway } from "next/font/google";
import "./globals.css";
import Footer from "@/components/UI/Footer";
import Header from "@/components/UI/Header";
import {Providers} from "@/components/Provider";
import { Metadata } from "next";
const raleway = Raleway({ subsets: ["latin"] });


export const metadata: Metadata = {
	title: "Taskr",
	description: "Your favorite personal task manager",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
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
  )
}
