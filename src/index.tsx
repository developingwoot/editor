import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/hello";

ReactDOM.render(
    <Hello compiler="TypeScript" framework="Reactjs 1"/>,
    document.getElementById("example")
);