import { ThemeProvider } from '@mui/material/styles';
import { IndexRouter } from '@src/shared/router';
import { configTheme } from '@src/shared/theme/theme';
import '@src/shared/styles/main.css';
import { SnackbarProvider } from './shared/component/ui/snackbar/Snackbar';
import { AuthContextProvider } from './shared/context/AuthContext';
import { BrowserRouter as Router } from 'react-router-dom';

const App = (): React.ReactNode => (
  <ThemeProvider theme={configTheme(configTheme())}>
    <SnackbarProvider>
      <Router>
        <AuthContextProvider>
          <IndexRouter />
        </AuthContextProvider>
      </Router>
    </SnackbarProvider>
  </ThemeProvider>
);

export default App;
