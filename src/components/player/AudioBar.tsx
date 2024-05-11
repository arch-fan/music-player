import { useEffect, useState } from "react";
import { usePlayer } from "./track.store";

interface Props {
	className?: string;
}

/**
 * Componente de la barra de audio, encargado de subir y bajar el volumen
 */
export default function AudioBar({ className }: Props) {
	const audioElement = usePlayer((state) => state.audioElement);
	const volume = usePlayer((state) => state.volume);
	const setVolume = usePlayer((state) => state.setVolume);

	/**
	 * Para guardar el volumen entre recargas de la pagina
	 * lo guardamos en el localStorage, y si detecta
	 * que no hay ninguno, lo inicializamos a 0.5 en el estado global
	 */
	useEffect(() => {
		const volumeItem = localStorage.getItem("volume");
		setVolume(volumeItem ? Number(volumeItem) : volume);
	}, []);

	/**
	 * Este efecto se encarga de sincronizar nuestro estado con el volumen
	 * del elemento del audio y guardar el volumen actual en el localStorage
	 */
	useEffect(() => {
		if (audioElement.current) {
			localStorage.setItem("volume", volume.toString());
			audioElement.current.volume = volume;
		}
	}, [volume, audioElement.current]);

	return (
		<div
			className={` gap-2 w-full group h-[6px] relative bg-neutral-400 rounded-full ${
				className ?? ""
			}`}
		>
			<input
				className="opacity-0 absolute w-full h-full cursor-pointer z-10"
				type="range"
				min={0}
				max={100}
				width={100}
				value={volume * 100}
				onChange={(e) => setVolume(Number(e.target.value) / 100)}
			/>
			<span
				className="absolute w-full h-full bg-brand-500 rounded-full"
				style={{
					width: `${volume * 100}%`,
				}}
			/>
			<span
				className="size-3 bg-brand-500 rounded-full absolute opacity-0 group-hover:opacity-100 transition-opacity -translate-x-1/2 -top-1/2"
				style={{
					left: `${volume * 100}%`,
				}}
			/>
		</div>
	);
}
