import { Play } from "../Icons";
import { tracks } from "@/data/playlist";
import { usePlayer } from "./track.store";

export default function Playlist() {
  const setTrack = usePlayer((state) => state.setTrack);

  return (
    <div className="grid grid-cols-1 gap-4">
      {tracks.map((track) => (
        <div className="flex h-12 gap-2" key={track.name}>
          <button
            onClick={() => setTrack(track)}
            className="border-black border hover:bg-slate-200 transition-all h-full w-auto p-1 rounded-full"
          >
            <Play className="w-full h-full" />
          </button>
          <img src={track.cover as string} className="h-full w-auto rounded" />
          <h3 className="font-bold text-xl">{track.name}</h3>
        </div>
      ))}
    </div>
  );
}
