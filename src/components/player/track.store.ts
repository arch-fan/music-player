import type { Track } from "@/data/playlist";
import { create } from "zustand";

interface TrackState {
  currentTrack: Track | null;
  isPlaying: boolean;
  setTrack: (track: Track) => void;
  setIsPlaying: (isPlaying: boolean) => void;
}

export const usePlayer = create<TrackState>((set) => ({
  currentTrack: null,
  isPlaying: false,
  setTrack: (track) => set({ currentTrack: track }),
  setIsPlaying: (isPlaying) => set({ isPlaying }),
}));
