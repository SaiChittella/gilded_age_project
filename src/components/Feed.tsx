"use client";
import {
	MessageCircle,
	Repeat2,
	ChartNoAxesColumn,
	Bookmark,
	Share,
	BadgeCheck,
} from "lucide-react";

import commentsData from "@/app/comments.json";
import idaCommmentsData from "@/app/idaComments.json";
import sinclairCommmentsData from "@/app/sinclairComments.json";
import rockefellerCommmentsData from "@/app/rockefellerComments.json";
import homesteadCommmentsData from "@/app/homesteadComments.json";

import { useState } from "react";

interface FeedProps {
	name: string;
}

export default function Feed({ name }: FeedProps) {
	let { comments } = commentsData;

	if (name === "ida") {
		comments = idaCommmentsData.comments;
	} else if (name === "sinclair") {
		comments = sinclairCommmentsData.comments;
	} else if (name === "rockefeller") {
		comments = rockefellerCommmentsData.comments;
	} else if (name === "homestead") {
		comments = homesteadCommmentsData.comments;
	}
	return (
		<div className="p-4 space-y-4 overflow-y-scroll border border-gray-800 col-span-8">
			{comments.map((comment) => (
				<Tweet
					key={comment.id}
					name={comment.name}
					verified={comment.verified ?? false}
					handle={comment.handle ?? ""}
					comment={comment.comment}
					replies={comment.replies}
					img={comment.img}
					date={comment.date ?? ""}
					contentImg={comment.contentImg ?? ""}
				/>
			))}
		</div>
	);
}

interface Reply {
	id: number;
	name?: string;
	verified?: boolean;
	handle?: string;
	comment?: string;
	img?: string;
	date?: string;
	contentImg?: string;
}

interface TweetProps {
	name?: string;
	verified?: boolean;
	handle?: string;
	comment?: string;
	replies: Reply[];
	img?: any;
	date?: string;
	contentImg?: string;
}

const Tweet = ({
	name,
	verified,
	handle,
	comment,
	replies,
	img,
	date,
	contentImg,
}: TweetProps) => {
	const [showReplies, setShowReplies] = useState(false);

	return (
		<div className="-mx-4 border-t border-gray-700 py-4 px-4 w-[100%]">
			<div className="flex flex-row space-x-3">
				<img src={img} alt="" className="h-10 w-10" />
				<div className="flex flex-col">
					<div className="flex flex-row space-x-2">
						<p className="font-bold">{name}</p>
						{verified && (
							<BadgeCheck className="h-4 w-4 justify-center flex relative top-1 text-green-400" />
						)}
						<p className="text-gray-500">
							{handle} · {date}
						</p>
					</div>
					<div>
						<p className="text-[14px]">{comment}</p>
						{contentImg && (
							<img
								src={contentImg}
								alt=""
								className="w-full py-2"
							/>
						)}
					</div>
				</div>
			</div>
			<div className="flex flex-row space-x-10 mt-3 ml-12">
				<button
					onClick={() => setShowReplies(!showReplies)}
					className="flex flex-row space-x-1 hover:text-blue-500"
				>
					<MessageCircle className="h-4 w-4" />
					<div className="text-gray-500 text-sm">
						{replies.length}
					</div>
				</button>
				<div className="flex flex-row space-x-1">
					<Repeat2 className="h-4 w-4" />
					<div className="text-gray-500 text-sm">1.7K</div>
				</div>
				<div className="flex flex-row space-x-1">
					<ChartNoAxesColumn className="h-4 w-4" />
					<div className="text-gray-500 text-sm">1.7K</div>
				</div>

				<div className="flex flex-row space-x-1">
					<Bookmark className="h-4 w-4" />
				</div>
				<div className="flex flex-row space-x-1">
					<Share className="h-4 w-4" />
				</div>
			</div>

			{showReplies && (
				<div className="mt-4 ml-12 space-y-4">
					{replies.map((reply) => (
						<div
							key={reply.id}
							className="flex flex-row space-x-3 border-l-2 border-gray-700 pl-4"
						>
							<img src={reply.img} alt="" className="h-8 w-8" />
							<div className="flex flex-col">
								<div className="flex flex-row space-x-2">
									<p className="font-bold">{reply.name}</p>
									{reply.verified && (
										<BadgeCheck className="h-4 w-4 justify-center flex relative top-1 text-green-400" />
									)}
									<p className="text-gray-500">
										{reply.handle}
									</p>
								</div>
								<div>
									<p className="text-[13px]">
										{reply.comment}
									</p>
									{reply.contentImg && (
										<img
											src={reply.contentImg}
											alt=""
											className="w-full py-2"
										/>
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};
