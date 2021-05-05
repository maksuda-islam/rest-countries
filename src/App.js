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
    justifyContent: 'space-between',
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
  const [empty, setEmpty] = useState(false)
  const fetchCountryData = async () => {
    const response = await fetch(url)
    const countries = await response.json()
    setCountries(countries)
    setsearchCountry(countries)
  }

  const searchCountries = (searchTerm) => {
    var search = [...countries];
    search = search.filter(a => a.name.toLowerCase().includes(searchTerm.toLowerCase()));
    (search.length===0 ) ? setEmpty(true) : setEmpty(false)
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
          <Grid item xs={12} sm={3} style={{ marginBottom: 20,}}>
            <Searchbar searchCountries={searchCountries} />
          </Grid>
          <Grid item xs={12} sm={2}>
            <Filter filterCountries={filterCountries} />
          </Grid>
        </Grid>
        {empty===true ? <h2>Not Found</h2> :
        <Countries countries={searchCountry} /> }
      </ThemeProvider>

    </div>
  )
}

export default App
