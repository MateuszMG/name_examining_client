import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import { Routes } from './routes/Routes';
import { GlobalStyle } from './utils/theme/GlobalStyle';
import { Theme, themeVariants } from './utils/theme/themeVariants';

export const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={themeVariants[Theme.DARK]}>
        <GlobalStyle />
        <ToastContainer />
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  );
};
