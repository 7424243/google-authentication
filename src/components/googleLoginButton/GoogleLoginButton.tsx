import GoogleButton from 'react-google-button';

export const GoogleLoginButton = () => {
    const clientId = process.env.REACT_APP_CLIENT_ID;
    const redirectURI = process.env.REACT_APP_REDIRECT_URI;

    const handleGoogleLogin = () => {
        window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectURI}&response_type=code&scope=openid%20profile%20email`;
    };

    return <GoogleButton onClick={handleGoogleLogin}>Login with Google</GoogleButton>
}