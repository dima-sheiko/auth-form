import { Navigate } from 'react-router-dom';
import { Content } from '../components/Content';
import { useAuth } from '../hooks/useAuth';

export const HomePage = () => {
  const { isAuth } = useAuth();

  return isAuth ? <Content /> : <Navigate to='/login' />;
};
