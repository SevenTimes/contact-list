import { Navigate, Outlet } from 'react-router-dom';
import { store } from '../app/store';

function PrivateRoutes() {
	return store.getState().user.loggedIn ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes;
