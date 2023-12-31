import { log } from 'console';
import { Profiler } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import { ErrorBoundary } from './hocs/ErrorBoundary/ErrorBoundary';

import { onRenderProfiler } from './helpers/profiler';

import { GlobalStyle } from './utils/theme/GlobalStyle';
import { Theme, themeVariants } from './utils/theme/themeVariants';

import { Routes } from './routes/Routes';

import { store } from './redux/store';

export const App = () => {
  return (
    <Profiler id='app' onRender={onRenderProfiler}>
      <ErrorBoundary>
        <Provider store={store}>
          <BrowserRouter>
            <ThemeProvider theme={themeVariants[Theme.DARK]}>
              <GlobalStyle />
              <ToastContainer />
              <Routes />
            </ThemeProvider>
          </BrowserRouter>
        </Provider>
      </ErrorBoundary>
    </Profiler>
  );
};
