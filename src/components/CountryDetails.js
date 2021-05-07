import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { NavLink } from "react-router-dom";
import Skeleton from '@material-ui/lab/Skeleton';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "hidden",
    padding: theme.spacing(5),
    fontSize: 18
  },
  buttonStyle: {
    marginBottom: 30,
  },
  img: {
    maxWidth: 600,
    width: '100%',
    height: "auto",
  },
  nav: {
    textDecoration: "None"
  }
}));

const CodeURL = "https://restcountries.eu/rest/v2/alpha/";

export default function CountryDetails(props) {
  const classes = useStyles();
  const [countryByCodeURL, setCountryByCodeURL] = useState(
    CodeURL +
    window.location.pathname.substring(
      window.location.pathname.lastIndexOf("/") + 1
    )
  );

  const [countryByCode, setCountryByCode] = useState([]);

  const fetchCountryDataByCode = async () => {
    const response = await fetch(
      CodeURL +
      window.location.pathname.substring(
        window.location.pathname.lastIndexOf("/") + 1
      )
    );
    const data = await response.json();
    setCountryByCode(data);
  };

  useEffect(() => {
    fetchCountryDataByCode();
  }, [countryByCodeURL]);

  return (
    <Grid lg={12} item container spacing={1} className={classes.root}>
      <Grid item lg={12} xs={12} container>
        <NavLink className={classes.nav} to="/">
          <Button variant="outlined" className={classes.buttonStyle}>
            <ArrowBackIcon /> Back
            </Button>
        </NavLink>
      </Grid>
      <Grid item lg={5} xs={12} >
        {countryByCode.flag === undefined ? (
          <Skeleton variant="rect" width={400} height={250} />
        ) : (
          <img className={classes.img} alt="complex" src={countryByCode.flag} />
        )}
      </Grid>
      {countryByCode.name === undefined ? <CircularProgress /> : (
        <>
          <Grid item lg={3} xs={12} style={{padding:18}}>
            <Typography gutterBottom variant="h4">
              <strong>{countryByCode.name}</strong>
            </Typography>
            <Typography variant="body2" gutterBottom>
              <Typography style={{ fontSize: 18 }}>
                <strong> Native Name: </strong>
                <span style={{fontWeight:200}}>{countryByCode.nativeName}</span>
              </Typography>
              <Typography style={{ fontSize: 18 }}>
                <strong>Population: </strong>
                <span style={{fontWeight:200}}>{countryByCode.population}</span>
              </Typography>
              <Typography style={{ fontSize: 18 }}>
                <strong>Region: </strong>
                <span style={{fontWeight:200}}>{countryByCode.region}</span>
              </Typography>
              <Typography style={{ fontSize: 18 }}>
                <strong>Sub Region: </strong>
                <span style={{fontWeight:200}}>{countryByCode.subregion}</span>
              </Typography>
              <Typography style={{ fontSize: 18 }}>
                <strong>Capital: </strong>
                <span style={{fontWeight:200}}>{countryByCode.capital}</span>
              </Typography>
            </Typography>

            <Typography variant="body3" style={{ cursor: "pointer" }} >
              <strong>Border Countries: </strong>
              {countryByCode.borders.map((e) => (
                <NavLink
                  className={classes.nav}
                  to={{ pathname: "/" + e }}
                  onClick={() => {
                    setCountryByCodeURL(CodeURL + "/" + e);
                  }}
                >
                  <Button variant="outlined" style={{ margin: 3 }}>
                    {e}
                  </Button>
                </NavLink>
              ))}
            </Typography>
          </Grid>
          <Grid item lg={3} xs={12} style={{padding:18}}>
            <Typography variant="body2" style={{ marginTop: 50 }} gutterBottom>
              <Typography style={{ fontSize: 18 }}>
                <strong>Top Level Domain: </strong>
                <span style={{fontWeight:200}}>{countryByCode.topLevelDomain.join(", ")}</span>
              </Typography>
              <Typography style={{ fontSize: 18 }}>
                <strong>Currencies: </strong>
                <span style={{fontWeight:200}}>{countryByCode.currencies.map((e) => e.name).join(", ")}</span>
              </Typography>
              <Typography style={{ fontSize: 18 }}>
                <strong>Languages: </strong>
                <span style={{fontWeight:200}}>{countryByCode.languages.map((e) => e.name).join(", ")}</span>
              </Typography>
            </Typography>
          </Grid>

        </>)}
    </Grid>
  );
}

