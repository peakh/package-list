export const BASE_REGEX = /[^a-z0-9-/@]/g;
/**
 * This regular expression checks for any additional whitespaces.
 */
export const EXTENDED_BASE_REGEX = /\s+/g;
/**
 * If there is more than one hyphen.
 */
export const CONSECUTIVE_HYPHEN_REGEX = /-{2,}/g;
export const LOCAL_STORAGE_PACKAGE_KEY = "Packages";
export const MODAL_SAVE_PACKAGE_TITLE = "Save Package List";
export const MODAL_SAVE_PACKAGE_DESCRIPTION = "Save your list of packages.";
export const MODAL_SAVE_PACKAGE_TITLE_PLACEHOLDER = "Website Essentials";
export const MODAL_SAVE_PACKAGE_DESCRIPTION_PLACEHOLDER = "All the essential packages to create the perfect website in Vue.";
export const MODAL_DELETE_CURRENT_LIST_TITLE = "Delete List?";
export const MODAL_DELETE_CURRENT_LIST_DESCRIPTION =
	"This will remove all packages you have added up until this point. Any list saved, or a list including the added packages, will not be affected.";
export const MODAL_DELETE_SAVED_LIST_TITLE = "Delete Package List?";
export const MODAL_DELETE_SAVED_LIST_DESCRIPTION =
	"This will permanently delete all the names saved within this list. Existing saved lists containing these package names will not be affected. This cannot be undone.";
export const MODAL_SAVE_PACKAGE_TITLE_STANDARD = "Package List";
export const NAVBAR_GITHUB_REPOSITORY_LINK = "https://github.com/peakh/package-list";
