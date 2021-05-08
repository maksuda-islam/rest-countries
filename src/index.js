import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CountryDetails from "./components/CountryDetails";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {
    createMuiTheme,
    ThemeProvider
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import NightsStayIcon from "@material-ui/icons/NightsStay";
const useStyles = makeStyles(() => ({
    toolbar: {
        justifyContent: "space-between"
    },
    root: {
        position: 'relative',
        minHeight: '100vh',

    },
    wrapper: {
        paddingBottom: '3rem',
    }
}));

export default function Root() {
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
    const [darkMode, setDarkMode] = React.useState(prefersDarkMode);

    const theme = createMuiTheme({
        palette: {
            type: darkMode ? "dark" : "light"
        },
    });
    theme.typography.h5 = {
        fontSize: '1.5rem',
        '@media (min-width:600px)': {
            fontSize: '1.5rem',
            fontWeight: 400,
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '1.2rem',
            fontWeight: 250,
        },
    };
    theme.typography.h6 = {
        fontSize: '1rem',
        '@media (min-width:600px)': {
            fontSize: '1rem',
            fontWeight: 400,
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '0.9rem',
            fontWeight: 250,
        },
    };

    useEffect(() => {
        setDarkMode(prefersDarkMode);
    }, [prefersDarkMode]);

    const handleDarkModeToggle = () => {
        setDarkMode(!darkMode);
    };

    const classes = useStyles();

    return (

        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className={classes.root}>
                <Paper position="static">
                    <Toolbar className={classes.toolbar}>
                        <Typography variant="h5"> Where in the world ? </Typography>
                        <Button onClick={handleDarkModeToggle}>
                            <NightsStayIcon>
                            </NightsStayIcon>
                            <Typography variant="h6">Dark Mode </Typography></Button>
                    </Toolbar>
                </Paper>
                <div className={classes.wrapper} >
                    <Router basename="/rest-countries">
                        <Switch>
                            <Route path="/"
                                exact component={App} />
                            <Route path="/:alpha3Code"
                                exact component={CountryDetails} />
                        </Switch>
                    </Router>
                </div>
                <Footer />
            </div>
        </ThemeProvider>
    );
}

ReactDOM.render(< Root />, document.getElementById("root"));
