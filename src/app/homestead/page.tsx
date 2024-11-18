import Sidebar from "@/components/Sidebar";
import Feed from "@/components/Feed";
import RightSidebar from "@/components/RightSidebar";

export default function Homestead() {
	return (
		<div
			className="h-screen text-white py-4 px-12 grid grid-cols-12"
			style={{ gridTemplateColumns: "repeat(16, minmax(0, 1fr))" }}
		>
			<Sidebar />
			<Feed name="homestead" />
			<RightSidebar />
		</div>
	);
}
