import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button'
import { ButtonGroup } from '@mui/material';
import { AppBar } from '@mui/material';
import {HomeMaxOutlined, DeleteForeverOutlined} from '@mui/icons-material';

import { ThemeProvider, createTheme } from '@mui/material';
import { green } from '@mui/material/colors';

// Palette created using https://material.io/inline-tools/color/
const theme = createTheme({
  palette: {
    primary: {
      main: '#25a6c9',
    },
    secondary: {
      main: '#c94925',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <AppBar color='secondary'>Hi</AppBar>
          <ButtonGroup>
            <Button
              startIcon={<HomeMaxOutlined></HomeMaxOutlined>}
              size="large"
              variant="contained" 
              color="primary">
              Save
            </Button>
            <Button
              startIcon={<DeleteForeverOutlined />}
              size="large"
              variant="contained" 
              color="secondary">
              Delete
            </Button>
          </ButtonGroup>
          <img src={logo} className="App-logo" alt="logo" />

        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
