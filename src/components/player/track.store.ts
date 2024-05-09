import type { Track } from "@/data/playlist";
import { create } from "zustand";
import { tracks } from "@/data/playlist";
import { createRef } from "react";

interface TrackState {
	currentTrack: Track | null;
	playlist: Track[];
	isPlaying: boolean;
	audioElement: React.RefObject<HTMLAudioElement>;
	isLoop: boolean;
	isRandom: boolean;
	setIsLoop: (isLoop: boolean) => void;
	setIsRandom: (isRandom: boolean) => void;
	setTrack: (track: Track) => void;
	setIsPlaying: (isPlaying: boolean) => void;
	setPreviousSong: () => void;
	setFirstTrack: () => void;
	setNextSong: () => void;
	setTrackByIndex: (i: number) => void;
}

export const usePlayer = create<TrackState>((set) => ({
	currentTrack: null,
	isPlaying: false,
	playlist: tracks,
	audioElement: createRef(),
	isLoop: false,
	isRandom: false,
	setIsLoop: (isLoop) => set({ isLoop }),
	setIsRandom: (isRandom) => set({ isRandom }),
	setTrack: (track) => set({ currentTrack: track }),
	setIsPlaying: (isPlaying) => set({ isPlaying }),
	setPreviousSong: () =>
		set((state) => {
			if (state.currentTrack) {
				const i = state.playlist.indexOf(state.currentTrack);
				return {
					currentTrack:
						state.playlist[i - 1 < 0 ? state.playlist.length - 1 : i - 1],
				};
			}
			return state;
		}),
	setNextSong: () =>
		set((state) => {
			if (state.currentTrack) {
				const i = state.playlist.indexOf(state.currentTrack);
				return {
					currentTrack:
						state.playlist[i + 1 >= state.playlist.length ? 0 : i + 1],
				};
			}
			return state;
		}),
	setFirstTrack: () => set({ currentTrack: tracks[0] }),
	setTrackByIndex: (i) => set({ currentTrack: tracks[i] }),
}));
