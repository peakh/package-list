import { LOCAL_STORAGE_PACKAGE_KEY } from "@/constants";
import { Packages, SaveListProps } from "@/lib/types";

export default function handleSaveList({ description, packages, title, savedAt, saveDev, setSaved }: SaveListProps): NodeJS.Timeout | null {
	const items = localStorage.getItem(LOCAL_STORAGE_PACKAGE_KEY);

	if (!items) {
		return null;
	}

	const packageItems = JSON.parse(items) as Packages[];

	localStorage.setItem(
		LOCAL_STORAGE_PACKAGE_KEY,
		JSON.stringify([
			...packageItems,
			{
				title,
				description,
				packages,
				saveDev: saveDev ?? false,
				savedAt
			}
		] as Packages[])
	);

	setSaved(true);

	// ...

	return setTimeout(() => setSaved(false), 2_000);
}
