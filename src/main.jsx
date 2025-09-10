// import {React} from 'react';
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import "./css/App.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
	<BrowserRouter>
		<StrictMode>
			<App />
		</StrictMode>
	</BrowserRouter>
);
