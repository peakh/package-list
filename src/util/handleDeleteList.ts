import { LOCAL_STORAGE_PACKAGE_KEY } from "@/constants";
import { DeleteListProps, Packages } from "@/lib/types";

export default function handleDeleteList({ position, setList }: DeleteListProps) {
	const items = localStorage.getItem(LOCAL_STORAGE_PACKAGE_KEY);

	if (!items) {
		return null;
	}

	const packageItems = JSON.parse(items) as Packages[];

	const remainingItems = packageItems.toSpliced(position, 1);

	localStorage.setItem(LOCAL_STORAGE_PACKAGE_KEY, JSON.stringify([...remainingItems] as Packages[]));

	return setList(remainingItems);
}
