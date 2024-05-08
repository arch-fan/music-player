import { useEffect, useCallback } from "react";
import { usePlayer } from "./track.store";
import Controls from "./Controls";

const Player: React.FC = () => {
	const { currentTrack, audioElement, setNextSong, setIsPlaying, isPlaying } =
		usePlayer((state) => ({
			currentTrack: state.currentTrack,
			isPlaying: state.isPlaying,
			audioElement: state.audioElement,
			setNextSong: state.setNextSong,
			setIsPlaying: state.setIsPlaying,
		}));

	const handlePlay = useCallback(() => setIsPlaying(true), [setIsPlaying]);

	const handlePause = useCallback(() => setIsPlaying(false), [setIsPlaying]);

	const keyHandler = useCallback(
		(e: KeyboardEvent) => {
			e.preventDefault();
			if (e.key === " ") setIsPlaying(!isPlaying);
		},
		[setIsPlaying, isPlaying],
	);

	/**
	 * Sincroniza el estado isPlaying con el estado del audio
	 * dandole el valor del elemento
	 *
	 * (Quiza no sea necesario si se manejan todos los posibles eventos
	 * que puedan parar o reanudar la musica)
	 */
	useEffect(() => {
		if (audioElement.current) {
			const audio = audioElement.current;

			audio.addEventListener("play", handlePlay);
			audio.addEventListener("pause", handlePause);

			return () => {
				audio.removeEventListener("play", handlePlay);
				audio.removeEventListener("pause", handlePause);
			};
		}
	}, [audioElement.current, handlePlay, handlePause]);

	/**
	 * Sincroniza el estado isPlaying con el estado del audio
	 * para que al cambiar el estado se actualice con el elemento
	 */
	useEffect(() => {
		if (audioElement.current) {
			const audio = audioElement.current;
			isPlaying ? audio.play() : audio.pause();
		}
	}, [audioElement.current, isPlaying]);

	/**
	 * Encargado de cambiar de cancion cuando termina
	 */
	useEffect(() => {
		if (audioElement.current) {
			audioElement.current.addEventListener("ended", setNextSong);

			return () => {
				if (audioElement.current)
					audioElement.current.removeEventListener("ended", setNextSong);
			};
		}
	}, [audioElement.current, setNextSong]);

	/**
	 * Añadimos un listener para detectar los
	 * eventos de pulsacion y ejecutar ciertas acciones
	 */
	useEffect(() => {
		window.addEventListener("keydown", keyHandler);

		return () => window.removeEventListener("keydown", keyHandler);
	}, [keyHandler]);

	return (
		currentTrack && (
			<div className="fixed bottom-0 bg-brand bg-opacity-70 left-0 w-full h-20 p-2">
				<div className="mx-auto gap-2 flex w-fit h-full justify-center items-center">
					<img
						src={currentTrack.cover as string}
						className="w-auto h-full rounded"
						alt={currentTrack.name}
					/>
					<Controls />
				</div>
				<audio ref={audioElement} src={currentTrack.path} />
			</div>
		)
	);
};

export default Player;
