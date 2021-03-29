import React,{useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
const url = 'https://restcountries.eu/rest/v2/all';

const CountriesData = () => {
const [countries, setCountries] = useState([])

    const fetchCountryData = async() => {
        const response = await fetch(url)
        const countries = await response.json()
        setCountries(countries)
      }
      useEffect(() =>{
          fetchCountryData()
     }, [])}
export default CountriesData;
