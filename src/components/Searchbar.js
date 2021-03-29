import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import SearchBar from "material-ui-search-bar";
import Countries from './Countries';

const url = 'https://restcountries.eu/rest/v2/all';
const getCountriesByName = (SearchByName, setCountryData) => {
  CountryAPI.get("/" + SearchByName).then(response => {
    setCountryData(response.data[0]);
    // console.log(response.data);
  });}

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 320,
    },

  }))

export function Searchbar(props){ 
    const classes = useStyles();
    const [SearchByName, setSearchByName] = useState("");
    const [countryData, setcountryData] = useState([]);
    const handleSubmit = async() =>{
      await getCountriesByName(SearchByName, setCountryData);
    }

    const handleChange = newValue => {
      setSearchByName(newValue);
    }
return (
    <div  className={classes.root}>
  <SearchBar
  placeholder="Search for a country"
    onChange={newValue => {props.handleChange(newValue);}}
    onRequestSearch={() =>props.handleSubmit()}
  />
  <Countries countryData={CountryData} />
  </div>
);

}
