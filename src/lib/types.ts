import { Dispatch, FormEvent, MouseEventHandler, ReactNode, SetStateAction } from "react";

export type Packages = {
	title: string;
	description: string;
	packages: string[];
	saveDev: boolean;
	savedAt: string;
};

export type SaveListProps = {
	title: string;
	description: string;
	packages: string[];
	saveDev?: boolean;
	savedAt?: string;
	setSaved: Dispatch<SetStateAction<boolean>>;
};

export type AddPackageProps = {
	codeContent: string[];
	setCodeContent: (value: SetStateAction<string[]>) => void;
	setInput: (value: SetStateAction<string>) => void;
	formEvent: FormEvent<HTMLFormElement>;
};

export type TextareaPackageListProps = {
	packages: string[];
	className?: string;
	saveDev?: boolean;
	id?: string;
	children?: React.ReactNode;
};

export type DeleteListProps = {
	position: number;
	setList: Dispatch<SetStateAction<Packages[]>>;
};

export type TerminalProps = {
	codeContent: string[];
	setCodeContent: Dispatch<SetStateAction<string[]>>;
	codeWithInstall: string;
	saveDev: boolean;
	setSaveDev: Dispatch<SetStateAction<boolean>>;
	copied: boolean;
	setCopied: Dispatch<SetStateAction<boolean>>;
	saved: boolean;
	setSaved: Dispatch<SetStateAction<boolean>>;
	titleInput: string;
	setTitleInput: Dispatch<SetStateAction<string>>;
	descriptionInput: string;
	setDescriptionInput: Dispatch<SetStateAction<string>>;
};

export type AlertDialogProps = {
	title: string;
	description: string;
	buttonText?: {
		dialogCancelButtonText?: string;
		dialogConfirmButtonText?: string;
	};
	confirmAction: MouseEventHandler<HTMLButtonElement>;
	children?: ReactNode;
};

export type InstallTextProps = {
	/**
	 * Whether or not to add ellipsis as a placeholder of packages if the `packages` array length is 0.
	 */
	addEllipsis?: boolean;
};
