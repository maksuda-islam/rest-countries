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
// import Brightness3Icon from '@material-ui/icons/Brightness3';
import NightsStayIcon from '@material-ui/icons/NightsStay';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 30,
    
  },
  paper:{
    marginBottom: 30,
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  toolbar:{
    justifyContent: 'space-between',
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
    
    <div className={classes.root}> 
      <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Paper position="static" className={classes.paper}>
        <Toolbar className={classes.toolbar}>
        <Typography variant="h5">
          Where in the world?
          </Typography>          
          <Button onClick={handleDarkModeToggle}> 
          <NightsStayIcon></NightsStayIcon>
            Dark Mode
          </Button>
        </Toolbar>
      </Paper >
      <div className={classes.flex}>
        <SearchBar />
        <Filter/>
      </div>
      <Countries />
      <Paper style={{textAlign:'center', height:60,}}>
        <Typography variant="h6" style={{marginTop:30,}}>
          Copyright @maksudaislam@gmail.com 2021
        </Typography>
      </Paper>
    </ThemeProvider>
    </div>
  )
}

export default App
