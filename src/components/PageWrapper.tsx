import { Container, Box, useTheme } from '@mui/material';

interface PageWrapperProps {
  children: React.ReactNode;
  backgroundImage?: string;
}

const PageWrapper: React.FC<PageWrapperProps> = ({
  children,
  backgroundImage,
}) => {
  const theme = useTheme();

  const styles = {
    root: {
      backgroundImage: `url(${backgroundImage || '../assets/back.jpg'})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      padding: 4,
      borderRadius: 2,
      color: theme.palette.common.white,
      // backgroundColor: theme.palette.primary.light,
    },
  };

  return (
    <Box sx={styles.root}>
      <Container maxWidth="sm" sx={styles.container}>
        {children}
      </Container>
    </Box>
  );
};

export default PageWrapper;
