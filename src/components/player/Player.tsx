import { useEffect, useRef } from "react";
import { usePlayer } from "./track.store";

const Player: React.FC = () => {
  const { currentTrack, isPlaying } = usePlayer((state) => ({
    currentTrack: state.currentTrack,
    isPlaying: state.isPlaying,
  }));

  const audio = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (currentTrack != null && audio.current != null) {
      audio.current.play();
    }
  }, [currentTrack]);

  if (isPlaying && currentTrack != null) {
    return (
      <div className="fixed bottom-0 left-0 w-full h-16">
        <button onClick={() => audio.current?.play()}>play</button>
        <audio ref={audio} src={currentTrack.path}></audio>
      </div>
    );
  }
};

export default Player;
