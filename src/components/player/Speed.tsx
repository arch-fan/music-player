import { useEffect, useState } from "react";
import { usePlayer } from "./track.store";

export default function Speed() {
  const [playbackRate, setPlaybackRate] = useState(1);
  const audioElement = usePlayer((state) => state.audioElement);

  useEffect(() => {
    const updatePlaybackRate = () => {
      if (audioElement.current)
        setPlaybackRate(audioElement.current.playbackRate);
    };

    if (audioElement.current)
      audioElement.current.addEventListener("ratechange", updatePlaybackRate);

    return () => {
      if (audioElement.current)
        audioElement.current.removeEventListener(
          "ratechange",
          updatePlaybackRate
        );
    };
  }, []);

  return (
    audioElement.current && (
      <select
        value={playbackRate}
        onChange={(e) =>
          (audioElement.current!.playbackRate = Number(e.target.value))
        }
      >
        <option value="0.5">0.5x</option>
        <option value="1">1x</option>
        <option value="1.5">1.5x</option>
        <option value="2">2x</option>
      </select>
    )
  );
}
