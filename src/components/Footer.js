import { Paper } from '@material-ui/core';
import React from 'react';
import CopyrightIcon from '@material-ui/icons/Copyright';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({

    paper:
    {
        textAlign: 'center', paddingTop: 20, paddingBottom: 20, paddingLeft: 10, paddingRight: 10
    },
    root:
    {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '2.5rem',
    },
    a:
    {
        color: 'inherit',
        textDecoration: 'none',

    },
    spanStyle: {
        fontWeight: 700,
    }
}));
const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper className={classes.paper} elevation={0}>
                <CopyrightIcon style={{ fontSize: 'small' }} />
                <span style={{ marginLeft: 5 }}>Copyright</span> {new Date().getFullYear()}. Challenge by <a href="https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca" className={classes.a}><span className={classes.spanStyle}>frontend Mentor</span></a>. Coded by <a href="https://github.com/kima063" className={classes.a}> <span className={classes.spanStyle}>Maksuda Islam Lima</span></a>.
            </Paper>
        </div>
    )
}

export default Footer;
