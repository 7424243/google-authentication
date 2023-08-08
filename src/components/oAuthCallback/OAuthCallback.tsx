import axios from 'axios';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


export const OAuthCallback = () => {
    const navigate = useNavigate();
    const location = useLocation();
  
    useEffect(() => {
      console.log('location: ', location)
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
          .then((res: any) => {
            console.log('res: ', res);
            const accessToken = res.data.access_token

            if (accessToken) {
              // TODO: save in cookie?

              // Use the access token for making authenticated requests
              // Redirect to your app's main route or dashboard
              navigate('/home');
            }
          })
          .catch((e) => {
            // TODO: handle error
            
            console.error('Token exchange failed: ', e);
          })

      }
    }, [location, navigate]);
  
    return (
      <div>Logging in...</div>
    );
};