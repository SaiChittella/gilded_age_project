import { BadgeCheck } from "lucide-react";
import Link from "next/link";

export default function RightSidebar() {
	return (
		<div className="p-4 space-y-6 col-span-4">
			<div className="border rounded-xl border-gray-700 p-4 bg-black">
				<h2 className="font-bold text-lg text-white mb-4">
					What's happening
				</h2>
				<Trending />
			</div>

			<div className="border rounded-xl border-gray-700 p-4 bg-black">
				<div className="flex flex-col -space-y-3 mb-3">
					<h2 className="font-bold text-lg text-white mb-4">
						Who to follow
					</h2>
					<p className="text-sm text-gray-400">
						Based on your recent activity
					</p>
				</div>

				<FollowSuggestions />
			</div>
		</div>
	);
}

const FollowSuggestions = () => {
	const suggestions = [
		{
			image: "data:image/jpeg;base64,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",
			name: "Ida B. Wells",
			handle: "@feminist",
			verified: false,
			follow: false,
		},
		{
			image: "data:image/jpeg;base64,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",
			name: "Upton Sinclair",
			handle: "@bestsellingauthor",
			verified: false,
			follow: false,
		},
		{
			image: "https://library.brown.edu/cds/portraits/images/large_bp135.jpg",
			name: "Andrew Carnegie",
			handle: "@ragstoriches",
			verified: true,
			follow: true,
		},
		{
			image: "data:image/jpeg;base64,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",
			name: "JP Morgan",
			handle: "@banker",
			verified: true,
			follow: true,
		},
	];

	return (
		<div className="space-y-4">
			{suggestions.map((user, index) => (
				<div
					key={index}
					className="flex items-center justify-between text-white"
				>
					<div className="flex items-center">
						<img
							src={user.image}
							alt={user.name}
							className="w-10 h-10 rounded-full"
						/>
						<div className="ml-3">
							<p className="font-bold flex items-center text-sm">
								{user.name}
							</p>
							<p className="text-gray-500 text-sm">
								{user.handle}
							</p>
						</div>
					</div>

					{user.follow && (
						<button className="text-xs font-bold text-black bg-blue-600 px-3 py-1 rounded-full">
							Following
						</button>
					)}
					{!user.follow && (
						<button className="text-xs font-bold text-black bg-white px-3 py-1 rounded-full">
							Follow
						</button>
					)}
				</div>
			))}

			<div className="mt-4 text-blue-500 text-sm cursor-pointer hover:underline">
				Show more
			</div>
		</div>
	);
};

const Trending = () => {
	const trends = [
		{
			category: "Exposing · Trending",
			title: "Ida Tarbell's new Book exposes Standard Oil",
			posts: "50K posts",
			link: "/ida",
		},
		{
			category: "Muckrakers · Trending",
			title: "Sinclair's 'The Jungle' is a massive hit",
			posts: "2,704 posts",
			link: "/sinclair",
		},
		{
			category: "Industrialists · Trending",
			title: "Rockefeller hits billion dollars in net worth",
			posts: "",
			link: "/rockefeller",
		},
		{
			category: "Strikes · Trending",
			title: "Homestead Strike against Carnegie",
			posts: "10K posts",
			link: "/homestead",
		},
	];

	return (
		<div className="space-y-4">
			{trends.map((trend, index) => (
				<Link href={trend.link} target="__blank">
					<div
						key={index}
						className="flex justify-between items-center text-white hover:bg-zinc-900 p-2 rounded-lg cursor-pointer"
					>
						<div>
							<p className="text-gray-500 text-sm">
								{trend.category}
							</p>
							<p className="font-bold">{trend.title}</p>
							{trend.posts && (
								<p className="text-gray-500 text-sm">
									{trend.posts}
								</p>
							)}
						</div>
						<div className="text-gray-500">
							<span className="text-xl font-bold">⋮</span>
						</div>
					</div>
				</Link>
			))}
		</div>
	);
};