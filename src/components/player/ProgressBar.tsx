import { useEffect, useState } from "react";
import { usePlayer } from "./track.store";

const formatTime = (timeInSeconds: number) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

export default function ProgressBar() {
  const audioElement = usePlayer((state) => state.audioElement);

  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const updateTime = () => {
      if (audioElement.current)
        setCurrentTime(audioElement.current.currentTime);
    };

    if (audioElement.current)
      audioElement.current.addEventListener("timeupdate", updateTime);

    return () => {
      if (audioElement.current)
        audioElement.current.removeEventListener("timeupdate", updateTime);
    };
  }, [audioElement]);

  return (
    audioElement.current && (
      <div className="flex gap-1">
        <span>{formatTime(currentTime)}</span>
        <input
          type="range"
          min={0}
          max={
            isNaN(audioElement.current.duration)
              ? 0
              : audioElement.current.duration
          }
          value={currentTime}
          onChange={(e) => {
            if (audioElement.current)
              audioElement.current.currentTime = Number(e.target.value);
          }}
        />
        <span>
          {!isNaN(audioElement.current.duration)
            ? formatTime(audioElement.current.duration)
            : "0:00"}
        </span>
      </div>
    )
  );
}
