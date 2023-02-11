import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { GlobalProvider } from "./context/global-context";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import global_es from "./translations/es/global.json";
import global_en from "./translations/en/global.json";
import global_fr from "./translations/fr/global.json";
import global_de from "./translations/de/global.json";
import global_it from "./translations/it/global.json";
import global_pt from "./translations/pt/global.json";


i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
    fr: {
      global: global_fr,
    },
    de: {
      global: global_de,
    },
    it: {
      global: global_it,
    },
    pt: {
      global: global_pt,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </I18nextProvider>
  </React.StrictMode>
);
