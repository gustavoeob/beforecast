import { FakeDate } from "./fake-date";
import { FakeForecast } from "./fake-forecast";
import { FakeWeather } from "./fake-weather";
import "./loading-data.scss";

export const LoadingData = () => {
  return (
    <div className="loading-view">
      <>
        <div className=".curr-weather-time-box">
          <FakeWeather />
          <FakeDate />
        </div>
        <div>
          <FakeForecast />
        </div>
      </>
    </div>
  );
};
