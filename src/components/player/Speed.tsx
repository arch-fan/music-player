import { useEffect, useState, useCallback } from "react";
import { usePlayer } from "./track.store";

export default function Speed() {
	const [playbackRate, setPlaybackRate] = useState(1);
	const audioElement = usePlayer((state) => state.audioElement);
	const currentTrack = usePlayer((state) => state.currentTrack);

	const handlePlaybackRate = useCallback(() => {
		if (audioElement.current) audioElement.current.playbackRate = playbackRate;
	}, [playbackRate]);

	useEffect(handlePlaybackRate, [playbackRate, currentTrack]);

	return (
		audioElement.current && (
			<select
				value={playbackRate}
				onChange={(e) => setPlaybackRate(Number(e.target.value))}
			>
				<option value={0.5}>0.5x</option>
				<option value={1}>1x</option>
				<option value={1.5}>1.5x</option>
				<option value={2}>2x</option>
			</select>
		)
	);
}
