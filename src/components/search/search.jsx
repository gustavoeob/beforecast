import { useState,  } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../../api";
import "./search.scss";

const Search = ({ onSearchChange }) => {
  const [t] = useTranslation("global")
  const [search, setSearch] = useState(null);
  const navigate = useNavigate();
  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=250000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };
  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
    const city = searchData.label.toLowerCase().split(",")[0];
    navigate(`/weather/${city.replace(/\s+/g, "-")}`);
  };
  
  return (
    <AsyncPaginate
      placeholder={t("search-bar.placeholder")}
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
      className="search-bar"
    />
  );
};

export default Search;
