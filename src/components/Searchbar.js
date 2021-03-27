import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import SearchBar from "material-ui-search-bar";
// *snip*

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 320,
      marginTop: 30,
      paddingLeft:20,
    },

  }))

const url = 'https://restcountries.eu/rest/v2/all';
const Searchbar = (props) => { 
    const classes = useStyles();
return (
    <div  className={classes.root}>
  <SearchBar
    onChange={newValue => {props.handleChange(newValue);}}
    onRequestSearch={() => props.handleSubmit()}
  />
  </div>
);

}

export default Searchbar;
