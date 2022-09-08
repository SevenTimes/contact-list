import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import Icon from '@mui/material/Icon';
import { store } from '../app/store';
import ContactItem from './ContactItem';
import { useState } from 'react';

function ContactList() {
	const [test, setTest] = useState(false);
	function rerender() {
		setTest(!test);
	}

	return (
		<Container
			component="main"
			maxWidth="sm"
			sx={{
				display: 'flex',
				justifyContent: 'center',
				flexDirection: 'column',
				marginTop: 2,
			}}
		>
			<Box>
				<List>
					{store.getState().contacts.map((contact) => {
						return (
							<ContactItem
								contact={contact}
								key={contact.id}
								rerender={rerender}
							/>
						);
					})}
				</List>
			</Box>
			<Box sx={{ display: 'flex', justifyContent: 'center' }}>
				<Button variant="outlined" startIcon={<Icon>add</Icon>}>
					Add new contact
				</Button>
			</Box>
		</Container>
	);
}

export default ContactList;
