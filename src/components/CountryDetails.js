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
    padding: theme.spacing(5)
  },
  buttonStyle: {
    marginBottom: 50
  },
  img: {
    maxWidth: 400,
    height: "auto",
    justifyContent: 'center',
    // padding: 10,
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
    <div className={classes.root}>
      <Grid lg={12} item container spacing={3}>
        <Grid item lg={12} xs={12}>
          <NavLink className={classes.nav} to="/">
            <Button variant="outlined" className={classes.buttonStyle}>
              <ArrowBackIcon /> Back
            </Button>
          </NavLink>
        </Grid>
        <Grid item lg={4} xs={12}>
          {countryByCode.flag === undefined ? (
            <Skeleton variant="rect" width={300} height={218} />
          ) : (
            <img className={classes.img} alt="complex" src={countryByCode.flag} />
          )}
        </Grid>
        <Grid item lg={4} xs={12}>
          <Typography gutterBottom variant="h4">
            <strong>{countryByCode.name}</strong>
          </Typography>
          <Typography variant="body2" gutterBottom>
            <Typography>
              <strong>Native Name : </strong>
              {countryByCode.nativeName === undefined ?
                <CircularProgress />
                : countryByCode.nativeName}
            </Typography>
            <Typography>
              <strong>Population : </strong>
              {countryByCode.population === undefined ?
                <CircularProgress />
                : countryByCode.population}
            </Typography>
            <Typography>
              <strong>Region : </strong>
              {countryByCode.region === undefined ?
                <CircularProgress />
                : countryByCode.region}
            </Typography>
            <Typography>
              <strong>Sub Region : </strong>
              {countryByCode.subregion === undefined ?
                <CircularProgress />
                : countryByCode.subregion}
            </Typography>
            <Typography>
              <strong>Capital : </strong>
              {countryByCode.capital === undefined ?
                <CircularProgress />
                : countryByCode.capital}
            </Typography>
          </Typography>

          <Typography variant="body3" style={{ cursor: "pointer" }}>
            <strong>Border Countries : </strong>
            {countryByCode.borders === undefined
              ? <CircularProgress />
              : countryByCode.borders.map((e) => (
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
        <Grid item lg={4} xs={12}>
          <Typography variant="body2" style={{ marginTop: 40 }} gutterBottom>
            <Typography>
              <strong>Top Level Domain : </strong>
              {countryByCode.topLevelDomain === undefined
                ? <CircularProgress />
                : countryByCode.topLevelDomain.join(", ")}
            </Typography>
            <Typography>
              <strong>Currencies : </strong>
              {countryByCode.currencies === undefined
                ? <CircularProgress />
                : countryByCode.currencies.map((e) => e.name).join(", ")}
            </Typography>
            <Typography>
              <strong>Languages : </strong>
              {countryByCode.languages === undefined
                ? <CircularProgress />
                : countryByCode.languages.map((e) => e.name).join(", ")}
            </Typography>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
