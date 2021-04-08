import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import SearchBar from "material-ui-search-bar";

const useStyles = makeStyles(theme => ({
    root: {
      maxWidth: 320,
      padding: theme.spacing(2)
    },

  }))

function Searchbar(props){ 
    const classes = useStyles();
return (

  <div className="classes.root" variant="body1">
  <SearchBar
  placeholder="Search by Country Name"
  onChange={(newValue) => {
    // console.log(newValue)    
    props.searchCountries(newValue)}

  }
/>
</div>

);

}

export default Searchbar;
