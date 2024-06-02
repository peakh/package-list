import {
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle
} from "./alert-dialog";
import { AlertDialogProps } from "@/lib/types";
import { Button } from "./button";

export default function CompleteAlertDialogContent({ title, description, confirmAction, buttonText, children }: AlertDialogProps) {
	return (
		<>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>{(title ??= "Are you sure?")}</AlertDialogTitle>
					<AlertDialogDescription>{(description ??= "This action cannot be undone.")}</AlertDialogDescription>
				</AlertDialogHeader>

				<AlertDialogFooter>
					<AlertDialogCancel asChild>
						<Button variant="outline">{buttonText?.dialogCancelButtonText ?? "Cancel"}</Button>
					</AlertDialogCancel>

					<AlertDialogAction asChild>
						<Button variant="destructive" onClick={confirmAction}>
							{buttonText?.dialogConfirmButtonText ?? "Confirm"}
						</Button>
					</AlertDialogAction>
				</AlertDialogFooter>
				{children}
			</AlertDialogContent>
		</>
	);
}
