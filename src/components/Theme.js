import React, { useEffect } from 'react';
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
    marginBottom: 30,
  },

  toolbar: {
    justifyContent: 'space-between',
  }
}));

function Theme() {

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

export default Theme
