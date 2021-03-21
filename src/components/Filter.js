import * as React from "react";

import FilterMaterialUi, { FilterField, TYPE } from "filter-material-ui";
export default function Filter(props) {
  return (
    <div>
      <FilterMaterialUi
        textPrefix="Filter by Region"
        textSuffix="."
        data={props.Countrydata}
        fields={props.region}
        onChange={props.handleChange}
      />
    </div>
  );
}
