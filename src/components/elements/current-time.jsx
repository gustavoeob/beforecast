import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { GlobalContext } from "../../context/global-context";
const { Duration, DateTime } = require("luxon");

export const CurrentTime = () => {
  const [t] = useTranslation("global")
  const { time } = useContext(GlobalContext);
  const timezoneOffset = time;
  const duration = Duration.fromObject({ seconds: timezoneOffset });
  const utc = DateTime.utc();
  const currentCityTime = utc.plus(duration).toFormat("HH:mm");
  const currentCityDate = utc.plus(duration).toFormat("dd/MM/yyyy");
  const currentCityDay = utc.plus(duration).toFormat("cccc");
  const currentCityDayTranslated = t(`dayOfWeek.${currentCityDay.toLowerCase()}`);


  return (
    <div className="current-time-box">
      <div>
        <p className="current-time-label">{currentCityDayTranslated}</p>
        <p className="current-time">{currentCityDate}</p>
      </div>
      <div>
        <p className="current-time-label">{t("current.timezone")}</p>
        <p className="current-time">{currentCityTime}</p>
      </div>
    </div>
  );
};
