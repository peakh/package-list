// @ts-check

const items = localStorage.getItem("Packages");

if (!items) {
	localStorage.setItem("Packages", "[]");
}
