import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#5ed7ff',
    },
    background: {
      default: '#0f3642',
      paper: '#1a4b5c',
    },
    text: {
      primary: '#b4c4c6',
      secondary: '#5ed7ff',
    },
  },
  typography: {
    fontFamily: '"PT Mono", monospace',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#0f3642',
          margin: 0,
          padding: 0,
        },
      },
    },
  },
});