import { ThemeProvider } from '@mui/material/styles';
import { IndexRouter } from '@src/shared/router';
import { configTheme } from '@src/shared/theme/theme';
import '@src/shared/styles/main.css';
import { Box } from '@mui/material';

const App = (): React.ReactNode => ( 
  <ThemeProvider theme={configTheme(configTheme())}>
    <Box component='main'>
      <IndexRouter />
    </Box>
  </ThemeProvider>
);

export default App;
