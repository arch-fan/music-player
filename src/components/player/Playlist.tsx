import { Pause, Play } from "../Icons";
import { tracks, type Track } from "@/data/playlist";
import { usePlayer } from "./track.store";
import { formatTime } from "@/utils/time";

export default function Playlist() {
	const setTrack = usePlayer((state) => state.setTrack);
	const setIsPlaying = usePlayer((state) => state.setIsPlaying);
	const currentTrack = usePlayer((state) => state.currentTrack);
	const isPlaying = usePlayer((state) => state.isPlaying);

	const handlePlay = (track: Track) => {
		setTrack(track);
		setIsPlaying(true);
	};

	return (
		<div className="grid grid-cols-1 gap-2">
			{tracks.map((track) => (
				<button
					onClick={() => handlePlay(track)}
					className={`
            flex h-16 gap-2 rounded p-2 relative overflow-hidden
            before:content-[''] before:absolute before:h-full before:w-1
            before:bg-brand
            before:top-0 before:left-0
            hover:bg-neutral-300 transition-all
            ${track === currentTrack ? "bg-neutral-200" : ""}`}
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
								<Pause />
							)
						) : (
							<Play />
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
				</button>
			))}
		</div>
	);
}
