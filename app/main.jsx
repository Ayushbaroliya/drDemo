import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import AppRouter from "./router";
import "./globals.css";
const rootElement = document.getElementById("root");
if (!rootElement) {
    throw new Error("Root element was not found.");
}
console.log("Starting application render...");
createRoot(rootElement).render(<StrictMode>
    <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AppRouter />
    </HashRouter>
  </StrictMode>);
