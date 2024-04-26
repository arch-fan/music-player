import { useEffect } from "react";
import { usePlayer } from "./track.store";
import Controls from "./Controls";

const Player: React.FC = () => {
  const { currentTrack, audioElement, setNextSong, setIsPlaying, isPlaying } =
    usePlayer((state) => ({
      currentTrack: state.currentTrack,
      isPlaying: state.isPlaying,
      audioElement: state.audioElement,
      setNextSong: state.setNextSong,
      setIsPlaying: state.setIsPlaying,
    }));

  useEffect(() => {
    if (currentTrack && audioElement.current) {
      audioElement.current.play();
      audioElement.current.addEventListener("ended", setNextSong);
    }

    return () => {
      if (audioElement.current) {
        audioElement.current.removeEventListener("ended", setNextSong);
      }
    };
  }, []);

  useEffect(() => {
    const keyEvents = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        setIsPlaying(!isPlaying);
        e.preventDefault();
      }
    };

    window.addEventListener("keydown", keyEvents);
  }, []);

  useEffect(() => {
    if (currentTrack && audioElement.current) setIsPlaying(true);
  }, [currentTrack]);

  useEffect(() => {
    if (audioElement.current)
      if (isPlaying) audioElement.current.play();
      else audioElement.current.pause();
  }, [isPlaying]);

  return (
    currentTrack && (
      <div className="fixed bottom-0 bg-brand bg-opacity-70 left-0 w-full h-20 p-2">
        <div className="mx-auto gap-2 flex w-fit h-full justify-center items-center">
          <img
            src={currentTrack.cover as string}
            className="w-auto h-full rounded"
          />
          <Controls />
        </div>
        <audio ref={audioElement} src={currentTrack.path}></audio>
      </div>
    )
  );
};

export default Player;
