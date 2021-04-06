import React, {useState, useEffect } from 'react';
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
import Searchbar from "./components/Searchbar";
// import Brightness3Icon from '@material-ui/icons/Brightness3';
import NightsStayIcon from '@material-ui/icons/NightsStay';

const url = 'https://restcountries.eu/rest/v2/all';

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

  const [countries, setCountries] = useState([])
  const [searchCountry, setsearchCountry] = useState([])
  const fetchCountryData = async() => {
    const response = await fetch(url)
    const countries = await response.json()
    setCountries(countries)
    setsearchCountry(countries)
  }

  const searchCountries = (searchTerm) =>{
    var result = [...countries];
    result = result.filter(a => a.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setsearchCountry(result)
    // console.log(countries)
}


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
    fetchCountryData();
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
        <Searchbar searchCountries={searchCountries}/>
        <Filter/>
      </div>
      <Countries countries={searchCountry}/>
      <Paper style={{textAlign:'center', height:60,}}>
        <Typography variant="h6" style={{padding:15,}}>
          Copyright maksudaislamlima 2021
        </Typography>
      </Paper>
    </ThemeProvider>
    </div>
  )
}

export default App
