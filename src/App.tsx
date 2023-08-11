import './App.css';
import { AppRoutes } from './AppRoutes';
import { TokenExpireCheck } from './components/tokenExpireCheck/TokenExpireCheck';

export const App = () => (
  <div className="App">
    <TokenExpireCheck />
    <AppRoutes />
  </div>
);
