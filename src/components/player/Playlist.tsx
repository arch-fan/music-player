import { Play } from "../Icons";
import { tracks } from "@/data/playlist";
import { usePlayer } from "./track.store";

export default function Playlist() {
  const setTrack = usePlayer((state) => state.setTrack);

  return (
    <div className="grid grid-cols-1 gap-4">
      {tracks.map((track) => (
        <div className="flex" key={track.name}>
          <button
            onClick={() => setTrack(track)}
            className="border-black border h-8 w-auto p-1 rounded-full"
          >
            <Play className="w-full h-full" />
          </button>
          <img src={track.cover as string} className="h-8 w-8" />
          <p>{track.name}</p>
        </div>
      ))}
    </div>
  );
}
