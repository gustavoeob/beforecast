import React, { useContext } from "react";
import "./forecast.scss";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { GlobalContext } from "../../../context/global-context";
import { useTranslation } from "react-i18next";




export const Forecast = ({ data, curr }) => {
  const [t] = useTranslation("global")
  const translatedDays = [
    t("dayOfWeek.monday"), 
    t("dayOfWeek.tuesday"), 
    t("dayOfWeek.wednesday"), 
    t("dayOfWeek.thursday"), 
    t("dayOfWeek.friday"), 
    t("dayOfWeek.saturday"), 
    t("dayOfWeek.sunday")
  ];
  const { unit } = useContext(GlobalContext)
  const dayInAWeek = new Date().getDay();
  const forecastDays = [
    ...translatedDays.slice(dayInAWeek+1),
    ...translatedDays.slice(0, dayInAWeek+1)
]

  return (

    <div>
      <Accordion allowZeroExpanded>
        <h2 className={`color-${curr.weather[0].icon} forecast-title`}>
        {t("title.forecast")}
        </h2>
        {data.list.splice(0, 7).map((item, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item-box">
                  <div className="daily-item">
                    <img
                      alt="weather"
                      className="weather-icon-sm"
                      src={`../assets/icons/${item.weather[0].icon}.gif`}
                    />
                    <p className="forecast-day">
                      {forecastDays[index]}
                    </p>
                  </div>
                  <div className="forecast-temp">
                    <label className="forecast-conditions">
                      {item.weather[0].description}
                    </label>
                    <label className="forecast-min-max">
                      {Math.round(item.main.temp_min)}{unit === "metric" ? "°C" : "°F"} {" "}
                      <span className="min-max-slash">/ </span>
                      {Math.round(item.main.temp_max)}{unit === "metric" ? "°C" : "°F"}
                    </label>
                  </div>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="panel-box">
                <div className="panel-one">
                  <div>{t("details.pressure")} {item.main.pressure} hPa</div>
                  <div> {t("details.humidity")} {item.main.humidity}% </div>
                </div>
                <div className="panel-two">
                  <div> {t("details.wind")} {item.wind.speed}{unit === "metric" ? "m/s" : "m/h"}</div>
                  <div>{t("details.will_feel")} {Math.round(item.main.feels_like)}{unit === "metric" ? "°C" : "°F"}</div>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
