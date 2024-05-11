import type { Track } from "@/data/playlist";
import { useEffect, useState } from "react";
import { Music } from "react-icons";
import Modal from "../Modal";

interface Props {
	className?: string;
	track: Track;
}

/**
 * Componente encargado de mostrar la letra de la cancion.
 * Abre la letra a través de una modal que ocupa toda la pantalla.
 */
const Lyrics: React.FC<Props> = ({ className, track }) => {
	const [lyrics, setLyrics] = useState<Record<string, string | undefined>>({});
	const [show, setShow] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	/**
	 * Para conseguir la letra de la cancion, en vez de guardarlas
	 * en local, usamos una api publica que nos permite sacar la letra
	 * a traves del nombre del artista y el nombre de la cancion.
	 *
	 * El estado que guarda los lyrics es un objeto con clave nombre de
	 * la cancion y valor los lyrics, para evitar cargarlo innecesariamente
	 */
	const fetchLyrics = async () => {
		setIsLoading(true);

		const response = await fetch(
			`https://api.lyrics.ovh/v1/NewJeans/${track.name}`,
		);

		if (response.ok) {
			const data = await response.json();
			setLyrics({ ...lyrics, [track.name]: data.lyrics });
		} else {
			setLyrics({ ...lyrics, [track.name]: undefined });
		}
		setIsLoading(false);
	};

	/**
	 * Si los lyrics se estan mostrando, ocultamos el scroll
	 * en el body.
	 */
	useEffect(() => {
		document.body.style.overflow = show ? "hidden" : "auto";
	}, [show]);

	/**
	 * Para evitar peticiones innecesarias, si el nombre de la cancion
	 * ya esta como clave en el estado, no hacemos la peticion.
	 */
	useEffect(() => {
		if (!(track.name in lyrics)) {
			fetchLyrics();
		}
	}, [track]);

	return (
		<button
			onClick={() => setShow(true)}
			disabled={!lyrics?.[track.name] && !isLoading}
			className={`flex gap-1 justify-center items-center border border-neutral-500 rounded disabled:opacity-50 ${
				className ?? ""
			}`}
		>
			<Music />
			<span>Lyrics</span>
			<Modal
				openModal={show}
				closeModal={() => setShow(false)}
				className="m-0 p-12 h-screen w-screen backdrop-blur max-w-none max-h-none bg-black/50"
			>
				<p className="whitespace-pre text-5xl font-bold text-white text-start">
					{lyrics?.[track.name] && lyrics?.[track.name]}
				</p>
			</Modal>
		</button>
	);
};

export default Lyrics;
