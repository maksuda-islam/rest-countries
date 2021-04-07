import React,{useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {
  BrowserRouter as Router,
  NavLink,
  useLocation
} from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
  overflow:'hidden',
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 1200,
    maxHeight:1000,
  },
  image: {
    width: 428,
    height: 428,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: 420,
    maxHeight: 420,
  },
  nav:{
    textDecoration: 'None',
  },
}));

const CodeURL = "https://restcountries.eu/rest/v2/alpha"


export default function CountryDetails(props) {
  const classes = useStyles();
  const [countryByCodeURL, setCountryByCodeURL ] = useState(CodeURL+window.location.pathname)

  const [countryByCode,setCountryByCode] = useState([]);

  const fetchCountryDataByCode = async() => {
    const response = await fetch(CodeURL+window.location.pathname)
    const data = await response.json()
    setCountryByCode(data)
    console.log(window.location.pathname)
  } 

  useEffect(()=>{
    fetchCountryDataByCode();  
  },[countryByCodeURL]);



  return (
    <div className={classes.root}>
     

          <NavLink className={classes.nav} to={{pathname: "/"}}>
        <Button variant="outlined"> <ArrowBackIcon /> Back</Button> </NavLink> 
        <Grid container spacing={2}>
          <Grid item>
          <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={countryByCode.flag} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h4">
                  <strong>{countryByCode.name}</strong>
                </Typography>                                                                                                                                
                <Typography variant="body2" gutterBottom>
                  <Typography> <strong>Native Name : </strong>{countryByCode.nativeName} </Typography>
                  <Typography><strong>Population : </strong>{countryByCode.population} </Typography>
                  <Typography><strong>Region : </strong>{countryByCode.region} </Typography> 
                  <Typography><strong>Sub Region : </strong>{countryByCode.subregion} </Typography>
                  <Typography><strong>Capital : </strong>{countryByCode.capital} </Typography>
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body3" style={{ cursor: 'pointer' }}>
                  <strong>Border Countries : </strong>
                  {countryByCode.borders ==undefined ? "" : (countryByCode.borders.map(e =>
                   <NavLink className={classes.nav}
                  to={{pathname: "/" + e}}
                    onClick={()=>{
                      setCountryByCodeURL(CodeURL + "/" + e)
                      console.log(CodeURL + "/" + e)
                    }}> 
                    <Button varient="outline">
                    {e} 
                    </Button></NavLink>
                  

                  ))}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
            <Typography variant="body2" style={{marginTop:40,}}>
                <Typography><strong>Top Level Domain : </strong>
                {countryByCode.topLevelDomain == undefined ? "" : (countryByCode.topLevelDomain.join(", "))}
                </Typography>
              <Typography><strong>Currencies : </strong>
              {countryByCode.currencies == undefined ? "" : (countryByCode.currencies.map(e => e.name).join(", "))} 
              </Typography>
                  <Typography><strong>Languages : </strong>
                  {countryByCode.languages == undefined ? "" : (countryByCode.languages.map(e => e.name).join(", "))}
                   </Typography>
                </Typography>
            </Grid>
          </Grid>
        </Grid>

    </div>
  );
}