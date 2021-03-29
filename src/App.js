import SearchBar from 'material-ui-search-bar';
import React, { useEffect } from 'react';
import Countries from './components/Countries';
import Filter from './components/Filter';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 30,
  },
  flex: {
    display: 'flex',
  },
  media: {
    marginLeft: 850,

  }
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
      <Paper position="static" className={classes.root}>
        <Toolbar>
        <Typography variant="h5">
          Where in the world?
          </Typography>
          <Button onClick={handleDarkModeToggle} className={classes.media}>Dark Mode
          </Button>
        </Toolbar>
      </Paper >
      <div className={classes.flex}>
        <SearchBar />
        <Filter/>
      </div>
      <Countries />
    </ThemeProvider>
    </div>
  )
}

export default App
