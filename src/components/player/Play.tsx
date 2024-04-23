import { Play as PlayIcon, Pause as PauseIcon } from "../Icons";
import { usePlayer } from "./track.store";
import { tracks, type Track } from "@/data/playlist";

const Play = () => {
  const isPlaying = usePlayer((state) => state.isPlaying);
  const setIsPlaying = usePlayer((state) => state.setIsPlaying);
  const setTrack = usePlayer((state) => state.setTrack);

  function playTrack(track: Track) {
    setIsPlaying(true);
    setTrack(track);
  }

  return (
    <button
      onClick={() => playTrack(tracks[0])}
      className="p-1 rounded-full bg-brand-400 h-auto w-auto"
    >
      {isPlaying ? (
        <PauseIcon className="h-full w-auto text-white" />
      ) : (
        <PlayIcon className="h-full w-auto text-white" />
      )}
    </button>
  );
};

export default Play;
