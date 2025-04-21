import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { getRootAttribute } from "utils";
import { WebSocketProvider } from "Components/WebSocketProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
// let appName = undefined;

let roomName = getRootAttribute("data-room-name");

// If not found in HTML, try parsing from the URL (e.g., /room/GNEO_qKY or /GNEO_qKY)
if (!roomName) {
  const pathParts = window.location.pathname.split("/").filter(Boolean);
  if (pathParts.length > 0) {
    roomName = pathParts[pathParts.length - 1]; // e.g., "GNEO_qKY"
  }
}

console.log("Dynamic roomName:", roomName);

console.log("roomName from index.js: ", roomName);
window.addEventListener("error", function (event) {
  if (
    event?.message?.includes("ChunkLoadError") ||
    event?.message?.includes("Loading chunk")
  ) {
    console.warn("Chunk error caught. Reloading app...");
    window.location.reload();
  }
});

//added by me
window.addEventListener("unhandledrejection", (event) => {
  const message = event.reason?.message || "";
  if (message.includes("ChunkLoadError") || message.includes("Loading chunk")) {
    console.warn("Unhandled rejection from chunk load. Reloading...");
    window.location.reload();
  }
});

//React.StricMode causes double rendering of components in "development" to detect the problems with the code - mekya
root.render(
  <WebSocketProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </WebSocketProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
