import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Grid } from "@material-ui/core/";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { NavLink } from "react-router-dom";
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  media: {
    height: 180
  },
  content: {
    height: 150
  },
  nav: {
    textDecoration: "None"
  },
  cardWidth:{
      width: '21rem'
  }
}));

const Countries = (props) => {
  const classes = useStyles();

  return (
    (props.countries.length) === 0 ?
    <LinearProgress />
      :
      <div className={classes.root}>
        <Grid
          container
          spacing={5}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          {props.countries.map((country) => {
            const {
              numericCode,
              flag,
              name,
              population,
              region,
              capital,
              alpha3Code
            } = country;

            return (
              <Grid item xs={12} sm={6} md={3} key={numericCode}>
                <NavLink className={classes.nav} to={`/${alpha3Code}`}>
                  <Card className={classes.cardWidth}>
                    <CardActionArea>
                      <CardMedia className={classes.media} image={flag} />
                      <CardContent className={classes.content}>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="h2"
                          className={classes.title}
                        >
                          {name}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          Population: {population}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          Region: {region}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          Capital: {capital}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions></CardActions>
                  </Card>
                </NavLink>
              </Grid>
            );
          })}
        </Grid>
      </div>
  );
};

export default Countries;