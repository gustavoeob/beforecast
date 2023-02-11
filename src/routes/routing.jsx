import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Appbar } from "../components/appbar/appbar";
import { Home } from "../components/home/home";
import WeatherPage from "../components/weather/weather-page";

export const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/weather/:city" element={<WeatherPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
