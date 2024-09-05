import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif',
  },
  palette: {
    common: {
      white: '#fff',
      black: '#000',
    },
    primary: {
      main: '#C0C0C0', // Серебристый цвет кнопки
      light: '#E0E0E0', // Светлее серебристого
      dark: '#A9A9A9', // Темнее серебристого
      contrastText: '#4B164C', // Темно-фиолетовый текст на кнопке
    },
    secondary: {
      main: '#4B164C',
    },
    error: {
      main: '#FA8383',
      dark: '#e27878',
      light: '#FF98A5',
    },
    warning: {
      main: '#FECA57',
    },
    background: {
      default: '#fff',
      paper: '#F5F5F5',
    },
    text: {
      primary: '#4B164C',
      secondary: '#808080',
      disabled: '#B8B8B8',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#C0C0C0',
          borderRadius: '40px',
          color: '#4B164C',
          fontSize: '24px',
          fontWeight: 500,
          textTransform: 'none',
          '&:hover': {
            backgroundColor: '#4B164C',
            color: '#FFFFFF',
          },
        },
      },
    },
  },
});

export type TTheme = typeof theme;

export type TColorType = keyof TTheme['palette'];
