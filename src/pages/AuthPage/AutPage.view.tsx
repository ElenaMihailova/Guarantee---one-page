import React from 'react';
import { Typography, Button, Link, Box, useTheme } from '@mui/material';
import PageWrapper from '../../components/PageWrapper';
import CustomTextField from '../../components/CustomTextField';
import PasswordField from '../../components/PasswordField';

const AuthPageView = () => {
  const theme = useTheme();

  return (
    <PageWrapper backgroundImage="../../assets/back.jpg">
      <Typography
        variant="h3"
        gutterBottom
        align="center"
        color={theme.palette.text.primary}
      >
        Авторизация
      </Typography>

      <Box sx={{ mb: 2 }}>
        <CustomTextField label="Email" type="email" isRequired />
      </Box>

      <Box sx={{ mb: 2 }}>
        <PasswordField label="Password" isRequired />
      </Box>

      <Box sx={{ mb: 3, textAlign: 'right' }}>
        <Link href="#" color={theme.palette.text.primary} underline="hover">
          Забыли пароль?
        </Link>
      </Box>

      <Button variant="contained" color="primary" fullWidth>
        Войти
      </Button>
    </PageWrapper>
  );
};

export default AuthPageView;
