export default function dateTimeFormat(date: Date) {
	return Intl.DateTimeFormat("en-US", {
		dateStyle: "long",
		timeStyle: "short",
		timeZone: "America/New_York"
	}).format(date);
}
