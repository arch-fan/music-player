import { PreviousTitle, NextTitle, Play, Pause } from "../Icons";
import { usePlayer } from "./track.store";

export default function Controls() {
  const {
    isPlaying,
    setIsPlaying,
    setPreviousSong,
    currentTrack,
    audioElement,
    setNextSong,
  } = usePlayer((state) => ({
    isPlaying: state.isPlaying,
    setIsPlaying: state.setIsPlaying,
    setPreviousSong: state.setPreviousSong,
    setNextSong: state.setNextSong,
    currentTrack: state.currentTrack,
    audioElement: state.audioElement,
  }));

  return (
    audioElement.current && (
      <div className="flex flex-col">
        <h2 className="text-center">{currentTrack?.name}</h2>
        <div className="flex gap-4">
          <button onClick={setPreviousSong} className="h-6 w-6">
            <PreviousTitle />
          </button>
          <button className="h-6 w-6" onClick={() => setIsPlaying(!isPlaying)}>
            {isPlaying ? <Pause /> : <Play />}
          </button>
          <button className="h-6 w-6" onClick={setNextSong}>
            <NextTitle />
          </button>
          <input
            type="range"
            min={0}
            max={100}
            width={100}
            defaultValue={Number(audioElement.current.volume) * 100}
            onChange={(e) => {
              const newVolume = parseFloat(e.target.value) / 100;
              audioElement.current!.volume = newVolume;
            }}
          />
        </div>
      </div>
    )
  );
}
