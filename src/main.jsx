import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Render the App component inside the root element with StrictMode enabled
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
