import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import { Box, Typography } from "@mui/material";

i18next
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "ar"],
    fallbackLng: "en",
    detection: {
      order: ["cookie", "htmlTag", "path", "localStorage", "subdomain"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },
  });
const loading = (
  <Box>
    <Typography variant="h5">Loading</Typography>
  </Box>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={loading}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>
);
