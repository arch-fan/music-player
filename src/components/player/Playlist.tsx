import { tracks } from "@/data/playlist";
import { formatTime } from "@/utils/time";
import { Pause, Play, Youtube } from "react-icons";
import { usePlayer } from "./track.store";

/**
 * Componente que renderiza toda la lista de canciones, estas vienen de
 * una constante llamada tracks.
 */
export default function Playlist() {
	const setTrack = usePlayer((state) => state.setTrack);
	const currentTrack = usePlayer((state) => state.currentTrack);
	const isPlaying = usePlayer((state) => state.isPlaying);

	return (
		<div className="grid grid-cols-1 gap-2">
			{tracks.map((track) => (
				<button
					onClick={() => setTrack(track)}
					className={`
            			flex h-16 gap-2 rounded p-2 relative group
            			before:content-[''] before:absolute before:h-full before:w-1
            			before:bg-brand before:top-0 before:left-0
						before:rounded-tl before:rounded-bl
            			hover:bg-white/30 transition-all duration-500
            			${track === currentTrack ? "bg-white/40 shadow-xl" : ""}
					`}
					key={track.name}
					type="button"
				>
					<div className="h-full flex items-center justify-center size-10">
						{track === currentTrack ? (
							isPlaying ? (
								<img
									className="w-auto h-auto"
									src="https://open.spotifycdn.com/cdn/images/equaliser-animated-green.f5eb96f2.gif"
									alt="Audio playing"
								/>
							) : (
								<Pause className="w-auto h-auto" />
							)
						) : (
							<Play className="w-auto h-auto" />
						)}
					</div>
					<img
						src={track.cover}
						className="h-full w-auto rounded"
						alt={track.name}
					/>
					<div className="flex flex-col">
						<h3 className="font-bold text-xl">{track.name}</h3>
						<time className="mt-auto text-start">
							{formatTime(track.duration)}
						</time>
					</div>
					<a
						className="text-red-600 group-hover:opacity-100 duration-500 opacity-0 ml-auto self-center rounded hover:scale-125 transition-all"
						href={track.video}
					>
						<Youtube
							onClick={(e) => e.stopPropagation()}
							className="size-8 hover:drop-shadow-[0px_0px_20px_#dc2626] transition-all duration-500"
						/>
					</a>
				</button>
			))}
		</div>
	);
}
