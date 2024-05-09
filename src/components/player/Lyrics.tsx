import type { Track } from "@/data/playlist";
import { useEffect, useState } from "react";
import { Music } from "../Icons";
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
			<Modal openModal={show} closeModal={handleClose} className="rounded">
				<div className="flex max-w-xl p-2 overflow-y-auto w-full max-h-96">
					<p className="text-3xl text-start whitespace-pre-wrap">
						{lyrics?.[track.name] ?? "No lyrics available"}
					</p>
				</div>
			</Modal>
		</button>
	);
};

export default Lyrics;
