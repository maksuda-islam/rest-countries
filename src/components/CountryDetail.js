import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});
export default function CountryDetail(props) {
  const classes = useStyles();
  const [CurrentCountry, setCurrentCountry] = useState({});

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.countryData.flag}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.countryData.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Native Name: {props.countryData.nativeName}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Population: {props.countryData.population}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Region: {props.countryData.region}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Sub Region: {props.countryData.subregion}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Capital: {props.countryData.capital}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Top Level Domain: {props.countryData.topLevelDomain}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Currencies: {props.countryData.currencies}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Languages: {props.countryData.languages}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <p>Boarder Countries : {props.countryData.borders}</p>
        </CardActions>
      </Card>
    </div>
  );
}
