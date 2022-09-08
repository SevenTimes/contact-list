import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import { store } from '../app/store';
import { signedUserSlice } from '../features/signedUserSlice';
import { useNavigate } from 'react-router-dom';
import { contactsSlice } from '../features/contactsSlice';

function SignIn() {
	const [usernameInput, setUsernameInput] = useState('');
	const [passwordInput, setPasswordInput] = useState('');
	const [loginError, setLoginError] = useState(false);

	const navigate = useNavigate();

	interface User {
		username: string;
		password: string;
		contacts: Contact[];
	}

	interface Contact {
		id: number;
		name: string;
	}

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		fetch('http://localhost:4000/users')
			.then((response) => response.json() as Promise<User[]>)
			.then((data) => {
				const user = data.find((user) => user.username === usernameInput);
				if (user && user.password === passwordInput) {
					store.dispatch(signedUserSlice.actions.login(usernameInput));
					store.dispatch(contactsSlice.actions.fetchContacts(user.contacts));
					setLoginError(false);
					navigate('/contacts');
				} else {
					setLoginError(true);
				}
			});
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		switch (event.currentTarget.id) {
			case 'username':
				setUsernameInput(event.currentTarget.value);
				break;
			case 'password':
				setPasswordInput(event.currentTarget.value);
				break;
			default:
				break;
		}
	};

	return (
		<Container component="main" maxWidth="xs">
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Typography component="h1" variant="h5">
					Sign In
				</Typography>
				<Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
					<TextField
						margin="normal"
						required
						fullWidth
						id="username"
						label="Username"
						name="username"
						autoComplete="username"
						autoFocus
						value={usernameInput}
						onChange={handleChange}
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						id="password"
						label="Password"
						name="password"
						autoComplete="current-password"
						value={passwordInput}
						onChange={handleChange}
					/>
					{loginError && (
						<Alert severity="error" variant="filled">
							Incorrect login or password!
						</Alert>
					)}
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{
							mt: 3,
							mb: 2,
						}}
					>
						Sign In
					</Button>
				</Box>
			</Box>
		</Container>
	);
}

export default SignIn;
