import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {
  BrowserRouter as Router,
  NavLink
} from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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

export default function CountryDetails(props) {
  const classes = useStyles();
  // const alpha3Code=(code)=>{
  //   return
  //     props.location.alpha3Code = code
  // } 

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>

          <NavLink className={classes.nav} to={{pathname: "/"}}>
        <Button variant="outlined"> <ArrowBackIcon /> Back</Button> </NavLink> 
        <Grid container spacing={2}>
          <Grid item>
          <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={props.location.image} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h4">
                  <strong>{props.location.countryName}</strong>
                </Typography>                                                                                                                                
                <Typography variant="body2" gutterBottom>
                  <Typography> <strong>Native Name : </strong>{props.location.NativeName} </Typography>
                  <Typography><strong>Population : </strong>{props.location.Population} </Typography>
                  <Typography><strong>Region : </strong>{props.location.Region} </Typography> 
                  <Typography><strong>Sub Region : </strong>{props.location.SubRegion} </Typography>
                  <Typography><strong>Capital : </strong>{props.location.Capital} </Typography>
                </Typography>
              </Grid>
              <Grid item>
                {/* <Typography variant="body3" style={{ cursor: 'pointer' }}>
                  <strong>Border Countries : </strong>{props.location.borders.map((border, i) =>{
                    const { props } = this.alpha3Code(border)
                    return(
                      <NavLink
                      key={i}
                      to={{pathname: "/countrydetails/"}}
                      >
                          <span>{props.name}</span>
                      </NavLink>

                    )
                  })}
                </Typography> */}
              </Grid>
            </Grid>
            <Grid item>
            <Typography variant="body2" style={{marginTop:40,}}>
                <Typography><strong>Top Level Domain : </strong>{props.location.topLevelDomain.join(", ")}</Typography>
              <Typography><strong>Currencies : </strong>{props.location.currencies.map(e => e.name).join(", ")} </Typography>
                  <Typography><strong>Languages : </strong>{props.location.Languages.map(e => e.name).join(", ")} </Typography>
                </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}