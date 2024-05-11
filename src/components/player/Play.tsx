import type { HTMLAttributes } from "react";
import { Pause as PauseIcon, Play as PlayIcon } from "react-icons";
import { usePlayer } from "./track.store";

interface Props extends HTMLAttributes<HTMLButtonElement> {}

/**
 * Boton de play grande para la estacion. Si se pulsa sin que haya
 * canciones se va a reproducir la primera, y tambien puedes parar la reproduccion
 */
const Play: React.FC<Props> = ({ className, onClick, ...props }) => {
	const isPlaying = usePlayer((state) => state.isPlaying);
	const setFirstTrack = usePlayer((state) => state.setFirstTrack);
	const setIsPlaying = usePlayer((state) => state.setIsPlaying);
	const currentTrack = usePlayer((state) => state.currentTrack);

	/**
	 * Si esta sonando, pausamos la cancion simplemente. Si no hay cancion
	 * se va a reproducir la primera de la playlist.
	 */
	const handleClick = () => {
		if (!currentTrack) {
			setFirstTrack();
			setIsPlaying(true);
		} else {
			setIsPlaying(!isPlaying);
		}
	};

	return (
		<button
			onClick={handleClick}
			className={`p-1 rounded-full bg-brand-400 ${className ? className : ""}`}
			{...props}
		>
			{isPlaying ? (
				<PauseIcon className="h-full w-auto text-white" />
			) : (
				<PlayIcon className="h-full w-auto text-white" />
			)}
		</button>
	);
};

export default Play;
