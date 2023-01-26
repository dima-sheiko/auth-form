import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { IFormData } from '../../types/IFormData';

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
    <div>
      <h1>{title}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('email', {
            required: 'This field is required.',
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
              message: 'Please enter a valid email address.',
            },
          })}
          type='email'
          placeholder='Email'
        />
        <p>{errors.email?.message}</p>
        <input
          {...register('password', {
            required: 'This field is required.',
            minLength: {
              value: 7,
              message: 'Password length must be greater than 7 characters.',
            },
          })}
          type='password'
          placeholder='Password'
        />
        <p>{errors.password?.message}</p>
        <button
          type='submit'
          disabled={!isValid || isSubmitting}
        >
          {title}
        </button>
      </form>
      {title === 'Sign In' ? (
        <div>
          <p>Not a member?</p>
          <Link to='/register'>Register now</Link>
        </div>
      ) : (
        <div>
          <p>Already have an account?</p>
          <Link to='/login'>Sign in</Link>
        </div>
      )}
    </div>
  );
};
