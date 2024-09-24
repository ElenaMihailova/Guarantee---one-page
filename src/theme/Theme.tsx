import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: "'Exo', sans-serif",
  },
  palette: {
    common: {
      white: '#fff',
      black: '#000',
    },
    primary: {
      main: '#14ada9',
      light: '#E0E0E0',
      dark: '#A9A9A9',
      contrastText: '#4B164C',
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
      primary: '#14ada9',
      secondary: '#ff7ba3',
      disabled: '#B8B8B8',
    },
  },
});

export type TTheme = typeof theme;

export type TColorType = keyof TTheme['palette'];
