import React from "react";
import "./fake-weather.scss";

export const FakeWeather = () => {
  return (
    <div>
      <section className="current-weather-box loading">
        <div className="local-weather-title loading">{""}</div>
        <section className="weather-widget loading">
          <div className="widget-top-box loading">
            <div className="weather-location loading">
              <p className="city loading"> </p>
              <p className="weather-condition loading"></p>
            </div>
            <div className="weather-icon-box loading">
              <div className="weather-icon loading"></div>
            </div>
          </div>
          <div className="widget-middle-box loading">
            <div className="weather-time loading">
              <div className="min-max-box loading">
                <div className="min-label loading"></div>
                <div className="max-label loading"></div>
              </div>
            </div>
            <div className="temperature-box loading">
              <span className="temperature loading"></span>
              <span className="temperature-scale loading"></span>
            </div>
          </div>
          <div className="widget-bottom-box loading">
            <div className="weather-details loading">
              <div className="params-one loading"></div>
              <div className="params-container loading">

              <div className="params loading">
                <p className="param-label loading"> </p>
                <p className="param-value loading"></p>
              </div>
              <div className="params loading">
                <p className="param-label loading"> </p>
                <p className="param-value loading"> </p>
              </div>
              <div className="params loading">
                <p className="param-label loading"> </p>
                <p className="param-value loading"> </p>
              </div>
              <div className="params loading">
                <p className="param-label loading"> </p>
                <p className="param-value loading"> </p>
              </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};
