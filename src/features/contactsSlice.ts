import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface Contact {
	id: number;
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
		deleteContact(state, action: PayloadAction<number>) {
			return (state = deleteContactById(state, action.payload));
		},
	},
});

function deleteContactById(contacts: Contact[], contactId: number) {
	return contacts.filter((contact: Contact) => {
		return contact.id !== contactId;
	});
}
