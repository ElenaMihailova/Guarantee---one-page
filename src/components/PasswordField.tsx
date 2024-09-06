import React, { useState } from 'react';
import { TextField, IconButton, InputAdornment, useTheme } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

interface PasswordFieldProps {
  label: string;
  isRequired?: boolean;
}

const PasswordField: React.FC<PasswordFieldProps> = ({
  label,
  isRequired = false,
}) => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <TextField
      fullWidth
      label={label}
      type={showPassword ? 'text' : 'password'}
      value={password}
      onChange={handlePasswordChange}
      required={isRequired}
      variant="standard"
      InputProps={{
        sx: {
          '&:before': {
            borderBottomColor: theme.palette.secondary.main,
          },
          '&:hover:not(.Mui-disabled):before': {
            borderBottomColor: theme.palette.primary.dark,
          },
          '&:after': {
            borderBottomColor: theme.palette.primary.dark,
          },
          input: {
            fontWeight: 500,
            fontSize: '18px',
            color: theme.palette.secondary.main,
          },
        },
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
              sx={{ color: theme.palette.secondary.main }}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      InputLabelProps={{
        sx: {
          fontWeight: 500,
          fontSize: '16px',
          color: theme.palette.secondary.main,
          '&.Mui-focused': {
            color: theme.palette.secondary.main,
          },
        },
      }}
    />
  );
};

export default PasswordField;
