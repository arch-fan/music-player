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
