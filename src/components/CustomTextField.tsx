import { TextField, useTheme } from '@mui/material';

interface CustomTextFieldProps {
  type: string;
  label: string;
  isRequired?: boolean;
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  type,
  label,
  isRequired = false,
}) => {
  const theme = useTheme();
  return (
    <TextField
      fullWidth
      label={label}
      variant="standard"
      type={type}
      required={isRequired}
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
        },
      }}
      InputLabelProps={{
        sx: {
          fontWeight: 500,
          fontSize: '16px',
          color: theme.palette.secondary.main,
        },
      }}
      inputProps={{
        sx: {
          fontWeight: 500,
          fontSize: '18px',
          color: theme.palette.secondary.main,
        },
      }}
    />
  );
};

export default CustomTextField;
