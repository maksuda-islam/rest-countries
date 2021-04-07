import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import SearchBar from "material-ui-search-bar";
import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles(theme => ({
    root: {
      maxWidth: 320,
      padding: theme.spacing(2)
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
