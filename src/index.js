import { StrictMode } from "react";
import createRoot from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
createRoot.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
