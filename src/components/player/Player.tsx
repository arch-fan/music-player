import { useEffect, useRef } from "react";
import { usePlayer } from "./track.store";
import Controls from "./Controls";

const Player: React.FC = () => {
  const { currentTrack, isPlaying, audioElement, setIsPlaying } = usePlayer(
    (state) => ({
      currentTrack: state.currentTrack,
      isPlaying: state.isPlaying,
      audioElement: state.audioElement,
      setIsPlaying: state.setIsPlaying,
    })
  );

  useEffect(() => {
    if (currentTrack != null && audioElement.current != null) {
      audioElement.current.play();
    }
  }, [audioElement]);

  useEffect(() => {
    if (isPlaying) {
      audioElement.current?.play();
    } else {
      audioElement.current?.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (currentTrack) {
      setIsPlaying(true);
    }
  }, [currentTrack]);

  if (currentTrack) {
    return (
      <div className="fixed bottom-0 bg-brand bg-opacity-70 left-0 w-full h-16">
        <div className="mx-auto flex w-fit h-full justify-center items-center p-1 gap-4">
          <img src={currentTrack?.cover as string} className="h-full w-auto" />
          <Controls />
        </div>
        <audio ref={audioElement} src={currentTrack.path}></audio>
      </div>
    );
  }
};

export default Player;
