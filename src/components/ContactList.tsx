import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

function ContactList() {
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
