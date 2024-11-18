import Link from "next/link";
import {
	House,
	Search,
	Mail,
	SquareSlash,
	Bookmark,
	UsersRound,
	UserRoundPen,
	CircleEllipsis,
} from "lucide-react";

export default function Sidebar() {
	return (
		<div className="p-4 bg-black flex flex-col space-y-6 col-span-4 h-screen justify-between">
			<div className="w-1/3">
				<img
					src="/twitter_logo.webp"
					className="h-10 w-10"
					alt="Twitter Logo"
				/>
			</div>

			<nav className="space-y-10">
				<Link href="/">
					<div className="flex items-center space-x-3 hover:bg-zinc-800 hover:cursor-pointer rounded w-1/3">
						<House />
						<span className="font-bold text-xl">Home</span>
					</div>
				</Link>
				<div className="flex items-center space-x-3 hover:bg-zinc-800 hover:cursor-pointer rounded w-1/3">
					<Search />
					<span className="font-bold text-xl">Explore</span>
				</div>
				<div className="flex items-center space-x-3">
					<Mail />
					<span className="font-bold text-xl">Messages</span>
				</div>
				<div className="flex items-center space-x-3 hover:bg-zinc-800 hover:cursor-pointer rounded w-1/3">
					<SquareSlash />
					<span className="font-bold text-xl">Grok</span>
				</div>
				<div className="flex items-center space-x-3">
					<Bookmark />
					<span className="font-bold text-xl">Bookmarks</span>
				</div>
				<div className="flex items-center space-x-3">
					<UsersRound />
					<span className="font-bold text-xl">Communities</span>
				</div>
				<div className="flex items-center space-x-3">
					<UserRoundPen />
					<span className="font-bold text-xl">Profile</span>
				</div>
				<div className="flex items-center space-x-3">
					<CircleEllipsis />
					<span className="font-bold text-xl">More</span>
				</div>
			</nav>

			<button className="bg-blue-500 px-4 py-2 rounded-2xl w-3/4 ">
				Post
			</button>

			<div className="flex items-center justify-between w-full p-2 hover:bg-zinc-800 rounded cursor-pointer">
				<div className="flex items-center">
					<img
						src="https://c8.alamy.com/comp/PRRD2P/john-d-rockefeller-1839-1937-american-industrialist-about-1885-PRRD2P.jpg"
						alt="User Profile"
						className="h-10 w-10 rounded-full"
					/>
					<div className="ml-3">
						<p className="font-bold text-white">
							John D. Rockefeller
						</p>
						<p className="text-gray-500 text-sm">
							@thegreatestbusinessman
						</p>
					</div>
				</div>
				<CircleEllipsis className="text-gray-500" />
			</div>
		</div>
	);
}
