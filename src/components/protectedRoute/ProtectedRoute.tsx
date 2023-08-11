import { getCookie } from '../utilities';
import { Navigate } from "react-router-dom";


export const ProtectedRoute = ({ children }: any) => {
    const accessToken = getCookie('access_token');

    if (!accessToken) {
        return <Navigate to='/login' replace />
    };

    return children;
};