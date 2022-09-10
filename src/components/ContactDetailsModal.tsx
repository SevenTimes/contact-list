import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Modal from '@mui/material/Modal';
import InputAdornment from '@mui/material/InputAdornment';
import { useState } from 'react';
import { Contact } from '../features/contactsSlice';
import { v4 as uuid } from 'uuid';

interface ModalProps {
	type: string;
}

function ContactDetailsModal(props: ModalProps) {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const [nameInput, setNameInput] = useState('');
	const [emailInput, setEmailInput] = useState('');
	const [phoneInput, setPhoneInput] = useState('');

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		switch (event.currentTarget.id) {
			case 'name':
				setNameInput(event.currentTarget.value);
				break;
			case 'email':
				setEmailInput(event.currentTarget.value);
				break;
			case 'phone':
				setPhoneInput(event.currentTarget.value);
				break;
			default:
				break;
		}
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const newContact: Contact = {
			id: uuid(),
			name: nameInput,
			...(emailInput && { email: emailInput }),
			...(phoneInput && { phone: Number(phoneInput) }),
		};
		console.log(newContact);
	};

	const style = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 400,
		bgcolor: 'background.paper',
		p: 3,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	};

	let title;

	switch (props.type) {
		case 'add':
			title = (
				<Typography component="h3" variant="h6">
					Add New Contact
				</Typography>
			);
			break;

		default:
			break;
	}

	return (
		<Box>
			<Button
				variant="outlined"
				startIcon={<Icon>add</Icon>}
				onClick={handleOpen}
			>
				Add new contact
			</Button>
			<Modal open={open} onClose={handleClose}>
				<Box sx={style} component="form" onSubmit={handleSubmit}>
					{title}

					<TextField
						id="name"
						label="Name"
						required
						size="small"
						margin="normal"
						autoFocus
						fullWidth
						value={nameInput}
						onChange={handleChange}
						InputLabelProps={{
							shrink: true,
						}}
					/>
					<TextField
						id="email"
						label="Email"
						size="small"
						margin="normal"
						fullWidth
						value={emailInput}
						onChange={handleChange}
						InputLabelProps={{
							shrink: true,
						}}
					/>
					<TextField
						id="phone"
						label="Phone Number"
						size="small"
						margin="normal"
						fullWidth
						type="number"
						value={phoneInput}
						onChange={handleChange}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">+7</InputAdornment>
							),
							inputMode: 'numeric',
						}}
						onWheel={(event) => {
							event.currentTarget.querySelector('input')?.blur();
						}}
					/>

					<Button type="submit" sx={{ mt: 1 }}>
						Create Contact
					</Button>
				</Box>
			</Modal>
		</Box>
	);
}

export default ContactDetailsModal;
