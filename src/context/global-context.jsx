import React, { useState, useEffect } from "react";
import { createContext } from "react";
import { WEATHER_API_URL } from "../api";

export const GlobalContext = createContext();
export const GlobalProvider = ({ children }) => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [unit, setUnit] = useState("metric");
  const [lang, setLang] = useState("en");
  const [forecast, setForecast] = useState(null);
  const [background, setBackground] = useState(null);
  const [city, setCity] = useState(null);
  const [time, setTime] = useState(null);
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [localWeatherData, setLocalWeatherData] = useState({});
  const [localForecastData, setLocalForecastData] = useState({});

  const handleOnSearchChange = async (searchData) => {
    setIsLoading(true);
    const [lat, lon] = searchData.value.split(" ");
    setLat(lat);
    setLon(lon);
    try {
      const currentWeatherFetch = await fetch(
        `${WEATHER_API_URL}weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=${unit}&lang=${lang}`
      );
      const forecastFetch = await fetch(
        `${WEATHER_API_URL}forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=${unit}&lang=${lang}`
      );
      const weatherResponse = await currentWeatherFetch.json();
      const forecastResponse = await forecastFetch.json();
      setCurrentWeather({ city: searchData.label, ...weatherResponse });
      setForecast({ city: searchData.label, ...forecastResponse });
      setBackground(weatherResponse);
      setCity(searchData.label);
      setTime(weatherResponse.timezone);
    } catch (error) {
      console.log(error);
      alert(
        "An error occured while fetching the weather data, please try again later."
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (lat && lon && city) {
      handleOnSearchChange({ value: lat + " " + lon, label: city });
      console.log(lang);
    }
    // eslint-disable-next-line
  }, [unit, lang]);

  useEffect(() => {
    const getWeather = () => {
      setIsLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const localForecastFetch = fetch(
            `${WEATHER_API_URL}forecast?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=${unit}&lang=${lang}`
          );
          const localWeatherFetch = fetch(
            `${WEATHER_API_URL}weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=${unit}&lang=${lang}`
          );

          Promise.all([localWeatherFetch, localForecastFetch])
            .then(async (response) => {
              const localWeatherResponse = await response[0].json();
              const localForecastResponse = await response[1].json();
              setLocalWeatherData({
                city: `${localWeatherResponse.name}, ${localWeatherResponse.sys.country}`,
                ...localWeatherResponse,
              });
              setLocalForecastData(localForecastResponse);
              setIsLoading(false);
            })
            .catch((error) => {
              console.log(error);
              alert(
                "An error occured while accessing to the info, please try again later"
              );
            });
        },
        (error) => {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              alert("User denied the request for Geolocation.");
              break;
            case error.POSITION_UNAVAILABLE:
              alert("Location information is unavailable.");
              break;
            case error.TIMEOUT:
              alert("The request to get user location timed out.");
              break;
              default:
              // eslint-disable-next-line
              error.UNKNOWN_ERROR;
              alert("An unknown error occurred.");
              break;
          }
        },
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
    };
    getWeather();
  }, [unit, lang]);

  return (
    <GlobalContext.Provider
      value={{
        handleOnSearchChange,
        currentWeather,
        setCurrentWeather,
        forecast,
        setForecast,
        localWeatherData,
        localForecastData,
        background,
        city,
        setCity,
        unit,
        setUnit,
        setIsLoading,
        isLoading,
        time,
        setLang,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
