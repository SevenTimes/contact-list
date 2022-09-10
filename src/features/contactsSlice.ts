import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface Contact {
	id: string;
	name: string;
	email?: string;
	phone?: number;
}

const initialState: Contact[] = [];

export const contactsSlice = createSlice({
	name: 'contacts',
	initialState,
	reducers: {
		fetchContacts(state, action: PayloadAction<Contact[]>) {
			return (state = action.payload);
		},
		deleteContact(state, action: PayloadAction<string>) {
			return (state = deleteContactById(state, action.payload));
		},
	},
});

function deleteContactById(contacts: Contact[], contactId: string) {
	return contacts.filter((contact: Contact) => {
		return contact.id !== contactId;
	});
}
