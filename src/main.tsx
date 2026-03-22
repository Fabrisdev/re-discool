import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const rootDiv = document.getElementById("root");
if (rootDiv === null) throw new Error("Missing root div in HTML");
const root = ReactDOM.createRoot(rootDiv);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
