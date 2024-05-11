export interface Track {
	name: string;
	path: string;
	cover: string;
	duration: number;
	video: string;
}

const { BASE_URL } = import.meta.env;

export const tracks: Track[] = [
	{
		name: "OMG",
		path: `${BASE_URL}/music/omg.mp3`,
		cover: `${BASE_URL}/music/omg.webp`,
		duration: 220,
		video: "https://www.youtube.com/watch?v=_ZAgIHmHLdc",
	},
	{
		name: "Ditto",
		path: `${BASE_URL}/music/ditto.mp3`,
		cover: `${BASE_URL}/music/ditto.webp`,
		duration: 189,
		video: "https://www.youtube.com/watch?v=pSUydWEqKwE",
	},
	{
		name: "Super Shy",
		path: `${BASE_URL}/music/super-shy.mp3`,
		cover: `${BASE_URL}/music/1step.webp`,
		duration: 154,
		video: "https://www.youtube.com/watch?v=ArmDp-zijuc",
	},
	{
		name: "New Jeans",
		path: `${BASE_URL}/music/new-jeans.mp3`,
		cover: `${BASE_URL}/music/1step.webp`,
		duration: 119,
		video: "https://www.youtube.com/watch?v=kcelgrGY1h8",
	},
	{
		name: "ETA",
		path: `${BASE_URL}/music/eta.mp3`,
		cover: `${BASE_URL}/music/1step.webp`,
		duration: 155,
		video: "https://www.youtube.com/watch?v=jOTfBlKSQYY",
	},
	{
		name: "Hype Boy",
		path: `${BASE_URL}/music/hype-boy.mp3`,
		cover: `${BASE_URL}/music/2step.webp`,
		duration: 177,
		video: "https://www.youtube.com/watch?v=9wUKhEgnllc",
	},
	{
		name: "Attention",
		path: `${BASE_URL}/music/attention.mp3`,
		cover: `${BASE_URL}/music/2step.webp`,
		duration: 180,
		video: "https://www.youtube.com/watch?v=js1CtxSY38I",
	},
	{
		name: "GODS",
		path: `${BASE_URL}/music/gods.mp3`,
		cover: `${BASE_URL}/music/gods.webp`,
		duration: 220,
		video: "https://www.youtube.com/watch?v=C3GouGa0noM",
	},
	{
		name: "Cool With You",
		path: `${BASE_URL}/music/cool-with-you.mp3`,
		cover: `${BASE_URL}/music/1step.webp`,
		duration: 147,
		video: "https://www.youtube.com/watch?v=zsYSSVoQnP4",
	},
	{
		name: "Hurt",
		path: `${BASE_URL}/music/hurt.mp3`,
		cover: `${BASE_URL}/music/2step.webp`,
		duration: 180,
		video: "https://www.youtube.com/watch?v=tVIXY14aJms",
	},
];
