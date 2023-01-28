import styles from './Button.module.css';

interface ButtonProps {
  type: 'submit' | 'reset' | 'button';
  disabled: boolean;
  title: string;
}

export const Button = ({ type, disabled, title }: ButtonProps) => {
  return (
    <button
      className={styles.button}
      type={type}
      disabled={disabled}
    >
      {title}
    </button>
  );
};
