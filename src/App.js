import React, {useState, useEffect } from 'react';
import Countries from './components/Countries';
import Filter from './components/Filter';
import { makeStyles } from '@material-ui/core/styles';
import Searchbar from "./components/Searchbar";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

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

  const [countries, setCountries] = useState([])
  const [searchCountry, setsearchCountry] = useState([])
  const [filterCountry, setfilterCountry] = useState([])
  const fetchCountryData = async() => {
    const response = await fetch(url)
    const countries = await response.json()
    setCountries(countries)
    setsearchCountry(countries)
    setfilterCountry(countries)
  }

  const searchCountries = (searchTerm) =>{
    var search = [...countries];
    search = search.filter(a => a.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setsearchCountry(search)
    // console.log(countries)
}

  const filterCountries =(filterTerm) =>{
    var filter = [...countries];
    filter = filter.filter(a => a.region.includes(filterTerm));
    setsearchCountry(filter)
  }
  useEffect(() => {
    setDarkMode(prefersDarkMode);
    fetchCountryData();
  }, [prefersDarkMode]);

  const classes = useStyles();
  
  return (
    
    <div className={classes.root}> 
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      
      <div className={classes.flex}>

        <Searchbar searchCountries={searchCountries}/>
        
        <Filter filterCountries={filterCountries}/>

      
      </div>
      <Countries countries={searchCountry}/>

      </ThemeProvider>

    </div>
  )
}

export default App
