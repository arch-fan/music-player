import { usePlayer } from "./track.store";

const Player: React.FC = () => {
  const { isPlaying, path, setIsPlaying, setPath } = usePlayer();

  if (isPlaying || path) {
    return <div className="fixed bottom-0 left-0 w-full h-16">Hola</div>;
  }
};

export default Player;
