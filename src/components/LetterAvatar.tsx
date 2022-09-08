import Avatar from '@mui/material/Avatar';

type Props = { name: string };

function LetterAvatar({ name }: Props) {
	function stringToColor(string: string) {
		let hash = 0;

		for (let i = 0; i < string.length; i++) {
			hash = string.charCodeAt(i) + ((hash << 5) - hash);
		}

		let color = '#';

		for (let i = 0; i < 3; i++) {
			const value = (hash >> (i * 8)) & 0xff;
			color += `00${value.toString(16)}`.slice(-2);
		}

		return color;
	}

	function stringAvatar(name: string) {
		return {
			sx: {
				bgcolor: stringToColor(name),
			},
			children: `${name[0]}`,
		};
	}

	return <Avatar {...stringAvatar(name)} />;
}

export default LetterAvatar;
