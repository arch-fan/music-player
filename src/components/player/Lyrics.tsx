import type { Track } from "@/data/playlist";
import { useEffect, useState } from "react";
import { Music } from "react-icons";
import Modal from "../Modal";

interface Props {
	className?: string;
	track: Track;
}

const Lyrics: React.FC<Props> = ({ className, track }) => {
	const [lyrics, setLyrics] = useState<Record<string, string>>();
	const [show, setShow] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const fetchLyrics = async () => {
		try {
			setIsLoading(true);
			const response = await fetch(
				`https://api.lyrics.ovh/v1/NewJeans/${track.name}`,
			);
			const data = await response.json();
			const { name } = track;
			setLyrics({ ...lyrics, [name]: data.lyrics });
		} catch (error) {
			console.error("Error fetching lyrics:", error);
		}
		setIsLoading(false);
	};

	const handleOpen = () => {
		if (!lyrics) {
			fetchLyrics();
		}
		setShow(true);
	};

	const handleClose = () => {
		setShow(false);
	};

	useEffect(() => {
		if (show) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [show]);

	useEffect(() => {
		fetchLyrics();
	}, [track]);

	return (
		<button
			onClick={handleOpen}
			disabled={!lyrics?.[track.name] && !isLoading}
			className={`flex gap-1 justify-center items-center border border-neutral-500 rounded disabled:opacity-50 ${
				className ?? ""
			}`}
		>
			<Music />
			<span>Lyrics</span>
			<Modal
				openModal={show}
				closeModal={handleClose}
				className="m-0 p-12 h-screen w-screen backdrop-blur max-w-none max-h-none bg-black/50"
			>
				<p className="whitespace-pre text-5xl font-bold text-white text-start">
					{lyrics?.[track.name]}
				</p>
			</Modal>
		</button>
	);
};

export default Lyrics;
