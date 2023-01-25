import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { SignInPage } from './pages/SignInPage';
import { SignUpPage } from './pages/SignUpPage';

export const App = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<HomePage />}
      />
      <Route
        path='/login'
        element={<SignInPage />}
      />
      <Route
        path='/register'
        element={<SignUpPage />}
      />
    </Routes>
  );
};
