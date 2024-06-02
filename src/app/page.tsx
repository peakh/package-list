"use client";

import ItemForm from "@/components/code/item-form";
import Terminal from "@/components/code/terminal";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import generateInstallationText from "@/util/generateInstallationText";
import Link from "next/link";
import Script from "next/script";
import { useState } from "react";

export default function Home() {
	// Array of packages.
	const [codeContent, setCodeContent] = useState<string[]>([]);
	// Where the user inputs the packages.
	const [input, setInput] = useState<string>("");
	const [saveDev, setSaveDev] = useState<boolean>(false);
	const [copied, setCopied] = useState<boolean>(false);

	const [saved, setSaved] = useState<boolean>(false);
	const [titleInput, setTitleInput] = useState<string>("");
	const [descriptionInput, setDescriptionInput] = useState<string>("");

	return (
		<>
			<TooltipProvider>
				<div className={cn("mt-16 flex flex-col gap-6 px-5", codeContent.length >= 10 ? "mb-12" : "")}>
					<div className="flex flex-col items-center justify-center gap-3 text-center">
						<h1 className="text-3xl font-semibold">List to Package Install</h1>

						<p className="font-medium">Quickly install a list of NPM packages from a pre-saved list.</p>

						<p className="font-medium">
							Add items or save a list for later use, then copy the code below to install your packages.
						</p>

						<p>
							This page is for creating a new list. You can review your saved lists{" "}
							<Link
								href="/saved"
								target="_blank"
								className="text-purple-500 transition-colors duration-300 hover:text-purple-300"
							>
								here
							</Link>
							.
						</p>
					</div>

					<div className="mt-6 flex flex-col items-center justify-center gap-6">
						<ItemForm codeContent={codeContent} input={input} setCodeContent={setCodeContent} setInput={setInput} />

						<Terminal
							codeContent={codeContent}
							setCodeContent={setCodeContent}
							codeWithInstall={generateInstallationText(codeContent, saveDev, {
								addEllipsis: true
							})}
							copied={copied}
							descriptionInput={descriptionInput}
							saveDev={saveDev}
							saved={saved}
							setCopied={setCopied}
							setDescriptionInput={setDescriptionInput}
							setSaveDev={setSaveDev}
							setSaved={setSaved}
							setTitleInput={setTitleInput}
							titleInput={titleInput}
						/>

						<p className="mt-5 text-center">
							All data is saved in local storage. Please backup any saved data to avoid losing data.
						</p>
					</div>
				</div>
			</TooltipProvider>

			<Script src="./static/js/index.js" />
		</>
	);
}
