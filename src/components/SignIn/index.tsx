import {
  browserLocalPersistence,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import { setUser } from '../../store/userSlice';
import { notify } from '../../utils/warn';
import { Form } from '../Form';
import { Toast } from '../Toast';

export const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const auth = getAuth();
  auth.setPersistence(browserLocalPersistence);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        navigate('/');
      } else {
        navigate('/login');
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate, auth.currentUser]);

  const handleLogin = (email: string, password: string) => {
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
