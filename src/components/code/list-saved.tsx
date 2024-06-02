"use client";

import { Packages } from "@/lib/types";
import { Check, Copy, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import TextareaPackageList from "./textarea-package-list";
import generateInstallationText from "@/util/generateInstallationText";
import { AlertDialog, AlertDialogTrigger } from "../ui/alert-dialog";
import CompleteAlertDialogContent from "../ui/complete-alert-dialog-content";
import { MODAL_DELETE_SAVED_LIST_DESCRIPTION, MODAL_DELETE_SAVED_LIST_TITLE } from "@/constants";
import handleDeleteList from "@/util/handleDeleteList";
import { cn } from "@/lib/utils";

export default function ListSaved() {
	const [loading, setLoading] = useState<boolean>(true);

	const [list, setList] = useState<Packages[]>([]);

	const [copied, setCopied] = useState<boolean>(false);

	const [savedId, setSavedId] = useState<string>("");

	useEffect(() => {
		const packages = localStorage.getItem("Packages");

		if (!packages) {
			setLoading(false);

			return setList([]);
		}

		const all = JSON.parse(packages) as Packages[];

		setList(all);

		setLoading(false);
	}, []);

	if (loading) {
		return <span className="text-center">Loading...</span>;
	}

	const copyPackages = async (text: string[], dev: boolean) => {
		return await navigator.clipboard.writeText(generateInstallationText(text, dev));
	};

	return (
		<>
			{!list.length && <span className="text-center">No items saved.</span>}

			{list &&
				list.map((pkg, i) => (
					<div className="rounded-md border border-gray-200 p-5" key={i}>
						<div className="flex flex-col space-y-3" key={pkg.title}>
							<div className="flex justify-between">
								<h2 className="mr-3 text-xl font-semibold text-white">{pkg.title}</h2>

								{copied && savedId === pkg.title ? (
									<Check className="text-white" id={pkg.title} />
								) : (
									<Copy
										className={cn(
											"text-white opacity-20 transition-opacity duration-300 hover:cursor-pointer hover:opacity-80",
											!list.length ? "hidden" : ""
										)}
										onClick={() => {
											const specificList = list.filter((t) => t.title === pkg.title);

											// This is somehow an empty string when copying.

											const packages = specificList.flatMap((p) => p.packages);

											copyPackages(packages, pkg.saveDev).then(() => {
												setCopied(true);

												setSavedId(pkg.title);

												setTimeout(() => {
													setCopied(false);

													setSavedId("");
												}, 2_000);
											});
										}}
									/>
								)}
							</div>

							<p className="text-sm">{pkg.description}</p>

							<TextareaPackageList
								className="border-zinc-700 pb-20 lg:pb-10"
								id={i.toString()}
								packages={pkg.packages}
								saveDev={pkg.saveDev}
							/>

							<div className="flex justify-between">
								<span className="mt-2 text-sm text-zinc-400/60">{pkg.savedAt}</span>

								<div className="mt-2 flex gap-5">
									<AlertDialog>
										<AlertDialogTrigger asChild>
											<Trash2 className="opacity-20 duration-300 hover:cursor-pointer hover:text-red-600 hover:opacity-80" />
										</AlertDialogTrigger>

										<CompleteAlertDialogContent
											title={MODAL_DELETE_SAVED_LIST_TITLE}
											description={MODAL_DELETE_SAVED_LIST_DESCRIPTION}
											buttonText={{
												dialogConfirmButtonText: "Delete"
											}}
											confirmAction={() =>
												handleDeleteList({
													position: i,
													setList
												})
											}
										/>
									</AlertDialog>
								</div>
							</div>
						</div>
					</div>
				))}
		</>
	);
}
