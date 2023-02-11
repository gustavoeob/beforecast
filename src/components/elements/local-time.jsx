import React, { useState, useEffect } from "react";
import { DateTime } from "luxon";
import "./local-time.scss";
import { useTranslation } from "react-i18next";

export const LocalTime = () => {
  const [t] = useTranslation("global");
  const [time, setTime] = useState(DateTime.local().toFormat("HH:mm:ss"));
  const [date, setDate] = useState(DateTime.local().toFormat("dd/MM/yyyy"));
  const [dayOfWeek, setDayOfWeek] = useState(DateTime.local().toFormat("cccc"));

  useEffect(() => {
    const updateTime = () => {
      const translatedDays = [
        t("dayOfWeek.monday"),
        t("dayOfWeek.tuesday"),
        t("dayOfWeek.wednesday"),
        t("dayOfWeek.thursday"),
        t("dayOfWeek.friday"),
        t("dayOfWeek.saturday"),
        t("dayOfWeek.sunday"),
      ];
      const local = DateTime.local();
      setTime(local.toFormat("HH:mm"));
      setDate(local.toFormat("dd/MM/yyyy"));
      const dayInAWeek = new Date().getDay();
      setDayOfWeek(translatedDays[dayInAWeek-1]);
      setTimeout(updateTime, 1000);
    };
    updateTime();
  }, [t]);
  return (
    <div className="current-time-box">
      <div>
        <p className="current-time-label">{dayOfWeek}</p>
        <p className="current-time">{date}</p>
      </div>
      <div>
        <p className="current-time-label">{t("current.timezone")}</p>
        <p className="current-time">{time}</p>
      </div>
    </div>
  );
};
