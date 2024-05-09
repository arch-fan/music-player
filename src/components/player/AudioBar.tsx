import { useEffect, useState } from "react";
import { usePlayer } from "./track.store";
import { Speaker } from "../Icons";

interface Props {
	className?: string;
}

export default function AudioBar({ className }: Props) {
	const audioElement = usePlayer((state) => state.audioElement);

	const [volume, setVolume] = useState(
		Number(localStorage.getItem("volume")) || 0.5,
	);

	useEffect(() => {
		if (audioElement.current) {
			localStorage.setItem("volume", volume.toString());
			audioElement.current.volume = volume;
		}
	}, [volume, audioElement.current]);

	return (
		<div
			className={` gap-2 w-full group h-[6px] relative bg-neutral-400 rounded-full ${
				className ?? ""
			}`}
		>
			<input
				className="opacity-0 absolute w-full h-full cursor-pointer z-10"
				type="range"
				min={0}
				max={100}
				width={100}
				value={volume * 100}
				onChange={(e) => setVolume(Number(e.target.value) / 100)}
			/>
			<span
				className="absolute w-full h-full bg-brand-500 rounded-full"
				style={{
					width: `${volume * 100}%`,
				}}
			/>
			<span
				className="size-3 bg-brand-500 rounded-full absolute opacity-0 group-hover:opacity-100 transition-opacity -translate-x-1/2 -top-1/2"
				style={{
					left: `${volume * 100}%`,
				}}
			/>
		</div>
	);
}
