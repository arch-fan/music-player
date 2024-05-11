import { useEffect } from "react";
import { Speaker } from "react-icons";
import AudioBar from "./AudioBar";
import Controls from "./Controls";
import Lyrics from "./Lyrics";
import styles from "./Player.module.css";
import Speed from "./Speed";
import { usePlayer } from "./track.store";

/**
 * Componente principal encargado de manejar el elemento audio.
 * Es el segundo nucleo del reproductor y define como se ve la barra
 * inferior de reproduccion y sus funcionalidades
 */
const Player: React.FC = () => {
	const {
		currentTrack,
		audioElement,
		setIsPlaying,
		isPlaying,
		setNextSong,
		isLoop,
		setPreviousSong,
		volume,
		setVolume,
		setIsLoop,
		setIsRandom,
		isRandom,
	} = usePlayer((state) => ({
		currentTrack: state.currentTrack,
		isPlaying: state.isPlaying,
		audioElement: state.audioElement,
		setIsPlaying: state.setIsPlaying,
		setNextSong: state.setNextSong,
		isLoop: state.isLoop,
		setPreviousSong: state.setPreviousSong,
		volume: state.volume,
		setVolume: state.setVolume,
		setIsLoop: state.setIsLoop,
		setIsRandom: state.setIsRandom,
		isRandom: state.isRandom,
	}));

	/**
	 * Registra todos los eventos de pulsacion de teclas y
	 * ejecuta una funcion dependiendo de la tecla pulsada.
	 *
	 * Todos los eventos se registran en el objeto event y
	 * solo se ejecutan si hay una cancion reproduciendose.
	 */
	const keyHandler = (e: KeyboardEvent) => {
		const events: Record<string, (() => void) | undefined> = {
			" ": () => setIsPlaying(!isPlaying),
			ArrowRight: setNextSong,
			ArrowLeft: setPreviousSong,
			ArrowUp: () => setVolume(volume + 0.1),
			ArrowDown: () => setVolume(volume - 0.1),
			y: () => currentTrack && window.open(currentTrack.video, "_blank"),
			l: () => setIsLoop(!isLoop),
			s: () => setIsRandom(!isRandom),
		};

		const fn = events[e.key];

		if (fn && currentTrack) {
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

	/**
	 * Cada vez que cambie la cancion se inicia el reproductor.
	 *
	 * El motivo por el que no se cambia el estado para reproducirlo
	 * es porque el evento de onEnded pausa la cancion mas tarde que
	 * el estado al detectar el cambio de cancion, por lo que aqui
	 * el isPlaying cambiaria a true y despues a false al detectar
	 * que se ha acabado la cancion.
	 */
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
					loop={isLoop}
					onPlay={() => setIsPlaying(true)}
					onPause={() => setIsPlaying(false)}
					onEnded={setNextSong}
				/>
			</div>
		)
	);
};

export default Player;
