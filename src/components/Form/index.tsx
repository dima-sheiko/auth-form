import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { IFormData } from '../../types/IFormData';
import icon from '../../assets/icon.svg';
import styles from './Form.module.css';

interface FormProps {
  title: string;
  callback: (email: string, password: string) => void;
}

export const Form = ({ title, callback }: FormProps) => {
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<IFormData>({ mode: 'onBlur' });

  const onSubmit = () => {
    const email = getValues('email');
    const password = getValues('password');
    callback(email, password);
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{title}</h1>
      <img
        className={styles.user}
        src={icon}
        alt='user icon'
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.form}
      >
        <div className={styles.input_wrapper}>
          <input
            {...register('email', {
              required: 'This field is required.',
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message: 'Please enter a valid email address.',
              },
            })}
            className={styles.input}
            type='email'
            placeholder='Email'
          />
          <p className={styles.error}>{errors.email?.message}</p>
        </div>
        <div className={styles.input_wrapper}>
          <input
            {...register('password', {
              required: 'This field is required.',
              minLength: {
                value: 7,
                message: 'Password length must be greater than 7 characters.',
              },
            })}
            className={styles.input}
            type='password'
            placeholder='Password'
          />
          <p className={styles.error}>{errors.password?.message}</p>
        </div>
        <button
          className={styles.button}
          type='submit'
          disabled={isSubmitting}
        >
          {title}
        </button>
      </form>
      {title === 'Sign In' ? (
        <div className={styles.info}>
          <p>Don't have an account?</p>
          <Link to='/register'>Sign Up</Link>
        </div>
      ) : (
        <div className={styles.info}>
          <p>Already have an account?</p>
          <Link to='/login'>Sign in</Link>
        </div>
      )}
    </div>
  );
};
