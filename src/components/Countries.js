import React,{useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import {
    Grid,
} from '@material-ui/core/'

import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const url = 'https://restcountries.eu/rest/v2/all';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      marginBottom:20,
    },
    media: {
      height: 140,
    //   backgroundColor: '#dddddd',
    },
  });

const Countries = () => {
    const [countries, setCountries] = useState([])
    const classes = useStyles();

    const fetchCountryData = async() => {
        const response = await fetch(url)
        const countries = await response.json()
        setCountries(countries)
      }

      useEffect(() =>{
          fetchCountryData()
     }, [])
    return (
        <div>
            {countries.map((country) => {
                const{numericCode, flag, name, population, region, capital} = country

                return <article key={numericCode}>
                    <Card className={classes.root}>
                    <Grid
                container
                spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
            >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={flag}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Population: {population}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Region: {region}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
            Capital: {capital}
        </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
          Learn More
        </Button> */}
      </CardActions>
      </Grid>
    </Card>
                </article>
            })}
            
        </div>
    )
}

export default Countries;

