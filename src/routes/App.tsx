import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login/Login';
import WithAuthRouter from './WithAuthRouter';
import { ThemeProvider } from 'styled-components';
import GlobalStyles, { theme } from '../CSS/globalStyles';
import Dashboard from '../pages/Dashboard/Dashboard';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes>
        <Route
          path="/"
          element={
            <WithAuthRouter>
              <Dashboard />
            </WithAuthRouter>
          }
        />
        <Route
          path="/login"
          element={
            <WithAuthRouter loggedNeeded={false}>
              <Login />
            </WithAuthRouter>
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
