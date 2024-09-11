import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ForgotPasswordPage } from './pages/ForgotPasswordPage/ForgotPasswordPage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { ToastContainer } from 'react-toastify';
import { LoggedInRoute } from './pages/RouteValidation/LoggedInRoute';
import { Home } from './containers/Home';
import { FORGOT_PASSWORD_PATH, LOGIN_PATH, REGISTER_PATH } from './utils/path';
import { ErrorBoundary } from './containers/ErrorBoundry';
import './i18n';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { adminPanelTheme } from './theme/adminPanelTheme';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={adminPanelTheme}>
        <Router>
          <ToastContainer />
          <Routes>
            <Route
              path="/*"
              element={
                <LoggedInRoute>
                  <ErrorBoundary>
                    <Home />
                  </ErrorBoundary>
                </LoggedInRoute>
              }
            />
            <Route path={LOGIN_PATH} element={<LoginPage />} />
            <Route path={REGISTER_PATH} element={<RegisterPage />} />
            <Route
              path={FORGOT_PASSWORD_PATH}
              element={<ForgotPasswordPage />}
            />
          </Routes>
        </Router>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
