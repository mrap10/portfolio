"use client";

import ActivityCalendar from "react-activity-calendar";
import { useEffect, useState } from "react";

interface ContributionDay {
    date: string;
    count: number;
    level: 0 | 1 | 2 | 3 | 4;
}

export default function GithubStats() {
	const [data, setData] = useState<ContributionDay[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch("/api/githubStats");
				const json = await res.json();

				if (!res.ok) throw new Error(json.error || "Failed to fetch data");
				setData(json);
			} catch (err) {
				setError(err instanceof Error ? err.message : "Failed to load contributions");
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, []);

	if (loading)
		return <div className="text-gray-400 animate-pulse py-8 text-center">Loading contributions...</div>;

	if (error)
		return <div className="text-red-400 text-center py-8">Error: {error}</div>;

	return (
		<div id="github-stats" className="pt-10 px-4 bg-black text-white max-w-6xl mx-auto">
			<div className="flex flex-col items-center justify-center gap-5">
				<h1 className="font-bold text-3xl text-gray-200">Github Contributions</h1>
				<div className="border border-neutral-700 rounded-lg p-6 bg-neutral-900/50 backdrop-blur-sm">
					{data.length > 0 && <ActivityCalendar
						data={data}
						theme={{
							light: ["#ebedf0", "#c6e48b", "#7bc96f", "#239a3b", "#196127"],
							dark: ["#374151", "#10b981", "#059669", "#047857", "#065f46"],
						}}
						labels={{
							legend: { less: "Less", more: "More" },
							totalCount: "{{count}} contributions since July",
						}}
						showWeekdayLabels
						blockSize={12}
						fontSize={14}
						colorScheme="dark"
					/>}
				</div>
			</div>
		</div>
	);
}
