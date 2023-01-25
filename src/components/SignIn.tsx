import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../hooks/redux';
import { setUser } from '../store/userSlice';
import { Form } from './Form';

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
      .catch(() => alert("This user doesn't exist."));
  };

  return (
    <div>
      <Form
        title='Log In'
        callback={handleLogin}
      />
    </div>
  );
};
