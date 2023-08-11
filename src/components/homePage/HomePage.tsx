import { removeCookie } from '../../utilities';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Home Page</h1>
            <button 
                onClick={async () => {
                    await removeCookie('access_token');
                    navigate('/login');
                }}
            >
                Logout
            </button>
        </div>
    );
};