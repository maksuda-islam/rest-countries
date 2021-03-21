import React, { useState } from "react";
import SearchBar from "./components/Searchbar";
import getCountriesByName from "./api/CountryAPI";
import Country from "./components/Country";
import Filter from "./components/Filter";
const App = () => {
  const [SearchByName, setSearchByName] = useState("");
  const [CountryData, setCountryData] = useState([]);

  const handleSubmit = async () => {
    // console.log("please work");
    await getCountriesByName(SearchByName, setCountryData);
    // console.log(CountryData.name);
    // console.log("i cri");
  };
  const handleChange = newValue => {
    // console.log(newValue);
    setSearchByName(newValue);
  };
  return (
    <div>
      <div style={{ alignItems: "center", marginRight: 150 }}>
        <div>
          <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
          <Filter />
        </div>

        <Country countryData={CountryData} />
      </div>
    </div>
  );
};

export default App;
