import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


export const OAuthCallback = () => {
    const navigate = useNavigate();
    const location = useLocation();
  
    useEffect(() => {
      const params = new URLSearchParams(location.hash.slice(1)); // Extract hash fragment
      const accessToken = params.get('access_token');
  
      if (accessToken) {
        // Use the access token for making authenticated requests
        // Redirect to your app's main route or dashboard
        navigate('/dashboard');
      }
    }, [location.hash, navigate]);
  
    return (
      <div>Logging in...</div>
    );
};