import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import { removeUser } from '../../store/userSlice';
import styles from './Content.module.css';

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

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Welcome</h1>
        <iframe
          src='https://www.youtube.com/embed/dQw4w9WgXcQ'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        />
        <button
          className={styles.button}
          onClick={handleSignOut}
        >
          Logout
        </button>
      </div>
    </div>
  );
};
