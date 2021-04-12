import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CountryDetails from './components/CountryDetails';
// import Theme from './components/Theme';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";



import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme, ThemeProvider, responsiveFontSizes } from "@material-ui/core/styles";
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
  paper: {
    margin:0,
  },

  toolbar: {
    justifyContent: 'space-between',
  }
}));

export default function Theme() {

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
        <CssBaseline />
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
      </ThemeProvider>
    </div>
  )
}



ReactDOM.render(
  <Router>
    <Theme />
   
    <div>
      <Route path="/rest-countries" exact component={App} />
      
      <Route path="/rest-countries/:alpha3Code" exact component={CountryDetails} />

      <Route path="*"> 
      <Redirect to={{pathname:"/rest-countries"}} />
      </Route>
    </div>
    <Footer />
  </Router>,
  document.getElementById("root"));
