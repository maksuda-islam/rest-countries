import React from "react";
import SearchBar from "material-ui-search-bar";

export default function Searchbar(props) {
  return (
    <SearchBar
      placeholder="Search for a country"
      onChange={newValue => {
        props.handleChange(newValue);
      }}
      onRequestSearch={() => {
        props.handleSubmit();
      }}
    />
  );
}
