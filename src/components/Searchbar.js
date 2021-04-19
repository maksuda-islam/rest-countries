import React from 'react'
import SearchBar from "material-ui-search-bar";


function Searchbar(props) {
  return (
    <div variant="body1">
      <SearchBar
        placeholder="Search by Country Name"
        onChange={(newValue) => {
          props.searchCountries(newValue)
        }

        }
      />
    </div>
  );
}

export default Searchbar;
