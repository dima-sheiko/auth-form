import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import { setUser } from '../../store/userSlice';
import { notify } from '../../utils/user-exist';
import { Form } from '../Form';
import { Toast } from '../Toast';
import styles from './SignUp.module.css';

export const SignUp = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSignUp = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
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
    <div className={styles.container}>
      <Form
        title='Sign Up'
        callback={handleSignUp}
      />
      <Toast />
    </div>
  );
};
