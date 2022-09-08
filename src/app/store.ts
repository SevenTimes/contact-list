import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from '../features/contactsSlice';
import { signedUserSlice } from '../features/signedUserSlice';

export const store = configureStore({
	reducer: {
		user: signedUserSlice.reducer,
		contacts: contactsSlice.reducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
