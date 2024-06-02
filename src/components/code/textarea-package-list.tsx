import { TextareaPackageListProps } from "@/lib/types";
import { cn } from "@/lib/utils";

export default function TextareaPackageList({ className, packages, saveDev, id, children }: TextareaPackageListProps) {
	const code = `npm i ${!packages.length ? "..." : packages.join(" ")} ${saveDev ? "--save-dev" : ""}`;

	return (
		<textarea
			disabled
			value={code}
			className={cn("w-full resize-none rounded-sm border bg-slate-900/20 pb-10 pl-3 pt-2.5 text-white", className)}
			id={(id ??= "txtarea")}
		>
			{children}
		</textarea>
	);
}
