import { PlusCircle, Undo } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import handleAddPackage from "@/util/handleAddPackage";
import { Dispatch, SetStateAction } from "react";

export default function ItemForm({
	codeContent,
	setCodeContent,
	setInput,
	input
}: {
	codeContent: string[];
	setCodeContent: Dispatch<SetStateAction<string[]>>;
	setInput: Dispatch<SetStateAction<string>>;
	input: string;
}) {
	return (
		<div className="flex items-center justify-center rounded-sm border-b border-l border-r border-t border-gray-600 px-4 py-5">
			<div className="flex gap-4">
				<form
					className="flex gap-4"
					onSubmit={(v) =>
						handleAddPackage({
							codeContent,
							formEvent: v,
							setCodeContent,
							setInput
						})
					}
				>
					<Input
						className="mt-2 h-10 select-none"
						placeholder="Add an item..."
						spellCheck={false}
						size={24}
						id="input"
						value={input}
						maxLength={214}
						autoFocus
						onChange={(e) => {
							setInput(e.target.value);
						}}
					/>
					{/* Submit the name provided in the input box. */}
					<Button className="mt-3" variant="secondary" type="submit" size="sm" disabled={input.length ? false : true}>
						<PlusCircle />
					</Button>
				</form>

				<div className="flex gap-3 border-l border-gray-600 p-3 pr-3">
					<Tooltip delayDuration={300}>
						<TooltipTrigger asChild>
							<Button
								variant="secondary"
								size="sm"
								onClick={() => {
									const remaining = codeContent.slice(0, -1);

									setCodeContent(remaining);
								}}
								disabled={codeContent.length ? false : true}
							>
								<Undo className="text-white" />
							</Button>
						</TooltipTrigger>

						<TooltipContent>
							<p className="select-none font-semibold">Undo</p>
						</TooltipContent>
					</Tooltip>
				</div>
			</div>
		</div>
	);
}
