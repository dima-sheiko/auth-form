import { Navigate } from 'react-router-dom';
import { Home } from '../components/Home';
import { useAuth } from '../hooks/useAuth';

export const HomePage = () => {
  const { isAuth } = useAuth();

  return isAuth ? <Home /> : <Navigate to='/login' />;
};
