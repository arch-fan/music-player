import { Play as PlayIcon, Pause as PauseIcon } from "../Icons";
import { usePlayer } from "./track.store";

const Play = () => {
  const isPlaying = usePlayer((state) => state.isPlaying);
  const setIsPlaying = usePlayer((state) => state.setIsPlaying);

  return (
    <button
      onClick={() => setIsPlaying(!isPlaying)}
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
