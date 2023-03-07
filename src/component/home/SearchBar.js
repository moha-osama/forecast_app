import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import classes from "./SearchBar.module.css";

function SearchBar({ onSearchChange, cityName }) {
  const API_URL = cityName.API_URL;
  const options = cityName.options;

  const [search, setSearch] = useState(null);

  const searchHandler = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  const loadOptions = (inputValue) => {
    return fetch(
      `${API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              label: `${city.name}, ${city.countryCode}`,
              value: `${city.latitude} ${city.longitude}`,
            };
          }),
        };
      });
  };

  return (
    <div className={classes.input}>
      <AsyncPaginate
        placeholder="Find your location..."
        debounceTimeout={600}
        value={search}
        onChange={searchHandler}
        loadOptions={loadOptions}
      />
    </div>
  );
}

export default SearchBar;

export async function action({ request, params }) {}
