"use client";

import { Check, Copy, Save, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { Dialog, DialogFooter, DialogTrigger } from "../ui/dialog";
import handleSaveList from "@/util/handleSaveList";
import CompleteDialogContent from "../ui/complete-dialog-content";
import { Input } from "../ui/input";
import {
	MODAL_DELETE_CURRENT_LIST_DESCRIPTION,
	MODAL_DELETE_CURRENT_LIST_TITLE,
	MODAL_SAVE_PACKAGE_DESCRIPTION_PLACEHOLDER,
	MODAL_SAVE_PACKAGE_TITLE_PLACEHOLDER,
	MODAL_SAVE_PACKAGE_TITLE_STANDARD
} from "@/constants";
import TextareaPackageList from "./textarea-package-list";
import dateTimeFormat from "@/util/dateTimeFormat";
import { AlertDialog, AlertDialogTrigger } from "../ui/alert-dialog";
import CompleteAlertDialogContent from "../ui/complete-alert-dialog-content";
import { TerminalProps } from "@/lib/types";

/**
 * This is only a `textarea` component that contains the list of packages wrapped inside of itself.
 * There is no special syntax highlighting.
 */

export default function Terminal({
	setCodeContent,
	codeContent,
	codeWithInstall,
	saveDev,
	setSaveDev,
	copied,
	setCopied,
	saved,
	setSaved,
	titleInput,
	setTitleInput,
	descriptionInput,
	setDescriptionInput
}: TerminalProps) {
	return (
		<TooltipProvider>
			<div className="mt-5 rounded-sm border border-gray-600 p-1.5">
				<TextareaPackageList packages={codeContent} saveDev={saveDev} id="terminal" />

				<div className="border-t border-gray-700">
					{/* gap-[7.5rem] */}
					<div className="mx-3 flex items-center justify-center gap-[5.9rem] py-3">
						<Checkbox id="save-dev" onClick={() => (saveDev ? setSaveDev(false) : setSaveDev(true))} />

						<Label htmlFor="save-dev">
							<code className="text-nowrap text-[0.60rem] md:text-base">--save-dev</code>
						</Label>

						<div className="flex gap-3 border-l border-gray-600 p-3">
							<Tooltip delayDuration={300}>
								<TooltipTrigger asChild>
									{/* Copy all code including `npm i ...` */}
									<Button
										variant="secondary"
										size="sm"
										disabled={codeContent.length ? false : true}
										onClick={() => {
											navigator.clipboard.writeText(codeWithInstall).then(() => {
												setCopied(true);

												setTimeout(() => setCopied(false), 2_000);
											});
										}}
									>
										{copied ? <Check className="text-white" /> : <Copy className="animate-accordion-down text-white" />}
									</Button>
								</TooltipTrigger>

								<TooltipContent>
									<p className="select-none font-semibold">Copy the package names to paste into your terminal.</p>
								</TooltipContent>
							</Tooltip>

							<Tooltip delayDuration={300}>
								<Dialog>
									<TooltipTrigger asChild>
										{saved ? (
											<Button variant="secondary" size="sm" disabled>
												<Check className="text-white" />
											</Button>
										) : (
											<form
												id="save-list"
												onSubmit={() =>
													handleSaveList({
														title: titleInput || MODAL_SAVE_PACKAGE_TITLE_STANDARD,
														description: descriptionInput,
														packages: codeContent,
														setSaved,
														saveDev,
														savedAt: dateTimeFormat(new Date())
													})
												}
											>
												<Dialog>
													<DialogTrigger asChild>
														<Button
															variant="secondary"
															size="sm"
															type="button"
															disabled={codeContent.length ? false : true}
														>
															<Save className="text-white" />
														</Button>
													</DialogTrigger>

													<CompleteDialogContent>
														<div className="flex flex-col gap-4">
															<div className="flex flex-col gap-4">
																<Label htmlFor="title">Title</Label>

																<Input
																	id="title"
																	placeholder={MODAL_SAVE_PACKAGE_TITLE_PLACEHOLDER}
																	maxLength={100}
																	onChange={(e) => setTitleInput(e.target.value)}
																/>
															</div>

															<div className="flex flex-col gap-4">
																<Label htmlFor="description">Description</Label>

																<Input
																	id="description"
																	placeholder={MODAL_SAVE_PACKAGE_DESCRIPTION_PLACEHOLDER}
																	maxLength={256}
																	onChange={(e) => setDescriptionInput(e.target.value)}
																/>
															</div>
														</div>

														<DialogFooter>
															<DialogTrigger asChild>
																<Button variant="secondary" type="submit" form="save-list">
																	Save
																</Button>
															</DialogTrigger>
														</DialogFooter>
													</CompleteDialogContent>
												</Dialog>
											</form>
										)}
									</TooltipTrigger>

									<TooltipContent>
										<p className="select-none font-semibold">Save package names to a list for later.</p>
									</TooltipContent>
								</Dialog>
							</Tooltip>

							<Tooltip delayDuration={300}>
								<TooltipTrigger asChild>
									<AlertDialog>
										{/* Clear all items in the script. */}
										<AlertDialogTrigger asChild>
											<Button variant="secondary" size="sm" disabled={codeContent.length ? false : true}>
												<Trash2 className="text-white" />
											</Button>
										</AlertDialogTrigger>

										<CompleteAlertDialogContent
											title={MODAL_DELETE_CURRENT_LIST_TITLE}
											description={MODAL_DELETE_CURRENT_LIST_DESCRIPTION}
											buttonText={{
												dialogConfirmButtonText: "Delete"
											}}
											confirmAction={() => setCodeContent([])}
										/>
									</AlertDialog>
								</TooltipTrigger>

								<TooltipContent>
									<p className="select-none font-semibold">Clear all saved packages.</p>
								</TooltipContent>
							</Tooltip>
						</div>
					</div>
				</div>
			</div>
		</TooltipProvider>
	);
}
