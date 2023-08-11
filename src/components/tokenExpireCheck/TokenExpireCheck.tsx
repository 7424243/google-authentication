import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Cookies from 'js-cookie';

export const TokenExpireCheck = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const checkTokenExpiration = () => {
            const accessTokenExpiration = Cookies.get('access_token_expires');
      
            if (accessTokenExpiration && new Date() > new Date(accessTokenExpiration)) {
              // Token has expired, redirect to login page
              Cookies.remove('access_token');
              Cookies.remove('access_token_expires');
              navigate('/login');
            }
          };
      
          const intervalId = setInterval(checkTokenExpiration, 10000); // Check every 10 seconds

          // Set up event listener to handle tab/window close
          window.addEventListener('beforeunload', () => {
            clearInterval(intervalId);
            // Remove cookies when the user navigates away or closes the tab
            Cookies.remove('access_token');
            Cookies.remove('access_token_expires');
          });
      
          return () => {
            clearInterval(intervalId); // Clear interval on component unmount
          };

    }, [navigate]);

    return null; // This component doesn't render anything
}