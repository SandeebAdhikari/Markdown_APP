import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

const rootElement = document.getElementById("root");
const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
  document.documentElement.classList.add("dark");
}

createRoot(rootElement!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
