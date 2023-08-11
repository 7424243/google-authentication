import axios from 'axios';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { setCookie } from '../../utilities';
import Cookies from 'js-cookie';

export const OAuthCallback = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
      const params = new URLSearchParams(location.search);
      const authCode = params.get('code'); // Get the 'code' parameter
  
      if (authCode) {
        // Exchange the authorization code for an access token
        const clientId = process.env.REACT_APP_CLIENT_ID as string;
        const clientSecret = process.env.REACT_APP_CLIENT_SECRET as string;
        const redirectUri = process.env.REACT_APP_REDIRECT_URI as string;
        const tokenUrl = process.env.REACT_APP_TOKEN_URL as string;
        const data = {
          code: authCode,
          client_id: clientId,
          client_secret: clientSecret,
          redirect_uri: redirectUri,
          grant_type: 'authorization_code',
        };

        axios
          .post(tokenUrl, data)
          .then(async (res: any) => {
            const accessToken = res.data.access_token;

            if (accessToken) {
              await setCookie('access_token', accessToken);
              const expirationTime = new Date(new Date().getTime() + 5 * 60 * 1000); // Set expiration to 5 minutes from now
              Cookies.set('access_token_expires', expirationTime.toISOString())

              navigate('/');
            }
          })
          .catch((e) => {
            // TODO: handle error data {error: 'invalid_grant', error_description: 'Bad Request'}
          
            console.error('Token exchange failed: ', e);
          });
      }
    }, [location, navigate]);
  
    return (
      <div>Logging in...</div>
    );
};