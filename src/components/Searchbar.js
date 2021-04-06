import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import SearchBar from "material-ui-search-bar";

const url = 'https://restcountries.eu/rest/v2/all';


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 320,
    },

  }))

function Searchbar(props){ 
    const classes = useStyles();
return (
  <SearchBar
  onChange={(newValue) => {
    // console.log(newValue)    
    props.searchCountries(newValue)}

  }
/>
);

}

export default Searchbar;
