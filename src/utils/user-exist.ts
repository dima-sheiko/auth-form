import { toast } from 'react-toastify';

export const notify = () =>
  toast.warn('This user already exists. ', {
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  });
