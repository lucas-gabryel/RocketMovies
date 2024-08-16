import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from './pages/Home' // problema com o nome deails, letra maiuscula e minuscula

import GlobalStyle from "./styles/global";
import theme from "./styles/theme";
import { ThemeProvider } from 'styled-components';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  </React.StrictMode>
)
