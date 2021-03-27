import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
      marginLeft: 900,
      minWidth: 220,
      minHeight: 50,
      marginBottom:20,

    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }))

const Filter = () => {
    const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });
    const handleChange = (event) => {
        const name = event.target.name;
        setState({
          ...state,
          [name]: event.target.value,
        });
      };
    return (
        <div>
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Filter By Region</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange}
          label="Age"
          inputProps={{
            name: 'age',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>
        </div>
    )
}

export default Filter;
