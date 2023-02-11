import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
} from "react-accessible-accordion";
import "./fake-forecast.scss";

export const FakeForecast = () => {
  return (
    <div>
      <Accordion allowZeroExpanded>
        <div className="local-weather-title loading">{""}</div>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div className="daily-item-box loading">
                <div className="daily-item loading">
                  <div className="weather-icon-sm loading"></div>
                  <p className="forecast-day loading"></p>
                </div>
                <div className="forecast-temp loading">
                  <label className="forecast-conditions loading"></label>
                  <label className="forecast-min-max loading"></label>
                </div>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div className="daily-item-box loading">
                <div className="daily-item loading">
                  <div className="weather-icon-sm loading"></div>
                  <p className="forecast-day loading"></p>
                </div>
                <div className="forecast-temp loading">
                  <label className="forecast-conditions loading"></label>
                  <label className="forecast-min-max loading"></label>
                </div>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div className="daily-item-box loading">
                <div className="daily-item loading">
                  <div className="weather-icon-sm loading"></div>
                  <p className="forecast-day loading"></p>
                </div>
                <div className="forecast-temp loading">
                  <label className="forecast-conditions loading"></label>
                  <label className="forecast-min-max loading"></label>
                </div>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div className="daily-item-box loading">
                <div className="daily-item loading">
                  <div className="weather-icon-sm loading"></div>
                  <p className="forecast-day loading"></p>
                </div>
                <div className="forecast-temp loading">
                  <label className="forecast-conditions loading"></label>
                  <label className="forecast-min-max loading"></label>
                </div>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div className="daily-item-box loading">
                <div className="daily-item loading">
                  <div className="weather-icon-sm loading"></div>
                  <p className="forecast-day loading"></p>
                </div>
                <div className="forecast-temp loading">
                  <label className="forecast-conditions loading"></label>
                  <label className="forecast-min-max loading"></label>
                </div>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div className="daily-item-box loading">
                <div className="daily-item loading">
                  <div className="weather-icon-sm loading"></div>
                  <p className="forecast-day loading"></p>
                </div>
                <div className="forecast-temp loading">
                  <label className="forecast-conditions loading"></label>
                  <label className="forecast-min-max loading"></label>
                </div>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div className="daily-item-box loading">
                <div className="daily-item loading">
                  <div className="weather-icon-sm loading"></div>
                  <p className="forecast-day loading"></p>
                </div>
                <div className="forecast-temp loading">
                  <label className="forecast-conditions loading"></label>
                  <label className="forecast-min-max loading"></label>
                </div>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
