import { PreviousTitle, NextTitle, Play, Pause } from "../Icons";
import AudioBar from "./AudioBar";
import { usePlayer } from "./track.store";
import ProgressBar from "./ProgressBar";
import Speed from "./Speed";

export default function Controls() {
  const {
    isPlaying,
    setIsPlaying,
    setPreviousSong,
    audioElement,
    setNextSong,
  } = usePlayer((state) => ({
    isPlaying: state.isPlaying,
    setIsPlaying: state.setIsPlaying,
    setPreviousSong: state.setPreviousSong,
    setNextSong: state.setNextSong,
    audioElement: state.audioElement,
  }));

  return (
    audioElement.current && (
      <div className="flex flex-col">
        <div className="flex gap-4 [&_button]:outline">
          <button onClick={setPreviousSong} className="h-6 w-6">
            <PreviousTitle />
          </button>
          <button className="h-6 w-6" onClick={() => setIsPlaying(!isPlaying)}>
            {isPlaying ? <Pause /> : <Play />}
          </button>
          <button className="h-6 w-6" onClick={setNextSong}>
            <NextTitle />
          </button>
          <AudioBar />
        </div>
        <ProgressBar />
        <Speed />
      </div>
    )
  );
}
