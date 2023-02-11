import React, { useContext } from "react";
import "./weather-page.scss";
import { GlobalContext } from "../../context/global-context";
import {CurrentWeather} from "./cities/current-weather";
import {Background} from "../elements/background";
import {Forecast} from "../forecast/cities/forecast";
import { LoadingData } from "../views/loading/loading-data";
import { CurrentTime } from "../elements/current-time";

const WeatherPage = () => {
  const { currentWeather, forecast, background, isLoading } =
    useContext(GlobalContext);
  return (
    <>
      <div>{background && <Background data={background} />}</div>
      <div className="weather-page-box">
        <div className="main-content-box">
          {currentWeather && forecast && !isLoading ? (
            <div className="weather-display-city">
              <div className="curr-weather-time-box">
                <CurrentWeather data={currentWeather} />
                <CurrentTime />
              </div>
              <div>
                <Forecast data={forecast} curr={currentWeather} />
              </div>
            </div>
          ) : (
            <LoadingData />
          )}
        </div>
      </div>
    </>
  );
};

export default WeatherPage;
