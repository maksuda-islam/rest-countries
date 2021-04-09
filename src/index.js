import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import App from "./App";
import CountryDetails from './components/CountryDetails';
import Theme from './components/Theme';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route} from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Theme/>
            <div>
                <Route path="/rest-countries" exact component={App}/>
                <Route path="/rest-countries/:alpha3Code" exact component={CountryDetails} />
            </div>
            <Footer />
         
        </Router>
    </React.StrictMode>,
document.getElementById("root"));
