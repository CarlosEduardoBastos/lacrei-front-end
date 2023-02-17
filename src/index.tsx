import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Router } from './Router';
import { GlobalStyles } from './styles/global-styles';
import { theme } from './styles/theme';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
);


