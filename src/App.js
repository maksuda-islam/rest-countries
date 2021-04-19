import React, { useState, useEffect } from 'react';
import Countries from './components/Countries';
import Filter from './components/Filter';
import { makeStyles } from '@material-ui/core/styles';
import Searchbar from "./components/Searchbar";
import Grid from '@material-ui/core/Grid';

import { ThemeProvider } from "@material-ui/core/styles";

const url = 'https://restcountries.eu/rest/v2/all';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
    justifyContent:'space-between',
    width: '100%'
  },
  root: {
    padding: 30,

  },
  paper: {
    marginBottom: 30,
  },
  flex: {
    justifyContent: 'space-between',
  },
  toolbar: {
    justifyContent: 'space-between',
  }
}));

function App() {
  const [countries, setCountries] = useState([])
  const [searchCountry, setsearchCountry] = useState([])
  const [filterCountry, setfilterCountry] = useState([])
  const fetchCountryData = async () => {
    const response = await fetch(url)
    const countries = await response.json()
    setCountries(countries)
    setsearchCountry(countries)
    setfilterCountry(countries)
  }

  const searchCountries = (searchTerm) => {
    var search = [...countries];
    search = search.filter(a => a.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setsearchCountry(search)
  }

  const filterCountries = (filterTerm) => {
    var filter = [...countries];
    filter = filter.filter(a => a.region.includes(filterTerm));
    setsearchCountry(filter)
  }
  useEffect(() => {
    fetchCountryData();
  },
    []
  );

  const classes = useStyles();

  return (

    <div className={classes.root}>
      <ThemeProvider>
      <Grid container className={classes.flex}>
      <Grid item xs={12} sm={3} style={{marginBottom:20,float:'left'}}>
      <Searchbar searchCountries={searchCountries} />
        </Grid>
        <Grid item xs={12} sm={2} style={{float:'right'}}>
        <Filter filterCountries={filterCountries} />
        </Grid>
        </Grid>
      <Countries countries={searchCountry} />
      </ThemeProvider>

    </div>
  )
}

export default App
