import { createTheme } from '@mui/material/styles';

export const adminPanelTheme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      light: '#74C7B5',
    },
    secondary: {
      main: '#3998A0',
    },
    tertiary: {
      main: 'rgba(0, 0, 0, 0.87)',
    },
    error: {
      main: '#F44336',
    },
    info: {
      main: '#0DC4E0',
      dark: '#0093AE',
    },
    warning: {
      main: '#ED6C02',
    },
    success: {
      main: '#00C184',
    },
    background: {
      default: '#F5F5F5',
    },
  },
  typography: {
    h1: {
      fontSize: '36px',
      fontWeight: '700',
      lineHeight: '116.7%',
      letterSpacing: '-0.252px',
    },
    h2: {
      fontSize: '24px',
      fontWeight: '700',
      lineHeight: '116.7%',
      letterSpacing: '-0.168px',
    },
    h3: {
      fontSize: '20px',
      fontWeight: '700',
      lineHeight: '123.5%',
      letterSpacing: '0.25px',
    },
    h4: {
      fontSize: '18px',
      fontWeight: '700',
      lineHeight: '133.4%',
    },
    h5: {
      fontSize: '16px',
      fontWeight: '700',
      lineHeight: '160%',
      letterSpacing: '0.15px',
    },
    h6: {
      fontSize: '16px',
      fontWeight: '700',
      lineHeight: '160%',
      letterSpacing: '0.15px',
    },
    subtitle1: {
      fontSize: '14px',
      fontWeight: '500',
      lineHeight: '175%',
      letterSpacing: '0.15px',
    },
    subtitle2: {
      fontSize: '12px',
      fontWeight: '500',
      lineHeight: '157%',
      letterSpacing: '0.1px',
    },
    body1: {
      fontSize: '16px',
      fontWeight: '400',
      lineHeight: '150%',
      letterSpacing: '0.15px',
    },
    body2: {
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: '143%',
      letterSpacing: '0.17px',
    },
    caption: {
      fontSize: '12px',
      fontWeight: '400',
      lineHeight: '166%',
      letterSpacing: '0.4px',
    },
    button: {
      fontSize: '15px',
      fontWeight: '400',
      lineHeight: '200%',
      letterSpacing: '0px',
      textTransform: 'capitalize',
    },
  },
  components: {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: '#1976d2!important',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#145a86',
            },
          },
        },
      },
    },
  }
});
