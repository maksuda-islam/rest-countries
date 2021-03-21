import React from "react";
import Country from "./Country";
const CountryList = props => {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          {props.name.map((name, i) => {
            return <Country countrydata={name} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CountryList;
