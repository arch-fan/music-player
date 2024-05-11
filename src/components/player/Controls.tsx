import {
	NextTitle,
	Pause,
	Play,
	PreviousTitle,
	Random,
	Repeat,
} from "react-icons";
import ProgressBar from "./ProgressBar";
import { usePlayer } from "./track.store";

/**
 * Componente encargado de manejar todos los controles del reproductor,
 * tanto para avanzar cancion como para retroceder, shuffle, etc...
 * (No incluye la barra de progreso)
 */
export default function Controls({ className }: { className?: string }) {
	const {
		isPlaying,
		setIsPlaying,
		audioElement,
		setIsRandom,
		isRandom,
		setIsLoop,
		isLoop,
		setNextSong,
		setPreviousSong,
	} = usePlayer((state) => ({
		isPlaying: state.isPlaying,
		setIsPlaying: state.setIsPlaying,
		audioElement: state.audioElement,
		setIsRandom: state.setIsRandom,
		isRandom: state.isRandom,
		setIsLoop: state.setIsLoop,
		isLoop: state.isLoop,
		setNextSong: state.setNextSong,
		setPreviousSong: state.setPreviousSong,
	}));

	return (
		audioElement.current && (
			<div
				className={`flex flex-col justify-center lg:justify-between ${
					className ?? ""
				}`}
			>
				<div className="flex gap-2 lg:gap-6 justify-center">
					<button onClick={() => setIsRandom(!isRandom)}>
						<Random
							className={`size-5 transition-all ${
								isRandom ? "text-brand-400" : ""
							}`}
						/>
					</button>
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
