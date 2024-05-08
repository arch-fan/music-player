import { useEffect, useState } from "react";
import { usePlayer } from "./track.store";

export default function AudioBar() {
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
		<input
			type="range"
			min={0}
			max={100}
			width={100}
			value={volume * 100}
			onChange={(e) => setVolume(Number(e.target.value) / 100)}
		/>
	);
}
