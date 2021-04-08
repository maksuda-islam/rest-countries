import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import App from "./App";
import CountryDetails from './components/CountryDetails';
import Theme from './components/Theme';
import Footer from './components/Footer';
import {BrowserRouter as Router, Link, Route, Redirect} from "react-router-dom";
import { createBrowserHistory } from "history";
const customHistory = createBrowserHistory();

ReactDOM.render(
    <React.StrictMode>
        <Router history={customHistory}>
            <Theme/>
            <div>
            <Route exact path="/rest-countries">
                <Redirect to="/" />
            </Route>
                <Route path="/" exact component={App}/>
                <Route path="/:numericCode" exact component={CountryDetails} />
            </div>
            <Footer />
         
        </Router>
    </React.StrictMode>,
document.getElementById("root"));
