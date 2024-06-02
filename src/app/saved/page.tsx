import ListSaved from "@/components/code/list-saved";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Saved | Package List",
	description: "View your collection of saved packages to quickly copy and paste."
};

export default async function Page() {
	return (
		<>
			<main className="mb-10 mt-20">
				<div className="flex flex-col items-center justify-center space-y-3">
					<div className="flex justify-between gap-16 md:gap-32 lg:gap-96">
						<h3 className="text-xl font-semibold">Saved Packages</h3>

						<Link href="/">
							<Button variant="outline">
								<div className="flex space-x-3">
									<Upload />
									<span>Create New List</span>
								</div>
							</Button>
						</Link>
					</div>

					<div className="container mx-auto grid max-w-6xl gap-20 p-8 md:gap-12 lg:w-full lg:grid-cols-2">
						<ListSaved />
					</div>
				</div>
			</main>
		</>
	);
}
