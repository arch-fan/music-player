import { create } from "zustand";

interface Track {
  path: string | null;
  isPlaying: boolean;
  setPath: (path: string) => void;
  setIsPlaying: (isPlaying: boolean) => void;
}

export const usePlayer = create<Track>((set) => ({
  path: null,
  isPlaying: false,
  setPath: (path: string) => set(() => ({ path })),
  setIsPlaying: (isPlaying: boolean) => set(() => ({ isPlaying })),
}));
