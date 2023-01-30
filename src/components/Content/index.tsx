import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import { removeUser } from '../../store/userSlice';

export const Content = () => {
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

  return <div>Home</div>;
};
