import type { HTMLAttributes } from "react";
import { Pause as PauseIcon, Play as PlayIcon } from "../Icons";
import { usePlayer } from "./track.store";

interface Props extends HTMLAttributes<HTMLButtonElement> {}

const Play: React.FC<Props> = ({ className, onClick, ...props }) => {
	const isPlaying = usePlayer((state) => state.isPlaying);
	const setFirstTrack = usePlayer((state) => state.setFirstTrack);
	const setIsPlaying = usePlayer((state) => state.setIsPlaying);

	const handleClick = () => {
		if (isPlaying) setIsPlaying(false);
		else {
			setFirstTrack();
			setIsPlaying(true);
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
