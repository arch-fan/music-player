import { useEffect, useState } from "react";
import { usePlayer } from "./track.store";

/**
 * Componente para cambiar la velocidad de reproduccion
 */
export default function Speed({ className }: { className?: string }) {
	const audioElement = usePlayer((state) => state.audioElement);
	const currentTrack = usePlayer((state) => state.currentTrack);

	/**
	 * Estado para guardar la velocidad de reproduccion
	 */
	const [playbackRate, setPlaybackRate] = useState(1);

	/**
	 * Cada vez que cambie el estado de playbackRate o cambie la cancion,
	 * cambiamos la velocidad de reproduccion del elemento de audio
	 */
	useEffect(() => {
		if (audioElement.current) audioElement.current.playbackRate = playbackRate;
	}, [playbackRate, currentTrack]);

	return (
		audioElement.current && (
			<select
				className={className}
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
