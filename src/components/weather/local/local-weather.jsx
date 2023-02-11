import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { GlobalContext } from "../../../context/global-context";

 export const LocalWeather = ({data}) => {
  const [t] = useTranslation("global")

  const { unit } = useContext(GlobalContext);
  return (
    <div className="local-weather-container">
      {
      data.name && (
        <section className="current-weather-box">
          <h2 className="local-weather-title title">{t("title.weather")}</h2>
          <section className="weather-widget">
            <div className="widget-top-box">
              <div className="weather-location">
                <p className="city">{data.city}</p>
                <p className="weather-condition">
                  {data.weather[0].description}
                </p>
              </div>
              <div className="weather-icon-box">
                <img
                  src={`assets/icons/${data.weather[0].icon}.gif`}
                  alt="weather"
                  className="weather-icon"
                />
              </div>
            </div>
            <div className="widget-middle-box">
              <div className="weather-time">
                <div className="min-max-box">
                  <span className="min-temp-label">
                    min {Math.floor(data.main.temp_min)}
                    {unit === "metric" ? "°C" : "°F"}{" "}
                  </span>
                  <br />
                  <span className="max-temp-label">
                    max {Math.ceil(data.main.temp_max)}
                    {unit === "metric" ? "°C" : "°F"}{" "}
                  </span>
                </div>
              </div>
              <div className="temperature-box">
                <span className="temperature">
                  {Math.round(data.main.temp)}
                </span>
                <span className="temperature-scale">
                  {unit === "metric" ? "°C" : "°F"}
                </span>
              </div>
            </div>
            <div className="widget-bottom-box">
              <div className="weather-details">
                <div className="params-one">
                  <p className="param-label title">{t("details.title")}</p>
                </div>
                <div className="params">
                  <p className="param-label">{t("details.feels_like")}</p>
                  <p className="param-value">
                    {Math.round(data.main.feels_like)}°C
                  </p>
                </div>
                <div className="params">
                  <p className="param-label">{t("details.wind")}</p>
                  <p className="param-value">
                    {data.wind.speed}{unit === "metric" ? "m/s" : "m/h"}

                  </p>
                </div>
                <div className="params">
                  <p className="param-label">{t("details.humidity")}</p>
                  <p className="param-value">
                    {data.main.humidity}%
                  </p>
                </div>
                <div className="params">
                  <p className="param-label">{t("details.pressure")}</p>
                  <p className="param-value">
                    {data.main.pressure} hPa
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>
      ) 
    }
    </div>)

}

