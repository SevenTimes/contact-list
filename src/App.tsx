import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ContactList from './components/ContactList';
import PrivateRoutes from './components/PrivateRoutes';
import SignIn from './components/SignIn';
import './App.css';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<PrivateRoutes />}>
					<Route path="/contacts" element={<ContactList />} />
				</Route>
				<Route path="/login" element={<SignIn />} />
				<Route path="*" element={<Navigate to="/login" replace />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
