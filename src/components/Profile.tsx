import { users } from "@/data/users";

const Profile: React.FC = () => {
	const username = new URLSearchParams(location.search).get("username");

	const avatar = username
		? users[username]
		: "https://api-private.atlassian.com/users/17ccb93f84c1e2afb591935dec90e986/avatar";

	return (
		<div className="flex gap-2 items-center">
			<a href="/music-player">{username ?? "Invitado"}</a>
			<img
				className="size-9 object-cover rounded-full"
				src={avatar}
				alt={username ?? "Invitado"}
			/>
		</div>
	);
};

export default Profile;
