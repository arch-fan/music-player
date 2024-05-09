import type { SVGProps } from "react";

export function Share(props: SVGProps<SVGSVGElement>) {
	return (
		<svg viewBox="0 0 24 24" {...props}>
			<path
				fill="currentColor"
				d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81a3 3 0 0 0 3-3a3 3 0 0 0-3-3a3 3 0 0 0-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.15c-.05.21-.08.43-.08.66c0 1.61 1.31 2.91 2.92 2.91s2.92-1.3 2.92-2.91A2.92 2.92 0 0 0 18 16.08"
			/>
		</svg>
	);
}

export function Facebook(props: SVGProps<SVGSVGElement>) {
	return (
		<svg viewBox="0 0 24 24" {...props}>
			<path
				fill="currentColor"
				d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02"
			/>
		</svg>
	);
}

export function Play(props: SVGProps<SVGSVGElement>) {
	return (
		<svg viewBox="0 0 24 24" {...props}>
			<path fill="currentColor" d="M8 5.14v14l11-7z" />
		</svg>
	);
}

export function Pause(props: SVGProps<SVGSVGElement>) {
	return (
		<svg viewBox="0 0 24 24" {...props}>
			<path fill="currentColor" d="M14 19h4V5h-4M6 19h4V5H6z" />
		</svg>
	);
}

export function PreviousTitle(props: SVGProps<SVGSVGElement>) {
	return (
		<svg viewBox="0 0 24 24" {...props}>
			<path fill="currentColor" d="M20 5v14l-7-7M6 5v14H4V5m9 0v14l-7-7" />
		</svg>
	);
}

export function NextTitle(props: SVGProps<SVGSVGElement>) {
	return (
		<svg viewBox="0 0 24 24" {...props}>
			<path fill="currentColor" d="M4 5v14l7-7m7-7v14h2V5m-9 0v14l7-7" />
		</svg>
	);
}

export function Loading(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			{...props}
		>
			<circle cx={18} cy={12} r={0} fill="currentColor">
				<animate
					attributeName="r"
					begin={0.67}
					calcMode="spline"
					dur="1.5s"
					keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
					repeatCount="indefinite"
					values="0;2;0;0"
				/>
			</circle>
			<circle cx={12} cy={12} r={0} fill="currentColor">
				<animate
					attributeName="r"
					begin={0.33}
					calcMode="spline"
					dur="1.5s"
					keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
					repeatCount="indefinite"
					values="0;2;0;0"
				/>
			</circle>
			<circle cx={6} cy={12} r={0} fill="currentColor">
				<animate
					attributeName="r"
					begin={0}
					calcMode="spline"
					dur="1.5s"
					keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
					repeatCount="indefinite"
					values="0;2;0;0"
				/>
			</circle>
		</svg>
	);
}

export function Music(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			{...props}
		>
			<path
				fill="currentColor"
				d="M21 3v12.5a3.5 3.5 0 0 1-3.5 3.5a3.5 3.5 0 0 1-3.5-3.5a3.5 3.5 0 0 1 3.5-3.5c.54 0 1.05.12 1.5.34V6.47L9 8.6v8.9A3.5 3.5 0 0 1 5.5 21A3.5 3.5 0 0 1 2 17.5A3.5 3.5 0 0 1 5.5 14c.54 0 1.05.12 1.5.34V6z"
			/>
		</svg>
	);
}

export function Youtube(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			{...props}
		>
			<path
				fill="currentColor"
				d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73"
			/>
		</svg>
	);
}

export function Speaker(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			{...props}
		>
			<path
				fill="currentColor"
				d="M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.84-5 6.7v2.07c4-.91 7-4.49 7-8.77s-3-7.86-7-8.77M16.5 12c0-1.77-1-3.29-2.5-4.03V16c1.5-.71 2.5-2.24 2.5-4M3 9v6h4l5 5V4L7 9z"
			/>
		</svg>
	);
}

export function Repeat(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			{...props}
		>
			<path
				fill="currentColor"
				d="M17 17H7v-3l-4 4l4 4v-3h12v-6h-2M7 7h10v3l4-4l-4-4v3H5v6h2z"
			/>
		</svg>
	);
}

export function Random(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 1200 1200"
			{...props}
		>
			<path
				fill="currentColor"
				d="M935.926 42.203v186.061H763.958c-54.408 0-114.484 26.559-164.729 77.32c-50.242 50.761-104.842 126.065-191.527 249.904c-87.076 124.394-135.567 199.565-165.807 233.346c-30.24 33.78-25.376 30.882-69.388 30.882H0v147.863h172.507c66.078 0 132.54-27.619 179.515-80.093c46.975-52.475 91.312-125.164 176.742-247.208c85.82-122.601 140.381-195.159 175.512-230.651c35.129-35.491 36.641-33.5 59.685-33.5h171.967v194.147L1200 306.276zM0 228.263v147.863h172.507c44.012 0 39.148-2.975 69.388 30.805c19.456 21.734 51.507 67.826 91.49 125.915c5.419-7.773 7.973-11.521 13.708-19.716c21.78-31.114 41.563-59.187 59.838-84.79c6.36-8.91 11.688-15.939 17.714-24.259c-27.021-39.039-49.525-70.001-72.623-95.803c-46.975-52.474-113.437-80.015-179.515-80.015zm935.926 401.464v189.988H763.958c-23.043 0-24.554 1.915-59.684-33.577c-23.237-23.477-56.146-65.093-99.809-124.76c-5.281 7.49-9.555 13.418-15.095 21.333c-30.571 43.674-51.648 75.183-73.777 107.816c31.395 41.578 58.12 73.875 83.637 99.652c50.242 50.763 110.319 77.397 164.729 77.397h171.968v190.22L1200 893.801z"
			/>
		</svg>
	);
}
