import { useEffect, useState } from "react";
import { usePlayer } from "./track.store";
import { formatTime } from "@/utils/time";
import { Loading } from "../Icons";

export default function ProgressBar({ className }: { className?: string }) {
	const audioElement = usePlayer((state) => state.audioElement);

	const [currentTime, setCurrentTime] = useState(0);

	useEffect(() => {
		const updateTime = () => {
			if (audioElement.current)
				setCurrentTime(audioElement.current.currentTime);
		};

		if (audioElement.current)
			audioElement.current.addEventListener("timeupdate", updateTime);

		return () => {
			if (audioElement.current)
				audioElement.current.removeEventListener("timeupdate", updateTime);
		};
	}, [audioElement]);

	return (
		audioElement.current && (
			<div className={`flex gap-1 items-center ${className ?? ""}`}>
				<span>{formatTime(currentTime)}</span>
				<div className="w-full group h-[6px] relative bg-neutral-400 rounded-full">
					<input
						type="range"
						className="opacity-0 absolute w-full h-full cursor-pointer z-10"
						min={0}
						max={
							Number.isNaN(audioElement.current.duration)
								? 0
								: audioElement.current.duration
						}
						value={currentTime}
						onChange={(e) => {
							if (audioElement.current)
								audioElement.current.currentTime = Number(e.target.value);
						}}
					/>
					<span
						className="absolute w-full h-full bg-brand-500 rounded-full"
						style={{
							width: `${(currentTime / audioElement.current.duration) * 100}%`,
						}}
					/>
					<span
						className="size-3 bg-brand-500 rounded-full absolute opacity-0 group-hover:opacity-100 transition-opacity -translate-x-1/2 -top-1/2"
						style={{
							left: `${(currentTime / audioElement.current.duration) * 100}%`,
						}}
					/>
				</div>
				<span>
					{!Number.isNaN(audioElement.current.duration)
						? formatTime(audioElement.current.duration)
						: "0:00"}
				</span>
			</div>
		)
	);
}
