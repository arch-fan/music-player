import { PreviousTitle, NextTitle, Play, Pause } from "../Icons";
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
	} = usePlayer((state) => ({
		isPlaying: state.isPlaying,
		setIsPlaying: state.setIsPlaying,
		setPreviousSong: state.setPreviousSong,
		setNextSong: state.setNextSong,
		audioElement: state.audioElement,
	}));

	return (
		audioElement.current && (
			<div
				className={`flex flex-col justify-center lg:justify-between ${
					className ?? ""
				}`}
			>
				<div className="flex lg:gap-4 justify-between">
					<button onClick={setPreviousSong} className="size-8 lg:size-6">
						<PreviousTitle />
					</button>
					<button
						className="size-8 lg:size-6"
						onClick={() => setIsPlaying(!isPlaying)}
					>
						{isPlaying ? <Pause /> : <Play />}
					</button>
					<button className="size-8 lg:size-6" onClick={setNextSong}>
						<NextTitle />
					</button>
				</div>
				<div className="lg:block hidden">
					<ProgressBar />
				</div>
			</div>
		)
	);
}
