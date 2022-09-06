import { configureStore } from '@reduxjs/toolkit';
import { signedUserSlice } from '../features/signedUserSlice';

export const store = configureStore({
	reducer: {
		user: signedUserSlice.reducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
