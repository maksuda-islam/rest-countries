import axios from "axios";

const CountryAPI = axios.create({
  baseURL: "https://restcountries.eu/rest/v2/name/"
});

const getCountriesByName = (SearchByName, setCountryData) => {
  CountryAPI.get("/" + SearchByName).then(response => {
    setCountryData(response.data[0]);
    // console.log(response.data);
  });

  // CountryAPI.get("/bangladesh").then(response => {
  //   console.log(response);
  // });
};

// const getCountriesByRegion = (region) => {
//   CountryAPI.get("/" + SearchByName + region, {
//
// };

// const getCountryDetail = () => {
//   CountryAPI.get("/").then(resonse =>{});
// };
export default getCountriesByName;
