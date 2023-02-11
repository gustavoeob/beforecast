import React, { useContext, useState } from "react";
import "./appbar.scss";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { GlobalContext } from "../../context/global-context";
import Search from "../search/search";
import { debounce } from "lodash";
import { useTranslation } from "react-i18next";

export const Appbar = () => {
  // eslint-disable-next-line
  const [t, i18n] = useTranslation()
  const { handleOnSearchChange, unit, setUnit, setLang } =
    useContext(GlobalContext);
  const debouncedSetUnit = debounce(setUnit);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  const languages = ["EN", "ES", "DE", "FR", "IT", "PT"];
  const handleToggleFahrenheit = () => {
    if (unit === "metric") {
      debouncedSetUnit("imperial");
    }
  };
  const handleToggleCelsius = () => {
    if (unit === "imperial") {
      debouncedSetUnit("metric");
    }
  };
  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
    setLang(e.target.value);
    i18n.changeLanguage(e.target.value.toLowerCase());

    console.log(e.target.value);
  };

  return (
    <>
      <Navbar className="appbar">
        <Container className="appbar-container">
          <div className="appbar-elements-box">
            <a href="/">
              <h1 className="app-title title">Beforecast</h1>
            </a>
            <div className="toggle-temp-box">
              <button
                className="celsius-toggle unit-toggle"
                onClick={handleToggleCelsius}
              >
                °C
              </button>
              <span className="span-div"> |</span>
              <button
                className="fahrenheit-toggle unit-toggle"
                onClick={handleToggleFahrenheit}
              >
                °F
              </button>
            </div>
            <div className="language-selector-flag-box">
              <span
                className={
                  selectedLanguage === "EN"
                    ? "fi fi-us"
                    : `fi fi-${selectedLanguage.toLocaleLowerCase()}`
                }
              ></span>
              <select
                value={selectedLanguage}
                onChange={handleLanguageChange}
                className="select-lang-box"
                placeholder={selectedLanguage}
              >
                {languages.map((language) => (
                  <option
                    key={language}
                    value={language}
                    className={`fi fi-${language}`}
                  >
                    {language}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <Search onSearchChange={handleOnSearchChange} />
        </Container>
      </Navbar>
    </>
  );
};
