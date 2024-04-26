import { useEffect, useState } from "react";
import { usePlayer } from "./track.store";

export default function AudioBar() {
  const audioElement = usePlayer((state) => state.audioElement);

  const [volume, setVolume] = useState(
    Number(localStorage.getItem("volume")) || 0.5
  );

  useEffect(() => {
    const updateVolume = () => {
      if (audioElement.current) setVolume(audioElement.current.volume);

      localStorage.setItem("volume", volume.toString());
    };

    if (audioElement.current) {
      audioElement.current.volume = volume;
      audioElement.current.addEventListener("volumechange", updateVolume);
    }

    return () => {
      if (audioElement.current)
        audioElement.current.removeEventListener("volumechange", updateVolume);
    };
  });

  return (
    <input
      type="range"
      min={0}
      max={100}
      width={100}
      value={volume * 100}
      onChange={(e) => {
        if (audioElement.current)
          audioElement.current.volume = Number(e.target.value) / 100;
      }}
    />
  );
}
