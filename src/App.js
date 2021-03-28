import SearchBar from 'material-ui-search-bar';
import React, { useEffect } from 'react';
import Countries from './components/Countries';
import Filter from './components/Filter';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [darkMode, setDarkMode] = React.useState(prefersDarkMode);

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: darkMode ? 'dark' : 'light',
        },
      }),
  );
  useEffect(() => {
    setDarkMode(prefersDarkMode);
  }, [prefersDarkMode]);
  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };
  const classes = useStyles();
  
  return (
    
    <div> 
      <ThemeProvider theme={theme}>
      <CssBaseline/>
      <AppBar position="static" style={{ background: 'transparent', marginBottom: 30}}>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
          Where in the world?
          </Typography>
          <Button onClick={handleDarkModeToggle}>Dark Mode</Button>
        </Toolbar>
      </AppBar>
      <div style={{display:'flex'}}>
        <SearchBar />
        <Filter/>
      </div>
      <Countries />
    </ThemeProvider>
    </div>
  )
}

export default App
