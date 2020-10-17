import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ShortenUrlProvider } from "react-shorten-url";

ReactDOM.render(
  <ShortenUrlProvider config={{ accessToken: "bitly_access_token" }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    ,
  </ShortenUrlProvider>,

  document.getElementById("root")
);
