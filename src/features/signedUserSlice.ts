import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface CurrentUser {
	loggedIn: boolean;
	username: string;
}

export const signedUserSlice = createSlice({
	name: 'currentUser',
	initialState: { loggedIn: false, username: '' } as CurrentUser,
	reducers: {
		login(state, action: PayloadAction<string>) {
			state.loggedIn = true;
			state.username = action.payload;
		},
	},
});
