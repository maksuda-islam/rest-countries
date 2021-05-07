import { Paper } from '@material-ui/core';
import React from 'react';
import CopyrightIcon from '@material-ui/icons/Copyright';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({

    paper: {
        textAlign: 'center',  padding: 10,
        // position: 'fixed',
        // bottom: 0,
        // width: '100%',
        height: 60,
    },
    root: {
        marginTop: "calc(50vh - 64px * 2 )",
        // minHeight: "calc(100vh - 64px * 2)"
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
