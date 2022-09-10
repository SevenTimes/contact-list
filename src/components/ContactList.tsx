import Container from '@mui/material/Container';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import { store } from '../app/store';
import ContactItem from './ContactItem';
import { useState } from 'react';
import ContactDetailsModal from './ContactDetailsModal';

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
			<Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
				<ContactDetailsModal type={'add'} />
			</Box>
		</Container>
	);
}

export default ContactList;
