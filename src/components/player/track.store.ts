import type { Track } from "@/data/playlist";
import { tracks } from "@/data/playlist";
import shuffle from "lodash/shuffle";
import { createRef } from "react";
import { create } from "zustand";

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
}

export const usePlayer = create<TrackState>((set, get) => ({
	currentTrack: null,
	isPlaying: false,
	playlist: [...tracks],
	audioElement: createRef(),
	isLoop: false,
	isRandom: false,
	setIsLoop: (isLoop) => set({ isLoop }),
	setIsRandom: (isRandom) =>
		set((state) => ({
			isRandom,
			playlist: isRandom ? shuffle(state.playlist) : [...tracks],
		})),
	setTrack: (track) => set({ currentTrack: track }),
	setIsPlaying: (isPlaying) => set({ isPlaying }),
	setPreviousSong: () => {
		const currentTrack = get().currentTrack;

		if (currentTrack) {
			const playlist = get().playlist;
			const i = playlist.indexOf(currentTrack);
			return set({
				currentTrack: playlist[i - 1 < 0 ? playlist.length - 1 : i - 1],
			});
		}
	},
	setNextSong: () => {
		const currentTrack = get().currentTrack;
		if (currentTrack) {
			const playlist = get().playlist;
			const i = playlist.indexOf(currentTrack);
			return set({
				currentTrack: playlist[i + 1 >= playlist.length ? 0 : i + 1],
			});
		}
	},
	setFirstTrack: () => set({ currentTrack: tracks[0] }),
}));
