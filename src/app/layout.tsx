import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { Github as GitHub } from "lucide-react";
import { NAVBAR_GITHUB_REPOSITORY_LINK } from "@/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Package List",
	description: "Save presets of NPM package install scripts to allow for efficient and rapid development."
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
				<ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
					<div className="flex justify-end px-4 pt-3">
						<a href={NAVBAR_GITHUB_REPOSITORY_LINK}>
							<Button className="flex gap-2 text-white" variant="secondary">
								<GitHub />
								<span>GitHub</span>
							</Button>
						</a>
					</div>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
