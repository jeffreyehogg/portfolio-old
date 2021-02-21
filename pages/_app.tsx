import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme, CssBaseline } from '@material-ui/core';
import Layout from '../components/Layout';
import '../styles/globals.css';

const Theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#212121',
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
