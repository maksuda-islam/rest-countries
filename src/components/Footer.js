import { Paper } from '@material-ui/core';
import React from 'react';
import CopyrightIcon from '@material-ui/icons/Copyright';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({

    paper: {
        textAlign: 'center', height: 60, padding: 10,
    },
    root: {
        marginTop: "calc(12% + 60px)",
    }
}));
const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper className={classes.paper} elevation={0}>
                <CopyrightIcon style={{ fontSize: 'small' }} />
                Copyright 2021. Challenge by frontend Mentor. Coded by Maksuda Islam Lima.
            </Paper>
        </div>
    )
}

export default Footer;
