import { users } from "@/data/users";
import JSConfetti from "js-confetti";

const Profile: React.FC = () => {
	let username = new URLSearchParams(location.search).get("username");

	if (username && !(username in users)) {
		username = null;
	}

	const avatar = username
		? users[username]
		: "https://api-private.atlassian.com/users/17ccb93f84c1e2afb591935dec90e986/avatar";

	if (username?.toLocaleLowerCase() === "vicente") {
		const jsConfetti = new JSConfetti();

		jsConfetti.addConfetti();
	}

	return (
		<div className="flex gap-2 items-center">
			<a href={import.meta.env.BASE_URL}>{username ?? "Invitado"}</a>
			<img
				className="size-9 object-cover rounded-full"
				src={avatar}
				alt={username ?? "Invitado"}
			/>
		</div>
	);
};

export default Profile;
