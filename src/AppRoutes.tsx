import { useRoutes } from 'react-router-dom';
import { OAuthCallback } from './components/oAuthCallback/OAuthCallback';
import { LoginPage } from './components/loginPage/LoginPage';
import { HomePage } from './components/homePage/HomePage';
import { ProtectedRoute } from './components/protectedRoute/ProtectedRoute';

export const AppRoutes = () => useRoutes([
    {
        path: '/',
        element: <LoginPage />
    },
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/oauth-callback',
        element: <OAuthCallback />,
    },
    {
        path: '/home',
        element: <ProtectedRoute><HomePage /></ProtectedRoute>
    }
])