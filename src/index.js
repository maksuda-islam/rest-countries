import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CountryDetails from './components/CountryDetails';
import Theme from './components/Theme';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route} from "react-router-dom";

import { ThemeProvider } from "@material-ui/core/styles";



ReactDOM.render(
  <Router>
    <Theme />
    <ThemeProvider>

    <div>
      <Route path="/rest-countries" exact component={App} />

      <Route path="/rest-countries/:alpha3Code" exact component={CountryDetails} />
    </div>
    <Footer />
    </ThemeProvider>
  </Router>,
  document.getElementById("root"));
