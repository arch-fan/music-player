import { useEffect } from "react";
import { usePlayer } from "./track.store";
import Controls from "./Controls";
import styles from "./Player.module.css";
import AudioBar from "./AudioBar";
import Speed from "./Speed";
import Lyrics from "./Lyrics";
import { Speaker } from "../Icons";

const Player: React.FC = () => {
	const { currentTrack, audioElement, setNextSong, setIsPlaying, isPlaying } =
		usePlayer((state) => ({
			currentTrack: state.currentTrack,
			isPlaying: state.isPlaying,
			audioElement: state.audioElement,
			setNextSong: state.setNextSong,
			setIsPlaying: state.setIsPlaying,
		}));

	const keyHandler = (e: KeyboardEvent) => {
		const events: Record<string, (() => void) | undefined> = {
			" ": () => setIsPlaying(!isPlaying),
		};

		const fn = events[e.key];

		if (fn) {
			e.preventDefault();
			fn();
		}
	};

	/**
	 * Añadimos un listener para detectar los
	 * eventos de pulsacion y ejecutar ciertas acciones
	 */
	useEffect(() => {
		window.addEventListener("keydown", keyHandler);

		return () => window.removeEventListener("keydown", keyHandler);
	}, [keyHandler]);

	/**
	 * Sincroniza el estado isPlaying con el estado del audio
	 * para que al cambiar el estado se actualice con el elemento
	 */
	useEffect(() => {
		const audio = audioElement.current;
		isPlaying ? audio?.play() : audio?.pause();
	}, [isPlaying]);

	useEffect(() => {
		audioElement.current?.play();
	}, [currentTrack]);

	return (
		currentTrack && (
			<div
				className={`sticky bottom-0 shadow-2xl shadow-black bg-white left-0 w-full h-20 p-2 ${styles.player}`}
			>
				<div className="mx-auto flex lg:grid lg:grid-cols-[1fr_3fr_1fr] lg:gap-8 grid-rows-[100%] w-full max-w-6xl h-full">
					<div className="flex flex-1 h-full gap-2">
						<img
							src={currentTrack.cover}
							className="h-full aspect-square rounded"
							alt={currentTrack.name}
						/>
						<div className="flex flex-col leading-3">
							<h3 className="font-bold text-lg">{currentTrack.name}</h3>
							<p className="italic">NewJeans</p>
						</div>
					</div>
					<Controls />
					<div className="hidden lg:flex flex-col items-center justify-between">
						<div className="flex gap-4	 w-full items-center">
							<Speaker className="size-6" />
							<AudioBar className="w-full" />
						</div>
						<div className="grid grid-flow-col gap-2 w-full">
							<Lyrics track={currentTrack} />
							<Speed className="border border-neutral-500 rounded h-full" />
						</div>
					</div>
				</div>
				<audio
					ref={audioElement}
					src={currentTrack.path}
					onPlay={() => setIsPlaying(true)}
					onPause={() => setIsPlaying(false)}
					onEnded={setNextSong}
				/>
			</div>
		)
	);
};

export default Player;
