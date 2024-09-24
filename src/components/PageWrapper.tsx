import { Container, Box, useTheme } from '@mui/material';

interface PageWrapperProps {
  children: React.ReactNode;
  backgroundImage?: string;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  const theme = useTheme();

  const styles = {
    root: {
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      borderRadius: 2,
      color: theme.palette.common.white,
    },
  };

  return (
    <Box sx={styles.root}>
      <Container sx={styles.container}>{children}</Container>
    </Box>
  );
};

export default PageWrapper;
