import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';
import { Contact, contactsSlice } from '../features/contactsSlice';
import LetterAvatar from './LetterAvatar';
import { store } from '../app/store';

type Props = { contact: Contact; rerender: VoidFunction };

function ContactItem(props: Props) {
	const { id, name, email, phone } = props.contact;

	const handleDeleteItem = () => {
		store.dispatch(contactsSlice.actions.deleteContact(id));
		props.rerender();
	};

	return (
		<ListItem
			divider
			secondaryAction={
				<IconButton onClick={handleDeleteItem}>
					<Icon>delete</Icon>
				</IconButton>
			}
		>
			<ListItemAvatar>
				<LetterAvatar name={name} />
			</ListItemAvatar>
			<ListItemText primary={name} secondary={email} />
			{phone && (
				<ListItemText primary="Phone Number" secondary={`+7${phone}`} />
			)}
		</ListItem>
	);
}

export default ContactItem;
