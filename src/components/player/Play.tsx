import type { HTMLAttributes } from "react";
import { Play as PlayIcon, Pause as PauseIcon } from "../Icons";
import { usePlayer } from "./track.store";

interface Props extends HTMLAttributes<HTMLButtonElement> {}

const Play: React.FC<Props> = ({ className, onClick, ...props }) => {
  const isPlaying = usePlayer((state) => state.isPlaying);
  const setFirstTrack = usePlayer((state) => state.setFirstTrack);

  return (
    <button
      onClick={setFirstTrack}
      className={`p-1 rounded-full bg-brand-400 ${className ? className : ""}`}
      {...props}
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
