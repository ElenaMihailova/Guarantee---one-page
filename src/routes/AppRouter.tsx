import { Routes, Route } from 'react-router-dom';
import WelcomePage from '../pages/WelcomePage/WelcomePage.container';
import AuthPage from '../pages/AuthPage/AutPage.container';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  );
};

export default AppRouter;
