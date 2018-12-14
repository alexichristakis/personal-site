import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

import "normalize.css";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
