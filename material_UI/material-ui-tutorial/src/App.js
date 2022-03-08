import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button'
import { ButtonGroup, IconButton } from '@mui/material';
import {HomeMaxOutlined, DeleteForeverOutlined, Menu} from '@mui/icons-material';

import { ThemeProvider, createTheme } from '@mui/material';
import 'fontsource-roboto';

import { Typography } from '@mui/material';
import { Container } from '@mui/material';

import { Paper } from '@mui/material';
import { Grid } from '@mui/material';

import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';

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
  typography: {
    h2: {
      fontSize: 36,
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='lg'>

        <div className="App">
          <header className="App-header">
            <AppBar>
              <Toolbar>
                <IconButton>
                  <Menu></Menu>
                </IconButton>
                <Typography variant='h6'>
                  MUI Theming
                </Typography>
                <Button>
                  Login
                </Button>
              </Toolbar>
            </AppBar>
            <Typography variant='h2' component="div">
              Welcome to MUI
            </Typography>
            <Typography variant='subtitle1'>
              Learn how to use MUI
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              <Grid item>
                <Paper style={{height: 75, width: 50,}}></Paper>
              </Grid>
              <Grid item>
                <Paper style={{height: 75, width: 50,}}></Paper>
              </Grid>
              <Grid item>
                <Paper style={{height: 75, width: 50,}}></Paper>
              </Grid>
            </Grid>
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
      </Container>
    </ThemeProvider>
  );
}

export default App;
