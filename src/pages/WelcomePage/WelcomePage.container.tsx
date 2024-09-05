import { useEffect } from 'react';
import WelcomePageView from './WelcomePage.view';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/auth');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);
  return <WelcomePageView />;
};

export default WelcomePage;
