import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { store } from '../app/store';

function ContactList() {
	const navigate = useNavigate();
	useEffect(() => {
		if (!store.getState().user.loggedIn) {
			navigate('/login', { replace: true });
		}
	});

	return (
		<Container
			component="main"
			maxWidth="md"
			sx={{
				display: 'flex',
				justifyContent: 'center',
				marginTop: 2,
			}}
		>
			{/* Contacts list */}
			<Button variant="outlined">Add new contact</Button>
		</Container>
	);
}

export default ContactList;
