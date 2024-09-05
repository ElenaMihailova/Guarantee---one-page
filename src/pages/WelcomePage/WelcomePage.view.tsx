import { Typography } from '@mui/material';
import PageWrapper from '../../components/PageWrapper';

const WelcomePageView = () => {
  return (
    <PageWrapper backgroundImage="../../assets/back.jpg">
      <Typography variant="h3" gutterBottom align="center" color="white">
        Welcome to the App
      </Typography>
    </PageWrapper>
  );
};

export default WelcomePageView;
