import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../hooks/redux';
import { setUser } from '../store/userSlice';
import { notify } from '../utils/warn';
import { Form } from './Form';
import { Toast } from './Toast';

export const SignIn = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        navigate('/');
      })
      .catch(notify);
  };

  return (
    <div>
      <Form
        title='Log In'
        callback={handleLogin}
      />
      <Toast />
    </div>
  );
};
