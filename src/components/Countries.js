import React,{useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import {Grid} from '@material-ui/core/'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Filter from './Filter';

const useStyles = makeStyles(theme => ({
  root: {
      flexGrow: 1,
      padding: theme.spacing(2)
  },
  media: {
    height: 200,
  },
  content:{
    height: 150,
  }
}))


const Countries = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root} onClick={() => {alert(<Filter />)}}>
           <Grid
                container
                spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
            >
            {props.countries.map((country) => {
                const{numericCode, flag, name, population, region, capital} = country

                return <Grid item xs={12} sm={6} md={3} key={numericCode}>
                    <Card >
                   
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={flag}
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
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
   
    </Card>
                </Grid>
            })}
      </Grid>
            
        </div>
    )
}

export default Countries;

