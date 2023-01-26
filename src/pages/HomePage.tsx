import { getAuth, signOut } from 'firebase/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../hooks/redux';
import { removeUser } from '../store/userSlice';
import { useAuth } from '../hooks/useAuth';

export const HomePage = () => {
  const { isAuth, email } = useAuth();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const auth = getAuth();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(removeUser());
        navigate('/login');
      })
      .catch((err) => console.log(err));
  };

  return isAuth ? (
    <div>
      <h1>Welcome</h1>
      <button onClick={handleSignOut}>Log out from {email}</button>
    </div>
  ) : (
    <Navigate to='/login' />
  );
};
