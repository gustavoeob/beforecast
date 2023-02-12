import { useContext } from "react";
import { GlobalContext } from "../../context/global-context";
import { LocalTime } from "../elements/local-time";
import { LocalForecast } from "../forecast/local/local-forecast";
import { LoadingData } from "../views/loading/loading-data";
import { LocalWeather } from "../weather/local/local-weather";
import "./home.scss"

export const Home = () => {
  const { localWeatherData, localForecastData, isLoading } =
    useContext(GlobalContext);
    console.log(localWeatherData)
  return (
    <>
      <main className="app">
        <div className="main-content-box">
          {isLoading ? (
            <LoadingData />
          ) : (
            <>
              <div className="curr-weather-time-box">
                <LocalWeather data={localWeatherData} />
                <LocalTime />
              </div>
              <div>
                <LocalForecast data={localForecastData} />
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
};
