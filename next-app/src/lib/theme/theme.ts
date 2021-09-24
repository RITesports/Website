import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = responsiveFontSizes(createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        html, body, #__next {
          height: 100%;
        }

        #__next {
          display: flex;
          flex-direction: column;
        }

        main {
          flex: 1;
        }
      `,
    },
  },
  palette: {
    primary: {
      main: '#f25822',
    },
    secondary: {
      main: '#1e1e1e',
    },
    error: {
      main: '#d41042',
    },
    warning: {
      main: '#f9ca19',
    },
    info: {
      main: '#1f6fc8',
    },
    success: {
      main: '#58b313',
    },
  },
  typography: {
    fontFamily: "'Proxima Nova'",
    h1: {
      fontFamily: 'Industry',
      fontWeight: 800,
    },
    h2: {
      fontFamily: 'Industry',
      fontWeight: 800,
    },
    h3: {
      fontFamily: 'Industry',
      fontWeight: 800,
    },
    h4: {
      fontFamily: 'Industry',
      fontWeight: 800,
    },
    h5: {
      fontFamily: 'Industry',
      fontWeight: 800,
    },
    h6: {
      fontFamily: 'Industry',
      fontWeight: 800,
    },
    body1: {
      fontWeight: 300,
    },
    body2: {
      fontWeight: 300,
    },
  },
}));

export default theme;
