import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const url = 'https://restcountries.eu/rest/v2/region/';


const useStyles = makeStyles((theme) => ({
    formControl: {
      minWidth: 200,
      minHeight: 50,
      marginBottom:20,

    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }))

const Filter = () => {
    const classes = useStyles();
  const [region, setRegion] = useState([])

  useEffect(() =>{
    fetch(url)
    .then((response) => response.json())
    .then((json) => setRegion(json));
  },[])
    const handleChange = (event) => {
        const name = event.target.name;
        setRegion({
          ...region,
          [name]: event.target.value,
        });
      };
    return (
        <div>
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Filter By Region</InputLabel>
        <Select
          native
          value={region}
          onChange={handleChange}
          inputProps={{
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="All" value="" />
          <option value={10}>All</option>
          <option value={20}>Africa</option>
          <option value={30}>America</option>
          <option value={40}>Asia</option>
          <option value={50}>Europe</option>
          <option value={60}>Ocenia</option>
          
        </Select>
      </FormControl>
        </div>
    )
}

export default Filter;
