import { BASE_REGEX, CONSECUTIVE_HYPHEN_REGEX, EXTENDED_BASE_REGEX } from "@/constants";
import { AddPackageProps } from "@/lib/types";

export default function handleAddPackage({ codeContent, formEvent, setCodeContent, setInput }: AddPackageProps): null | void {
	let packageName = (<HTMLInputElement>document.getElementById("input")).value.toLowerCase().trim();

	// If the list already includes an item contained.

	if (codeContent.includes(packageName)) {
		formEvent.preventDefault();

		setInput("");

		return null;
	}

	if (packageName.includes(" ")) {
		formEvent.preventDefault();

		packageName = packageName.replaceAll(" ", "-");
	}

	// If the package name includes prohibited characters
	// not present in a package name.

	packageName = packageName.replaceAll(BASE_REGEX, "");

	// These two regular expressions ensure that there are no additional spaces.
	// Due to this, the name will not result in replacing consecutive spaces such as leading to "ms--moment----moment-timezone."
	// Along with the base regular expression, these ensure that the submitted query will always match the NPM package name pattern.

	packageName = packageName.replaceAll(EXTENDED_BASE_REGEX, "-");

	packageName = packageName.replaceAll(CONSECUTIVE_HYPHEN_REGEX, "-");

	if (!packageName || !packageName.length) {
		formEvent.preventDefault();

		setInput("");

		return null;
	}

	// Another check after all other checks.

	if (codeContent.includes(packageName)) {
		formEvent.preventDefault();

		setInput("");

		return null;
	}

	formEvent.preventDefault();

	setCodeContent([...codeContent, packageName]);

	return setInput("");
}
