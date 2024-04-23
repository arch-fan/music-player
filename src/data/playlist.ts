export interface Track {
  name: string;
  path: string;
  cover: string | ImageMetadata;
}

export const tracks: Track[] = [
  {
    name: "OMG",
    path: "/music-player/music/omg.mp3",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/1/10/NewJeans_OMG_cover.jpg",
  },
  {
    name: "Ditto",
    path: "/music-player/music/ditto.mp3",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/NewJeans_-_Ditto.png/220px-NewJeans_-_Ditto.png",
  },
];
