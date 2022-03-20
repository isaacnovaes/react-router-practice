import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";
// another react-router components that unlock router features
import "./index.css";
import App from "./App";

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById("root")
);
