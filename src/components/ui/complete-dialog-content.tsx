import { ReactNode } from "react";
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./dialog";
import { MODAL_SAVE_PACKAGE_DESCRIPTION, MODAL_SAVE_PACKAGE_TITLE } from "@/constants";

type DialogProps = {
	children?: ReactNode;
};

export default function CompleteDialogContent({ children }: DialogProps) {
	return (
		<>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>{MODAL_SAVE_PACKAGE_TITLE}</DialogTitle>
					{<DialogDescription>{MODAL_SAVE_PACKAGE_DESCRIPTION}</DialogDescription>}
				</DialogHeader>
				{children && children}
			</DialogContent>
		</>
	);
}
