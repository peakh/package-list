import { InstallTextProps } from "@/lib/types";

// Could probably use a better name.

export default function generateInstallationText(packages: string[], saveDev: boolean, props?: InstallTextProps) {
	return `npm i ${props && props.addEllipsis ? `${!packages.length ? "..." : packages.join(" ")}` : `${!packages.length ? "..." : packages.join(" ")}`}${saveDev ? " --save-dev" : ""}`;
}
