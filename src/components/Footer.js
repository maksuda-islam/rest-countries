import { Paper } from '@material-ui/core';
import React from 'react';
import CopyrightIcon from '@material-ui/icons/Copyright';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({

    paper: {
        textAlign: 'center', height: 60, paddingTop: 20, paddingLeft:5, paddingRight:5,
        minHeight: "calc(40vh - 32px)"
    },
}));
const Footer = () => {
    const classes = useStyles();
    return (
        <div>
            <Paper className={classes.paper} elevation={0}>
                <CopyrightIcon style={{ fontSize: 'small' }} /> Copyright 2021. Challenge by frontend Mentor. Coded by Maksuda Islam Lima.


            </Paper>
        </div>
    )
}

export default Footer;
