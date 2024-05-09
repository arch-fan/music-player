import {
	PreviousTitle,
	NextTitle,
	Play,
	Pause,
	Repeat,
	Random,
} from "../Icons";
import AudioBar from "./AudioBar";
import { usePlayer } from "./track.store";
import ProgressBar from "./ProgressBar";
import Speed from "./Speed";

export default function Controls({ className }: { className?: string }) {
	const {
		isPlaying,
		setIsPlaying,
		setPreviousSong,
		audioElement,
		setNextSong,
		isLoop,
		setIsLoop,
		isRandom,
		setIsRandom,
		setTrack,
		playlist,
	} = usePlayer((state) => ({
		isPlaying: state.isPlaying,
		setIsPlaying: state.setIsPlaying,
		setPreviousSong: state.setPreviousSong,
		setNextSong: state.setNextSong,
		audioElement: state.audioElement,
		isLoop: state.isLoop,
		setIsLoop: state.setIsLoop,
		isRandom: state.isRandom,
		setIsRandom: state.setIsRandom,
		setTrack: state.setTrack,
		playlist: state.playlist,
	}));

	const handleChange = (to: "previous" | "next") => {
		if (audioElement.current) {
			if (isLoop) {
				audioElement.current.currentTime = 0;
			} else if (isRandom) {
				setTrack(playlist[Math.floor(Math.random() * playlist.length)]);
			} else if (to === "previous") {
				setPreviousSong();
			} else if (to === "next") {
				setNextSong();
			}
		}
	};

	return (
		audioElement.current && (
			<div
				className={`flex flex-col justify-center lg:justify-between ${
					className ?? ""
				}`}
			>
				<div className="flex lg:gap-6 justify-center">
					<button onClick={() => setIsRandom(!isRandom)}>
						<Random
							className={`size-5 transition-all ${
								isRandom ? "text-brand-400" : ""
							}`}
						/>
					</button>
					<button
						onClick={() => handleChange("previous")}
						className="size-8 lg:size-6"
					>
						<PreviousTitle />
					</button>
					<button
						className="size-8 lg:size-6"
						onClick={() => setIsPlaying(!isPlaying)}
					>
						{isPlaying ? <Pause /> : <Play />}
					</button>
					<button
						className="size-8 lg:size-6"
						onClick={() => handleChange("next")}
					>
						<NextTitle />
					</button>
					<button onClick={() => setIsLoop(!isLoop)}>
						<Repeat
							className={`size-6 transition-all ${
								isLoop ? "text-brand-400" : ""
							}`}
						/>
					</button>
				</div>
				<div className="lg:block hidden">
					<ProgressBar />
				</div>
			</div>
		)
	);
}
